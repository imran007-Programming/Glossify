import type { ReactNode } from "react";

export default function CheckoutSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="font-abigeta text-xl text-gray-900">{title}</h2>
      {children}
    </div>
  );
}
