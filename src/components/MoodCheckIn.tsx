import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Smile, Frown, Meh, Heart, Zap } from "lucide-react";

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [reflection, setReflection] = useState("");

  const moods = [
    { id: "great", icon: Smile, label: "Great", color: "text-success" },
    { id: "good", icon: Heart, label: "Good", color: "text-primary" },
    { id: "okay", icon: Meh, label: "Okay", color: "text-warning" },
    { id: "low", icon: Frown, label: "Low", color: "text-accent" },
    { id: "struggling", icon: Zap, label: "Struggling", color: "text-destructive" },
  ];

  const handleSubmit = () => {
    // This would connect to Supabase for data storage
    console.log("Mood check-in:", { mood: selectedMood, reflection });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-2">Daily Check-in</h2>
          <p className="text-muted-foreground">How are you feeling today?</p>
        </div>

        <Card className="shadow-wellness">
          <CardHeader>
            <CardTitle className="text-center">Mood Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mood Selection */}
            <div>
              <Label className="text-base font-medium mb-4 block">Select your current mood</Label>
              <div className="grid grid-cols-5 gap-3">
                {moods.map((mood) => {
                  const IconComponent = mood.icon;
                  return (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                        selectedMood === mood.id
                          ? "border-primary bg-primary/10 shadow-soft"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} />
                      <p className="text-sm font-medium">{mood.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reflection */}
            <div>
              <Label htmlFor="reflection" className="text-base font-medium">
                What's on your mind? (Optional)
              </Label>
              <Textarea
                id="reflection"
                placeholder="Share your thoughts, feelings, or what influenced your mood today..."
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                className="mt-2 min-h-[100px] resize-none"
              />
            </div>

            {/* Submit */}
            <Button 
              onClick={handleSubmit}
              disabled={!selectedMood}
              className="w-full"
              variant="wellness"
              size="lg"
            >
              Complete Check-in
            </Button>

            {selectedMood && (
              <div className="text-center p-4 rounded-lg bg-wellness-calm/50">
                <p className="text-sm text-muted-foreground">
                  Thank you for checking in! Your wellness journey matters.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MoodCheckIn;