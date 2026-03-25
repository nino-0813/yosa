import type { JWTInput } from "google-auth-library";
import { NextResponse } from "next/server";
import { google } from "googleapis";

type Body = {
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  note?: string;
};

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
      return NextResponse.json(
        { error: "GOOGLE_SERVICE_ACCOUNT_JSON が正しい JSON ではありません。" },
        { status: 503 },
      );
    }
  }
  const hasJsonCreds = Boolean(credentials?.client_email && credentials?.private_key);

  if (!sheetId || (!hasKeyFile && !hasJsonCreds && !hasInlineCreds)) {
    return NextResponse.json(
      {
        error:
          "予約の保存先が未設定です。GOOGLE_SHEET_ID と、GOOGLE_APPLICATION_CREDENTIALS / GOOGLE_SERVICE_ACCOUNT_JSON / （メール＋秘密鍵）のいずれかを設定してください。",
      },
      { status: 503 },
    );
  }

  try {
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
    const receivedAt = new Date().toISOString();
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[date, time, name, phone, note ?? "", receivedAt]],
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("reservations append failed", e);
    return NextResponse.json({ error: "予約の保存に失敗しました" }, { status: 500 });
  }
}
