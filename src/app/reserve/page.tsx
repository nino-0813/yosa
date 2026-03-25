import type { Metadata } from "next";
import { ReserveForm } from "./ReserveForm";

export const metadata: Metadata = {
  title: "予約 | ラリマー",
  description: "よもぎ蒸しのご予約フォームです。",
};

export default function ReservePage() {
  return (
    <div className="min-h-full bg-[var(--surface-warm,#f4f2ef)]">
      <ReserveForm />
    </div>
  );
}
