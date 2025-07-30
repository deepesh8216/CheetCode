import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import GuideNavigation from "@/components/GuideNavigation";

const APIKeyGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <GuideNavigation />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">API Key Guide</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Follow these steps to get your free Google AI Studio API key.
          </p>
          <p className="text-lg text-muted-foreground">
            It's quick and easy, and completely free to use.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <CardTitle>Log in to Google</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  First, you need to log in to your Google account. If you don't have one, you'll need to create one first.
                </p>
                <a
                  href="https://accounts.google.com/"
                  target="_blank"
                  className="block"
                >
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4" />
                    Go to Google Accounts
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <CardTitle>Go to Google AI Studio</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Navigate to Google AI Studio and accept the terms of service. Make sure to select the first checkbox and click "Accept terms".
                </p>
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  className="block"
                >
                <Button variant="outline" className="w-full sm:w-auto">
                  <ExternalLink className="w-4 h-4" />
                  Open Google AI Studio
                </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <CardTitle>Create API Key</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Once you're in Google AI Studio, look for the button shown in the screenshot below and click on it to create your API key.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <img src="/lovable-uploads/2772c2cb-ff5b-4fa9-baed-ff641c78ea3a.png" alt="Create API Key button in Google AI Studio" className="w-full rounded border" />
                </div>
                <div className="bg-gradient-card border border-primary/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">API Keys</h4>
                  <p className="text-sm text-muted-foreground mb-3">Quickly test the Gemini API</p>
                  <Button size="sm" className="mb-3">+ Create API Key</Button>
                  <div className="bg-muted p-3 rounded text-xs font-mono">
                    curl 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY' \<br />
                    -H 'Content-Type: application/json' \<br />
                    -d '&#123;'<br />
                    &nbsp;&nbsp;"contents": [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"parts": [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"text": "Explain how AI works in a few words"<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                    &nbsp;&nbsp;]<br />
                    &#125;'
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  4
                </div>
                <CardTitle>Copy Your API Key</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  After creating the API key, you'll see a new button as shown in the screenshot below. Click on it to copy your API key to the clipboard.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <img src="/lovable-uploads/2772c2cb-ff5b-4fa9-baed-ff641c78ea3a.png" alt="Copy API Key dialog" className="w-full rounded border" />
                </div>
                <div className="bg-gradient-card border border-primary/20 p-4 rounded-lg">
                  <div className="bg-muted p-3 rounded text-xs font-mono mb-3">
                    curl 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY' \<br />
                    -H 'Content-Type: application/json' \<br />
                    -d '&#123;'<br />
                    &nbsp;&nbsp;"contents": [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;... <br />
                    &nbsp;&nbsp;]<br />
                    &#125;'
                  </div>
                  <div className="bg-card p-3 rounded border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">API key generated</p>
                        <p className="text-sm text-muted-foreground">Use your API keys securely. Do not share them or embed them in code that can be publicly seen.</p>
                        <p className="text-sm text-muted-foreground">AIzaSyGPhBLgqw6ksqFx2nGsONGH8WuQsKmN</p>
                      </div>
                      <Button size="sm">Copy</Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Your API keys are listed below. You can also view and manage your project and API keys in Google Cloud.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  5
                </div>
                <CardTitle>Use in CheatCode</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Now you can paste this API key into CheatCode app and start using it. Make sure to keep your API key{" "}
                  <span className="bg-muted px-1 rounded text-sm font-mono">Private</span> and don't share it with anyone.
                </p>
                <div className="bg-gradient-card border border-amber-500/20 p-4 rounded-lg">
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    <strong>Important:</strong> Keep your API key secure and never share it publicly or embed it in client-side code.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default APIKeyGuide;
