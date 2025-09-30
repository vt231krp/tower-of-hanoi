import { cn } from "../lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  disabled?: boolean;
}

const variants: Record<string, Record<string, string>> = {
  size: {
    sm: "px-4 py-2 text-sm font-medium",
    md: "px-5 py-3 text-lg font-semibold",
    lg: "px-6 py-3 text-xl font-semibold",
    xl: "px-8 py-4 text-2xl font-bold",
  },
  variant: {
    primary:
      "bg-amber-500 text-slate-900 border-amber-600 hover:bg-amber-400 active:bg-amber-600",
    secondary:
      "bg-slate-600 text-white border-slate-700 hover:bg-slate-500 active:bg-slate-700",
    outline:
      "bg-transparent text-amber-300 border-amber-300 hover:bg-amber-300 hover:text-slate-900 active:bg-amber-400",
    ghost:
      "bg-transparent text-gray-300 border-transparent hover:bg-slate-700 hover:text-white active:bg-slate-600",
  },
};

export const Button = ({
  className,
  size = "md",
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg border-b-2 uppercase transition-all duration-150",
        "active:translate-y-[1px] active:border-b-[1px]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:translate-y-0 disabled:active:border-b-2",
        variants.size[size],
        variants.variant[variant],
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
