import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Calendar, Award, BookOpen, Headphones } from "lucide-react";

const WellnessDashboard = () => {
  // Mock data - would come from Supabase
  const weeklyMoods = [
    { day: "Mon", mood: 4 },
    { day: "Tue", mood: 3 },
    { day: "Wed", mood: 5 },
    { day: "Thu", mood: 3 },
    { day: "Fri", mood: 4 },
    { day: "Sat", mood: 5 },
    { day: "Sun", mood: 4 },
  ];

  const recommendations = [
    {
      icon: BookOpen,
      title: "Mindful Reading",
      description: "Try 10 minutes of calming literature",
      color: "text-primary",
    },
    {
      icon: Headphones,
      title: "Meditation Session",
      description: "5-minute guided breathing exercise",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-16 px-4 calm-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-2">Wellness Dashboard</h2>
          <p className="text-muted-foreground">Your mental health journey at a glance</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Mood Trend */}
          <Card className="lg:col-span-2 shadow-wellness">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Weekly Mood Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyMoods.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium w-12">{data.day}</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full wellness-gradient rounded-full transition-all duration-500"
                        style={{ width: `${(data.mood / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{data.mood}/5</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-wellness-energy/30 rounded-lg">
                <p className="text-sm text-center">
                  <strong>Overall trend:</strong> You've maintained a positive mood this week! 🌟
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Check-in Streak</h3>
                <p className="text-2xl font-bold text-primary">7 days</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-success mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Wellness Score</h3>
                <p className="text-2xl font-bold text-success">8.2/10</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Personalized Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => {
              const IconComponent = rec.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-wellness transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-wellness-calm/50">
                        <IconComponent className={`w-6 h-6 ${rec.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{rec.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{rec.description}</p>
                        <Button size="sm" variant="calm">
                          Try Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessDashboard;