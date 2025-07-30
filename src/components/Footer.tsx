import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-glass-background backdrop-blur-glass border-t-2 border-primary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-luxury opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Main Footer Content */}
        <div className="text-center mb-6">
          <a
            href="https://github.com/deepesh8216"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="glass" size="lg" className="mb-6 hover-lift animate-glow">
              <Github className="w-5 h-5" />
              Follow on GitHub
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-8 mb-6">
          <a href="https://www.instagram.com/deepesh1.618/" target="_blank" className="hover:scale-110 transition-all duration-300 hover:shadow-glow p-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 shadow-md">
            <img src="/logos/Instagram.svg" alt="Message" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/deepesh-kumar-a2447134a/" target="_blank" className="hover:scale-110 transition-all duration-300 hover:shadow-glow p-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 shadow-md">
            <img src="/logos/Linkedin.svg" alt="Website" className="w-6 h-6" />
          </a>
          <a href="https://x.com/Deep_aish_LIm" target="_blank" className="hover:scale-110 transition-all duration-300 hover:shadow-glow p-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 shadow-md">
            <img src="/logos/X.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://www.reddit.com/user/deep_aish/" target="_blank" className="hover:scale-110 transition-all duration-300 hover:shadow-glow p-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 shadow-md">
            <img src="/logos/Reddit.svg" alt="Website" className="w-6 h-6" />
          </a>
        </div>


        {/* Copyright */}
        <div className="text-center">
          <p className="text-base text-muted-foreground">
            Made by{" "}
            <a href="https://deepesh-mccavern.vercel.app/" target="_blank" className="text-luxury hover:underline transition-colors duration-300">
              Deepesh Mccavern
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;