import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

/**
 * Props for the {@link Button} component.
 *
 * @extends React.ButtonHTMLAttributes
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS class names */
  className?: string;
  /** Button size variant. @defaultValue `"sm"` */
  size?: "sm" | "md" | "lg" | "xl";
  /** Visual style variant. @defaultValue `"primary"` */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** When `true`, renders as a `Slot` to compose with child elements (e.g. `Link`). */
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

/**
 * Reusable button component with multiple size and style variants.
 *
 * Supports `asChild` pattern via Radix `Slot` for composing with other elements.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * ```
 */
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
