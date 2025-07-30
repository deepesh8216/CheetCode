import { Button } from "@/components/ui/button";
import { Download, Github, Apple, Monitor } from "lucide-react";


const DownloadSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Download</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the latest version of CheatCode for Windows platform
          </p>
        </div>

        {/* Latest Release */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Latest Release</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="https://buymeacoffee.com/morphware_111110/e/440512"
                target="_blank"
                download
                className="flex items-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Windows Setup</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Apple className="w-5 h-5" />
              macOS upcoming...
            </Button>
          </div>
          {/* <p className="text-center text-sm text-muted-foreground mt-4">
          This feels like cheating.{" "}
            <a href="#" className="text-primary hover:underline">We agree</a>
          </p> */}
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FAQ Card 1 */}
            {/* <div className="bg-gradient-card rounded-xl border border-primary/20 p-6 hover:shadow-card transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-3 text-lg">Where to get a free API key?</h4>
              <p className="text-muted-foreground text-sm">
                Follow these steps to generate your Gemini API Key: <br /><br />
                <strong>Step 1:</strong> Open <strong>Google AI Studio</strong> in your browser and log in using your Google Account. <br />
                <strong>Step 2:</strong> Click on <strong>"Get API Key"</strong> in the top-right corner. <br />
                <strong>Step 3:</strong> Click on <strong>"Create API Key"</strong> when the option appears. <br />
                <strong>Step 4:</strong> Select an existing <strong>Google Cloud Project</strong> or create a new one when prompted. <br />
                <strong>Step 5:</strong> Once the project is selected, your <strong>Gemini API Key</strong> will be generated. Copy it and store it securely for later use.
              </p>

            </div> */}

            {/* FAQ Card 2 */}
            <div className="bg-gradient-card rounded-xl border border-primary/20 p-6 hover:shadow-card transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-3 text-lg">Sound is not working on macOS</h4>
              <p className="text-muted-foreground text-sm">
                To enable screen and audio recording for <strong>CheatCode</strong> on your Mac, follow these steps: <br /><br />
                Open <strong>System Settings</strong> and navigate to <strong>Privacy & Security</strong>.<br />
                Scroll down and click on <strong>Screen and System Audio Recording</strong>.<br />
                If <strong>CheatCode</strong> is not listed, click the <strong>“+” button</strong> to add it.<br />
                Locate the <strong>CheatCode</strong> application in your files, select it, and click <strong>Open</strong>.<br />
                Once added, make sure the toggle switch next to <strong>CheatCode</strong> is <strong>enabled</strong>.<br /><br />
              </p>


            </div>

            {/* FAQ Card 3 */}
            <div className="bg-gradient-card rounded-xl border border-primary/20 p-6 hover:shadow-card transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-3 text-lg">I am getting a virus warning</h4>
              <p className="text-muted-foreground text-sm mb-2">
                macOS users:{" "}
              </p>
              <p className="text-muted-foreground text-sm">
                The reason is that I don't have a developer ID for Windows or macOS, so the app is not signed.
                This makes Windows and macOS think that the app is a virus, but it's completely safe.
              </p>
            </div>

            {/* FAQ Card 4 */}
            {/* <div className="bg-gradient-card rounded-xl border border-primary/20 p-6 hover:shadow-card transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-3 text-lg">I have some other problem</h4>
              <p className="text-muted-foreground text-sm">
                Submit an issue on{" "}
                <a href="#" className="text-primary hover:underline underline-offset-2">GitHub</a>{" "}
                or join the{" "}
                <a href="#" className="text-primary hover:underline underline-offset-2">Discord</a>{" "}
                for help.
              </p>
            </div> */}

            {/* FAQ Card 5 */}
            <div className="bg-gradient-card rounded-xl border border-primary/20 p-6 hover:shadow-card transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-3 text-lg">So you support cheating?</h4>
              <p className="text-muted-foreground text-sm">
                Yep, you heard that right.

                Sales calls. Meetings. Negotiations.
                If there's a faster way to win — we'll take it.
                We built <strong>CheetCode</strong> so you never have to think alone again.
                It sees your screen. Hears your audio.
                Feeds you answers in real time.
                While others guess — you're already right.

                And yes, the world will call it <strong>Cheating</strong>.
                But so was the calculator.
                So was spellcheck.
                So was Google.

                Every time technology makes us smarter, the world panics.
                Then it adapts. Then it forgets.
                And suddenly, it's normal.
                So, start cheating.
                Because when everyone does, no one is.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub CTA */}
        {/* <div className="text-center mt-12">
          <Button variant="glass" size="lg">
            <Github className="w-5 h-5" />
            Star us on GitHub
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default DownloadSection;
