/** 予約フォーム・API 共通（表示はすべて日本時間基準で解釈） */

import { formatInTimeZone } from "date-fns-tz";

export const RESERVE_TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
] as const;

export type ReservedSlotMap = Record<string, string[]>;

export function normalizeTime(t: string): string {
  const s = t.trim();
  const m = s.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return s;
  return `${Number(m[1]).toString().padStart(2, "0")}:${m[2]}`;
}

/** シートの日付セル → yyyy-MM-dd（文字列・シリアル用の簡易対応） */
export function normalizeDateCell(v: unknown): string | null {
  if (v == null || v === "") return null;
  if (typeof v === "number" && Number.isFinite(v)) {
    const MS = 86400000;
    const base = Date.UTC(1899, 11, 30);
    const d = new Date(base + v * MS);
    return formatInTimeZone(d, "Asia/Tokyo", "yyyy-MM-dd");
  }
  const s = String(v).trim();
  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const slash = s.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})/);
  if (slash) {
    const y = slash[1];
    const mo = slash[2].padStart(2, "0");
    const da = slash[3].padStart(2, "0");
    return `${y}-${mo}-${da}`;
  }
  return null;
}

/** Sheets の行から予約マップへ（A=日付 B=時間 を想定） */
export function rowsToBookedMap(
  rows: string[][],
  options: { skipFirstRow: boolean },
): ReservedSlotMap {
  const booked: ReservedSlotMap = {};
  let start = 0;
  if (options.skipFirstRow && rows.length > 0) start = 1;

  for (let i = start; i < rows.length; i++) {
    const row = rows[i];
    if (!row?.length) continue;
    const d = normalizeDateCell(row[0]);
    const t = row[1] != null ? normalizeTime(String(row[1])) : "";
    if (!d || !t) continue;
    if (!booked[d]) booked[d] = [];
    if (!booked[d].includes(t)) booked[d].push(t);
  }
  return booked;
}

export function formatNowJst(): string {
  return formatInTimeZone(new Date(), "Asia/Tokyo", "yyyy-MM-dd HH:mm:ss");
}
