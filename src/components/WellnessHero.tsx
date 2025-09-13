import { Brain, Heart, BarChart3, MessageCircle, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-wellness.jpg";

const WellnessHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful wellness background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Wellness
            <span className="block text-primary-glow">Journey Starts Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            AI-powered mental health monitoring that supports your daily wellness through 
            personalized insights and gentle guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="wellness" className="text-lg px-8 py-4">
              Start Your Check-in
            </Button>
            <Button size="lg" variant="calm" className="text-lg px-8 py-4">
              View Dashboard
            </Button>
          </div>
        </div>

        {/* Feature Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Daily Check-ins</h3>
              <p className="text-white/80 text-sm">Track your mood and emotions with gentle daily prompts</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-12 h-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Wellness Insights</h3>
              <p className="text-white/80 text-sm">Visualize your mental health trends and patterns</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Brain className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">AI Recommendations</h3>
              <p className="text-white/80 text-sm">Get personalized coping strategies and wellness tips</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WellnessHero;