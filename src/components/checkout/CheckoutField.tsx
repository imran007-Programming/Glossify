import type { CheckoutFieldProps } from "../../types";

export default function CheckoutField({
  id,
  label,
  placeholder,
  type = "text",
  error,
  registration,
}: CheckoutFieldProps) {
  return (
    <div id={id}>
      <label className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className={`w-full h-11 px-4 rounded-xl border font-inter text-sm text-gray-700 placeholder-gray-300 outline-none transition-colors ${
          error
            ? "border-red-400 focus:border-red-400"
            : "border-gray-200 focus:border-gray-400"
        }`}
      />
      {error && (
        <p className="font-inter text-xs text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
}
