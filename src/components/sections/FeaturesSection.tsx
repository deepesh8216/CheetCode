import { Eye, Mic, Bot, Shield, Users, Keyboard, Settings, Lock } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Visual Intelligence",
    description:
      "AI-powered screen analysis that detects and understands on-screen content — from coding tasks to interview prompts, in real time.",
  },
  {
    icon: Mic,
    title: "Live Audio Transcription",
    description:
      "Capture system-level audio and convert speech to actionable text instantly. Ideal for calls, meetings, and live conversations.",
  },
  {
    icon: Bot,
    title: "Contextual AI Replies",
    description:
      "Leverage Google Gemini to generate smart, context-aware responses based on both what you hear and see.",
  },
  {
    icon: Lock,
    title: "Undetectable Overlay",
    description:
      "Operates invisibly during screen sharing and recordings — fully hidden from capture tools and meeting apps.",
  },
  {
    icon: Users,
    title: "Adaptive Profiles",
    description:
      "Switch between AI modes for interviews, meetings, learning, or selling — each tailored to your unique context.",
  },
  {
    icon: Settings,
    title: "Personalized Prompting",
    description:
      "Feed in your resume, company data, or goals to personalize AI behavior and improve the relevance of responses.",
  },
  {
    icon: Keyboard,
    title: "Smart Shortcuts",
    description:
      "Trigger commands, toggle modes, or respond instantly using customizable keyboard shortcuts — no clicks needed.",
  },
  {
    icon: Shield,
    title: "Local & Secure",
    description:
      "Your data stays yours. Processed locally or through your API keys — never stored, never shared.",
  },
];


const FeaturesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-luxury opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-luxury animate-gradient">Powerful Features</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Everything you need to enhance your productivity and get ahead in any situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-card rounded-2xl border border-primary/30 hover:border-primary/60 hover:shadow-luxury transition-all duration-500 hover-lift animate-glow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center shadow-luxury group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-gradient">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-luxury transition-colors duration-300">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;