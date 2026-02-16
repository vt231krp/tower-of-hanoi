import { Link } from "react-router";
import { Button } from "./Button";

const navLinks = [
  {
    path: "/",
    title: "Home",
    variant: "ghost" as const,
    icon: "🏠",
  },
  {
    path: "/settings",
    title: "Settings",
    variant: "ghost" as const,
    icon: "⚙️",
  },
  {
    path: "/results",
    title: "Results",
    variant: "ghost" as const,
    icon: "📊",
  },
  {
    path: "/privacy",
    title: "Privacy",
    variant: "ghost" as const,
    icon: "🔒",
  },
  {
    path: "/game",
    title: "Play",
    variant: "primary" as const,
    icon: "🎮",
  },
];

/**
 * Application header with navigation links.
 *
 * Renders the logo and a responsive nav bar with links to
 * Home, Settings, Results, Privacy, and Play pages.
 */
export const Header = () => {
  return (
    <header className="bg-slack-950 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 md:px-8 md:py-4">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-600/30 bg-black/20 px-4 py-3 backdrop-blur-sm md:flex-row md:gap-8 md:rounded-full md:px-8">
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl">🗼</div>
            <Link
              to="/"
              className="text-slack-100 text-base font-bold transition-colors hover:text-white md:text-lg"
            >
              Tower of Hanoi
            </Link>
          </div>

          <nav className="flex items-center gap-2 md:gap-4">
            {navLinks.map(({ path, title, variant, icon }) => (
              <Button
                key={path}
                size="sm"
                variant={variant}
                asChild
                className="flex flex-col items-center gap-1 px-2 py-2 md:flex-row md:gap-2 md:px-3"
              >
                <Link to={path}>
                  <span className="text-base md:text-sm">{icon}</span>
                  <span className="text-xs md:text-sm">{title}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
