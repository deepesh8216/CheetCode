
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import GuideNavigation from "@/components/GuideNavigation";

const MacOSAudioGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <GuideNavigation />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">macOS Audio Guide</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Allow CheatCode to access and record audio permissions on CheatCode's macOS.
          </p>
          <p className="text-lg text-muted-foreground">
            This allows the app to recognize your audio input and process it
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <CardTitle>Open System Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Click on the Apple logo in the top-left corner of your screen and select "System Settings" (or "System Preferences" on older macOS versions).
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <img src="/lovable-uploads/7417b739-6806-4b85-b951-4a3c040650a.png" alt="macOS System Settings Privacy & Security" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <CardTitle>Go to Screen and System Audio Recording</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Click on "Privacy & Security" then navigate to "Screen & System Audio Recording" in the sidebar.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <img src="/lovable-uploads/7417b739-6806-4b85-b951-4a3c040650ba.png" alt="Screen and System Audio Recording settings" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <CardTitle>Add CheatCode</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Click the "+" button at the bottom of the list to add a new app. Navigate to your Applications folder and select CheatCode.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <img src="/lovable-uploads/7417b739-6806-4b85-b951-4a3c040650ba.png" alt="Add CheatCode to audio recording permissions" />
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
                <CardTitle>Select the App</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  In the file browser that opens, navigate to Applications, find CheatCode, and select it. Then click "Open" to add it to the permissions list.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <img src="/lovable-uploads/7417b739-6806-4b85-b951-4a3c040650ba.png" alt="Select CheatCode application" />
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
                <CardTitle>Enable Permissions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Once CheatCode appears in the list, make sure the checkbox next to it is checked. This grants the app permission to record system audio.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <img src="/lovable-uploads/7417b739-6806-4b85-b951-4a3c040650ba.png" alt="Enable CheatCode audio permissions" />
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

export default MacOSAudioGuide;
