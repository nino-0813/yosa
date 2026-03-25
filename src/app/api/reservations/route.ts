import type { JWTInput } from "google-auth-library";
import { NextResponse } from "next/server";
import { google } from "googleapis";
import {
  RESERVE_TIME_SLOTS,
  formatNowJst,
  normalizeTime,
  rowsToBookedMap,
  type ReservedSlotMap,
} from "@/lib/reservations";

type Body = {
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  note?: string;
};

type CredsResult =
  | { ok: false; response: NextResponse }
  | {
      ok: true;
      sheets: ReturnType<typeof google.sheets>;
      sheetId: string;
      range: string;
      skipHeader: boolean;
    };

function resolveCreds(): CredsResult {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const range = process.env.GOOGLE_SHEET_RANGE ?? "Sheet1!A:F";
  const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS?.trim();
  const jsonEnv = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const key = rawKey?.includes("\\n") ? rawKey.replace(/\\n/g, "\n") : rawKey;

  const hasKeyFile = Boolean(keyFile);
  const hasInlineCreds = Boolean(email && key);

  let credentials: Record<string, unknown> | null = null;
  if (jsonEnv) {
    try {
      credentials = JSON.parse(jsonEnv) as Record<string, unknown>;
    } catch {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "GOOGLE_SERVICE_ACCOUNT_JSON が正しい JSON ではありません。" },
          { status: 503 },
        ),
      };
    }
  }
  const hasJsonCreds = Boolean(credentials?.client_email && credentials?.private_key);

  if (!sheetId || (!hasKeyFile && !hasJsonCreds && !hasInlineCreds)) {
    return {
      ok: false,
      response: NextResponse.json(
        {
          error:
            "予約の保存先が未設定です。GOOGLE_SHEET_ID と、GOOGLE_APPLICATION_CREDENTIALS / GOOGLE_SERVICE_ACCOUNT_JSON / （メール＋秘密鍵）のいずれかを設定してください。",
        },
        { status: 503 },
      ),
    };
  }

  const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

  const auth = hasKeyFile
    ? new google.auth.GoogleAuth({ keyFile, scopes })
    : hasJsonCreds
      ? new google.auth.GoogleAuth({
          credentials: credentials as JWTInput,
          scopes,
        })
      : new google.auth.JWT({
          email: email!,
          key: key!,
          scopes,
        });

  const sheets = google.sheets({ version: "v4", auth });
  const skipHeader = process.env.GOOGLE_SHEET_SKIP_HEADER !== "false";

  return { ok: true, sheets, sheetId, range, skipHeader };
}

async function fetchBooked(sheets: ReturnType<typeof google.sheets>, sheetId: string, range: string, skipHeader: boolean): Promise<ReservedSlotMap> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range,
  });
  const rows = (res.data.values ?? []) as string[][];
  return rowsToBookedMap(rows, { skipFirstRow: skipHeader });
}

export async function GET() {
  const creds = resolveCreds();
  if (!creds.ok) return creds.response;

  try {
    const booked = await fetchBooked(creds.sheets, creds.sheetId, creds.range, creds.skipHeader);
    return NextResponse.json({ booked });
  } catch (e) {
    console.error("reservations GET failed", e);
    return NextResponse.json({ error: "予約状況の取得に失敗しました" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "無効なリクエストです" }, { status: 400 });
  }

  const { date, time, name, phone, note } = body;
  if (
    typeof date !== "string" ||
    typeof time !== "string" ||
    typeof name !== "string" ||
    typeof phone !== "string" ||
    !date.trim() ||
    !time.trim() ||
    !name.trim() ||
    !phone.trim()
  ) {
    return NextResponse.json(
      { error: "日付・時間・お名前・電話番号は必須です" },
      { status: 400 },
    );
  }

  const dateNorm = date.trim();
  const timeNorm = normalizeTime(time);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateNorm)) {
    return NextResponse.json({ error: "日付の形式が正しくありません" }, { status: 400 });
  }
  if (!RESERVE_TIME_SLOTS.includes(timeNorm as (typeof RESERVE_TIME_SLOTS)[number])) {
    return NextResponse.json({ error: "選択できない時間です" }, { status: 400 });
  }

  const creds = resolveCreds();
  if (!creds.ok) return creds.response;

  try {
    const booked = await fetchBooked(creds.sheets, creds.sheetId, creds.range, creds.skipHeader);
    const taken = booked[dateNorm] ?? [];
    if (taken.includes(timeNorm)) {
      return NextResponse.json(
        { error: "この日時はすでに予約が入っています。別の時間を選んでください。" },
        { status: 409 },
      );
    }

    const receivedAtJst = formatNowJst();
    await creds.sheets.spreadsheets.values.append({
      spreadsheetId: creds.sheetId,
      range: creds.range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[dateNorm, timeNorm, name.trim(), phone.trim(), note?.trim() ?? "", receivedAtJst]],
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("reservations append failed", e);
    return NextResponse.json({ error: "予約の保存に失敗しました" }, { status: 500 });
  }
}
