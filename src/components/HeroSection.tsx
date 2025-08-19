import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Database, Cpu } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [assembled, setAssembled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAssembled(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const FloatingIcon = ({ icon: Icon, delay, position }: { 
    icon: any, 
    delay: number, 
    position: string 
  }) => (
    <div 
      className={`absolute ${position} animate-float opacity-30`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="h-8 w-8 text-primary" />
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Floating Tech Icons */}
      <FloatingIcon icon={Zap} delay={0} position="top-20 left-10" />
      <FloatingIcon icon={Database} delay={1} position="top-32 right-20" />
      <FloatingIcon icon={Cpu} delay={2} position="bottom-40 left-20" />
      <FloatingIcon icon={Zap} delay={3} position="bottom-20 right-10" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated Logo */}
          <div className={`transition-all duration-1000 ${
            assembled ? 'animate-assemble-parts' : 'opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-primary glow-primary">DIGIPOWER</span>
              <span className="text-foreground"> X</span>
            </h1>
          </div>

          {/* Tagline with Staggered Animation */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${
            assembled ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              DigiPower X is an innovative energy infrastructure company that develops 
              <span className="text-primary"> cutting-edge data centers</span> to drive the expansion of 
              <span className="text-primary"> sustainable energy assets</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            assembled ? 'animate-slide-in-right' : 'opacity-0'
          }`}>
            <Button 
              size="lg" 
              className="tech-button px-8 py-4 text-lg font-semibold glow-primary hover:glow-strong transition-all duration-300"
            >
              Investor Relations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Floating Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-700 ${
            assembled ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`}>
            <div className="bg-card/50 backdrop-blur-lg rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary group-hover:animate-pulse-glow">$37.0M</div>
              <div className="text-muted-foreground">Fiscal Year 2024 Revenue</div>
            </div>
            <div className="bg-card/50 backdrop-blur-lg rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary group-hover:animate-pulse-glow">$2.37</div>
              <div className="text-muted-foreground">Current Stock Price</div>
            </div>
            <div className="bg-card/50 backdrop-blur-lg rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary group-hover:animate-pulse-glow">1.3M+</div>
              <div className="text-muted-foreground">Trading Volume</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;