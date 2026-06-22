import type { ButtonProps, ButtonVariant, ButtonSize } from "../../types";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-gray-900 hover:bg-gray-700 text-white disabled:opacity-50",
  pink:    "bg-pink-500 hover:bg-pink-600 text-white disabled:opacity-50",
  success: "bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50",
  outline: "border border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300 bg-transparent disabled:opacity-50",
  ghost:   "text-gray-400 hover:text-gray-600 hover:bg-gray-100 bg-transparent disabled:opacity-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9  px-4  text-xs  rounded-xl gap-1.5",
  md: "h-11 px-6  text-sm  rounded-xl gap-2",
  lg: "h-12 px-8  text-base rounded-2xl gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center font-inter font-semibold transition-all duration-300 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
