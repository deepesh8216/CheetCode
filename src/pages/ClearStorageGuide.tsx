import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";
import GuideNavigation from "@/components/GuideNavigation";

const ClearStorageGuide = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<"windows" | "macos">("windows");

  return (
    <div className="min-h-screen bg-gradient-hero">
      <GuideNavigation />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Clear Storage Guide</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Learn how to clear CheatCode's storage and reset all app data.
          </p>
          <p className="text-lg text-muted-foreground">
            This will remove settings, cache, and any stored information.
          </p>
        </div>

        <div className="bg-gradient-card rounded-xl border border-primary/20 p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Warning:</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">
                Clearing storage will remove all your app settings, saved configurations, and cached data. You'll need to reconfigure the app after doing this.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <CardTitle>Close CheatCode</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Before clearing storage, make sure CheatCode is completely closed. Exit the app from the system tray or force quit it if necessary.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <CardTitle>Select Your Platform</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button 
                    variant={selectedPlatform === "windows" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedPlatform("windows")}
                  >
                    Windows
                  </Button>
                  <Button 
                    variant={selectedPlatform === "macos" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedPlatform("macos")}
                  >
                    macOS
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {selectedPlatform === "windows" ? (
                    <div>
                      <h4 className="font-medium mb-2">For Windows Users:</h4>
                      <p className="text-sm text-muted-foreground mb-3">You need to delete the following folders:</p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium mb-1">Primary storage location:</p>
                          <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                            C:\Users\&lt;YourUsername&gt;\AppData\Local\cheatcode
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-1">Also check the Roaming folder:</p>
                          <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                            C:\Users\&lt;YourUsername&gt;\AppData\Roaming\cheatcode
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-medium mb-2">For macOS Users:</h4>
                      <p className="text-sm text-muted-foreground mb-3">Delete the following folder:</p>
                      
                      <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                        ~/Library/Application Support/cheatcode
                      </div>
                    </div>
                  )}
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
                <CardTitle>Delete the Folder</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Once you've located the "cheatcode" folder(s), right-click and delete them. You might need administrator permissions depending on your system configuration.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  4
                </div>
                <CardTitle>Restart the App</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Launch CheatCode again. The app will create fresh storage and you'll need to reconfigure your settings, including your API key and any custom preferences.
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">What gets reset:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• API key configuration</li>
                    <li>• App settings and preferences</li>
                    <li>• Window position and size</li>
                    <li>• Any cached data or temporary files</li>
                  </ul>
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

export default ClearStorageGuide;
