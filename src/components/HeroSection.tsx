import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Database, Cpu } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  // ✅ Navigate to /investor-relations (matching App.tsx)
  const goToInvestorRelations = () => {
    navigate("/investor-relations");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid pt-24 sm:pt-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-10 opacity-30">
        <Zap className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute top-32 right-20 opacity-30">
        <Database className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-30">
        <Cpu className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <Zap className="h-6 w-6 text-primary" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          {/* Logo Heading */}
          <h1 className="font-bold text-[clamp(2.5rem,6vw,5rem)] md:text-7xl lg:text-8xl leading-tight break-words">
            <span className="text-primary glow-primary">DIGIPOWER</span>
            <span className="text-foreground ml-2">X</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DigiPower X is an innovative energy infrastructure company that
            develops
            <span className="text-primary"> cutting-edge data centers</span> to
            drive the expansion of
            <span className="text-primary"> sustainable energy assets</span>.
          </p>

          {/* ✅ Only Investor Relations CTA remains */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="tech-button px-8 py-4 text-base sm:text-lg font-semibold glow-primary hover:glow-strong transition-all duration-300"
              onClick={goToInvestorRelations}
            >
              Investor Relations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/50 backdrop-blur-lg rounded-lg p-6 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                $37.0M
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                Fiscal Year 2024 Revenue
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-lg rounded-lg p-6 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                $2.37
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                Current Stock Price
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-lg rounded-lg p-6 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                1.3M+
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                Trading Volume
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
