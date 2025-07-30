import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Does it work automatically? ",
    answer: "Yes! Auto-generates responses from screen and audio. Use Ctrl+Enter for manual input."
  },
  {
    question: "Is this app really free?",
    answer: "Completely free. Fully open source. No strings attached."
  },
  {
    question: "How does screen capture work? ",
    answer: "Takes screenshots and audio, sends to Google Gemini API. Requires internet and API key."
  },
  {
    question: "Is it invisible during sharing? ",
    answer: "Yes! Doesn't show up in screen recordings or shares. Invisible overlay."
  },
  {
    question: "What platforms are supported? ",
    answer: "Currently Windows But macOS and Linux coming soon."
  },
  {
    question: "Can I customize AI responses?",
    answer: "Yes! Add context to personalize responses for your needs."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-luxury opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-luxury animate-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Everything you need to know about CheatCode
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl border border-primary/30 overflow-hidden hover:shadow-luxury transition-all duration-500 group hover-lift animate-glow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary/10 transition-all duration-300 group-hover:border-primary/50"
              >
                <span className="font-bold text-foreground text-xl group-hover:text-luxury transition-colors duration-300">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-muted-foreground transition-all duration-300 group-hover:text-luxury ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openItems.includes(index) && (
                <div className="px-8 pb-8 pt-4 border-t border-primary/20">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
