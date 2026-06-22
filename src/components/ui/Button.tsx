import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "pink" | "outline" | "ghost" | "success";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-gray-900 hover:bg-pink-500 text-white disabled:opacity-50",
  pink:    "bg-pink-500 hover:bg-pink-400 text-white disabled:opacity-50",
  success: "bg-emerald-500 text-white disabled:opacity-50",
  outline: "border border-gray-200 text-gray-700 hover:border-pink-400 hover:text-pink-500 bg-transparent disabled:opacity-50",
  ghost:   "text-gray-400 hover:text-pink-500 bg-transparent disabled:opacity-50",
};

const sizeStyles: Record<Size, string> = {
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
