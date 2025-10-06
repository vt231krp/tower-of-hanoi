import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  asChild?: boolean;
}

const variants: Record<string, Record<string, string>> = {
  size: {
    sm: "px-4 py-2 text-sm font-medium",
    md: "px-5 py-3 text-lg font-semibold",
    lg: "px-6 py-3 text-xl font-semibold",
    xl: "px-8 py-4 text-2xl font-bold",
  },
  variant: {
    primary: "bg-blue-700 hover:bg-blue-800 active:bg-blue-900  text-white",
    secondary:
      "bg-slate-800 hover:bg-slate-700 active:bg-slate-900  text-white",
    outline:
      "bg-transparent border-2 border-blue-700 hover:bg-blue-50 active:bg-blue-100  text-blue-700 hover:text-blue-800",
    ghost:
      "bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 hover:text-gray-800",
  },
};

export const Button = ({
  className,
  size = "sm",
  variant = "primary",
  disabled = false,
  asChild,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "cursor-pointer rounded-lg text-center transition-all duration-150",
        variants.size[size],
        variants.variant[variant],
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
