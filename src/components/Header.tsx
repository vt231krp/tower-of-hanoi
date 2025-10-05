import { Link } from "react-router";
import { Button } from "./Button";

const navLinks = [
  {
    path: "/settings",
    title: "Settings",
    variant: "ghost" as const,
  },
  {
    path: "/results",
    title: "Results",
    variant: "ghost" as const,
  },
  {
    path: "/game",
    title: "Start",
    variant: "outline" as const,
  },
];

export const Header = () => {
  return (
    <header className="w-full border-b border-slate-700 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-3xl font-bold text-blue-700">
            Tower of Hanoi
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          {navLinks.map(({ path, title, variant }) => (
            <Button size="sm" variant={variant} asChild>
              <Link to={path}>{title}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};
