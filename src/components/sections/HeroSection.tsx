import { Button } from "@/components/ui/button";
import { DollarSign, Apple } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div className="space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-glass-background backdrop-blur-glass px-6 py-3 rounded-full border border-primary/30 hover-lift animate-glow">
            <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-luxury font-mono tracking-widest">
              CHEAT SMART, NOT HARD
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="text-foreground text-glow">If you're gonna</span>
            <br />
            <span className="text-luxury animate-gradient">
              break the rules, at least be good at it.
            </span>
          </h1>

          {/* Hero Description */}
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Answers in real time. Intelligence across everything you do.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-4 hover-lift animate-glow">
              <a
                href="https://buymeacoffee.com/morphware_111110/e/440512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>Grab for Windows</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 hover-lift bg-glass-background backdrop-blur-glass border-primary/30">
              <Apple className="w-5 h-5" />
              macOS upcoming...
            </Button>
          </div>


          {/* Trust indicators */}
          <div className="inline-flex flex-wrap items-center space-x-8 bg-glass-background backdrop-blur-glass px-8 py-4 rounded-2xl border border-primary/30 hover-lift animate-glow">
            <span className="text-lg md:text-xl font-bold text-luxury">Not detected by</span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img src="/logos/Google-meet.svg" alt="Google-meet" className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform" />
              <img src="/logos/skype.svg" alt="Skype" className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform" />
              <img src="/logos/zoom.svg" alt="Zoom" className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform" />
              <img src="/logos/webex.svg" alt="Webex" className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform" />
              <img src="/logos/Slack.png" alt="Slack" className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform" />
              <img src="/logos/microsoft-team.svg" alt="Teams" className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
