import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserCircle, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "help", label: "Help" },
    { id: "download", label: "Download" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`
          mx-auto px-5 py-4 transition-all duration-300
          ${scrolled ? "max-w-7xl w-full" : "max-w-2xl"}
          bg-card/80 backdrop-blur-glass border-b border-primary/40
          rounded-3xl shadow-lg
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-glow">
              <img src="/logos/logo.png" alt="Logo" className="dark:invert dark:brightness-200" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CheatCode
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop "Who's Behind This?" */}
            <a
              href="https://deepesh-mccavern.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button variant="glass" size="sm">
                <UserCircle className="w-4 h-4" />
                <span>Who's Behind This?</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setMenuOpen(false);
                }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://deepesh-mccavern.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="glass" size="sm">
                <UserCircle className="w-4 h-4" />
                <span>Who's Behind This?</span>
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
