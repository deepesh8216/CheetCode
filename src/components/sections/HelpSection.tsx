import { Key, Volume2, AlertTriangle, Trash2, Bug } from "lucide-react";
import { useNavigate } from "react-router-dom";

const helpTopics = [
  {
    icon: Key,
    title: "API Key Setup",
    description: "Learn how to get and configure your Google Gemini API key",
    path: "/api-key-guide"
  },
  {
    icon: Volume2,
    title: "macOS Audio Permissions",
    description: "Enable audio recording permissions on macOS",
    path: "/macos-audio-guide"
  },
  {
    icon: AlertTriangle,
    title: "macOS Installation Warning",
    description: "Resolve security warnings when installing on macOS",
    link: "https://www.macobserver.com/tips/how-to/fixing-macos-cannot-verify-app-free-malware/"
  },
  {
    icon: Trash2,
    title: "Clear Storage",
    description: "Reset your app data and settings",
    path: "/clear-storage-guide"
  }
];

const HelpSection = () => {
  const navigate = useNavigate();

  const handleTopicClick = (path: string | null) => {
    if (path) {
      navigate(path);
    }
  };


  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Help Center</h2>
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground">
              Find guides, tutorials, and solutions to common issues.
            </p>
            <p className="text-lg text-muted-foreground">
              Get the most out of CheatCode with step-by-step guides.
            </p>
          </div>
        </div>

        {/* Help Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {helpTopics.map((topic, index) => {
            const isExternal = !!topic.link;
            const cardContent = (
              <>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <topic.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </>
            );

            return isExternal ? (
              <a
                key={index}
                href={topic.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-card rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-card transition-all duration-300 cursor-pointer block"
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={index}
                className="group p-6 bg-gradient-card rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-card transition-all duration-300 cursor-pointer"
                onClick={() => handleTopicClick(topic.path)}
              >
                {cardContent}
              </div>
            );
          })}
        </div>


        {/* Need More Help Card */}
        <div className="bg-gradient-card rounded-xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Still stuck? Submit a bug report and we'll help you out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Button size="lg" className="w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </Button> */}
            <a
              href="mailto:kumardeepesh542@gmail.com?subject=Bug Report&body=Hi Deepesh,%0D%0A%0D%0AI encountered a bug while using the app.%0D%0A%0D%0AHere's what happened:%0D%0A%0D%0A[Describe the issue here]%0D%0A%0D%0AThanks!"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 border border-border text-sm rounded-xl text-foreground hover:border-primary transition-colors"
            >
              <Bug className="w-5 h-5" />
              Report Issue
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;