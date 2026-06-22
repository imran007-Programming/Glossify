import type { PaymentOptionProps } from "../../types";

export default function PaymentOption({
  active,
  icon,
  label,
  sublabel,
  onSelect,
}: PaymentOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl border transition-all text-left ${
        active
          ? "border-gray-900 bg-gray-50"
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
          active ? "border-gray-900" : "border-gray-300"
        }`}
      >
        {active && <div className="w-2 h-2 rounded-full bg-gray-900" />}
      </div>
      <span className={`text-gray-600 shrink-0 ${active ? "text-gray-900" : ""}`}>
        {icon}
      </span>
      <div>
        <p className={`font-inter text-sm font-semibold ${active ? "text-gray-900" : "text-gray-700"}`}>
          {label}
        </p>
        {sublabel && (
          <p className="font-inter text-xs text-gray-400">{sublabel}</p>
        )}
      </div>
    </button>
  );
}
