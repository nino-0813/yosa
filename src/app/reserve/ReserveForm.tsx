"use client";

import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";
import "react-day-picker/style.css";

const TIME_SLOTS = [
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

export function ReserveForm() {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>(TIME_SLOTS[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const dateStr = useMemo(
    () => (selected ? format(selected, "yyyy-MM-dd") : ""),
    [selected],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) {
      setStatus("error");
      setMessage("日付を選んでください");
      return;
    }
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: dateStr,
          time,
          name: name.trim(),
          phone: phone.trim(),
          note: note.trim() || undefined,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "送信に失敗しました");
        return;
      }
      setStatus("success");
      setMessage("予約を受け付けました。担当者よりご連絡いたします。");
      setName("");
      setPhone("");
      setNote("");
      setSelected(undefined);
      setTime(TIME_SLOTS[0]);
    } catch {
      setStatus("error");
      setMessage("通信エラーが発生しました");
    }
  }

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:py-16">
      <p className="text-center text-sm font-medium tracking-[0.14em] text-[#474342]">
        <Link href="/" className="text-[#74ab32] underline-offset-4 hover:underline">
          トップへ戻る
        </Link>
      </p>
      <h1 className="mt-8 text-center text-2xl font-medium tracking-[0.12em] text-[#3e3a39]">
        予約
      </h1>
      <p className="mt-4 text-center text-sm leading-relaxed tracking-[0.08em] text-[#615f5f]">
        ご希望の日付をカレンダーから選び、時間・お名前・電話番号を入力して送信してください。
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-8 rounded-t-[12px] border border-[#3e3a39]/20 bg-white p-6 shadow-sm sm:p-8"
      >
        <div>
          <p className="mb-3 text-sm font-medium tracking-[0.12em] text-[#3e3a39]">
            ご希望日
          </p>
          <div className="rdp-wrap flex justify-center rounded-lg border border-[#e0ddd9] bg-[#faf9f7] p-3">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              locale={ja}
              disabled={{ before: today }}
              className="m-0 [--rdp-cell-size:2.5rem] [--rdp-accent-color:#74ab32]"
            />
          </div>
          {selected ? (
            <p className="mt-2 text-center text-sm text-[#474342]">
              {format(selected, "yyyy年M月d日 (EEE)", { locale: ja })}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="time" className="mb-2 block text-sm font-medium tracking-[0.12em] text-[#3e3a39]">
            ご希望時間
          </label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-[#3e3a39]/35 bg-white px-3 py-3 text-sm tracking-[0.08em] text-[#3e3a39] outline-none focus:border-[#74ab32]"
          >
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium tracking-[0.12em] text-[#3e3a39]">
            お名前 <span className="text-[#a93429]">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-[#3e3a39]/35 bg-white px-3 py-3 text-sm tracking-[0.08em] text-[#3e3a39] outline-none focus:border-[#74ab32]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium tracking-[0.12em] text-[#3e3a39]">
            電話番号 <span className="text-[#a93429]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full border border-[#3e3a39]/35 bg-white px-3 py-3 text-sm tracking-[0.08em] text-[#3e3a39] outline-none focus:border-[#74ab32]"
          />
        </div>

        <div>
          <label htmlFor="note" className="mb-2 block text-sm font-medium tracking-[0.12em] text-[#3e3a39]">
            備考（任意）
          </label>
          <textarea
            id="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full resize-y border border-[#3e3a39]/35 bg-white px-3 py-3 text-sm tracking-[0.08em] text-[#3e3a39] outline-none focus:border-[#74ab32]"
          />
        </div>

        {message ? (
          <p
            className={`text-center text-sm font-medium tracking-[0.06em] ${
              status === "success" ? "text-[#74ab32]" : "text-[#a93429]"
            }`}
            role={status === "error" ? "alert" : "status"}
          >
            {message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center rounded-none bg-[#74ab32] py-4 font-sans text-base font-bold tracking-[0.12em] text-white transition-colors enabled:hover:bg-[#679a2d] enabled:active:bg-[#5c8828] disabled:opacity-60"
        >
          {status === "loading" ? "送信中…" : "予約を送信"}
        </button>
      </form>
    </div>
  );
}
