import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Zap, Server } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Navigate to Stock Information page
  const goToStockInformation = () => {
    navigate("/stock-information"); // ✅ matches your <Route path="/stock-information" ... /> in App.tsx
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-tech relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 hex-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            inView ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With multiple sites, including our state-of-the-art combined cycle and 
                high-capacity substations, we tap into and enhance the energy grid, 
                supporting both industrial clients and broader energy markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are focused on continuously expanding our power infrastructure to 
                create a resilient backbone for the future of energy and technology.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card/70 backdrop-blur-lg rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <Building2 className="h-8 w-8 text-primary mb-2 group-hover:animate-pulse" />
                <h3 className="font-semibold text-foreground">Multiple Sites</h3>
                <p className="text-sm text-muted-foreground">State-of-the-art facilities</p>
              </div>
              <div className="bg-card/70 backdrop-blur-lg rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <Zap className="h-8 w-8 text-primary mb-2 group-hover:animate-pulse" />
                <h3 className="font-semibold text-foreground">Energy Grid</h3>
                <p className="text-sm text-muted-foreground">Enhanced infrastructure</p>
              </div>
              <div className="bg-card/70 backdrop-blur-lg rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <Server className="h-8 w-8 text-primary mb-2 group-hover:animate-pulse" />
                <h3 className="font-semibold text-foreground">Data Centers</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge technology</p>
              </div>
              <div className="bg-card/70 backdrop-blur-lg rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <Building2 className="h-8 w-8 text-primary mb-2 group-hover:animate-pulse" />
                <h3 className="font-semibold text-foreground">Industrial Clients</h3>
                <p className="text-sm text-muted-foreground">Broad energy markets</p>
              </div>
            </div>

            <Button 
              className="tech-button group"
              size="lg"
              onClick={goToStockInformation} // ✅ navigate to StockInformation
            >
              View Stock Information
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            inView ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
          }`}>
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src={aboutImage} 
                alt="DigiPower X Data Center"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border/50 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
