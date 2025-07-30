import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserCircle, ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const GuideNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-glow">
                <img
                  src="/logos/logo.png"
                  alt="Logo"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CheatCode
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <a
              href="https://deepesh-mccavern.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button variant="glass" size="sm" className="hidden md:flex">
                <UserCircle className="w-4 h-4" />
                <span>Who's Behind This?</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GuideNavigation; 
