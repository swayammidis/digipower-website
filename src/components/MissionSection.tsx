import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Rocket, Shield } from "lucide-react";
import missionImage from "@/assets/mission-image.jpg";

const MissionSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const missionCards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Our mission is to create efficient, reliable, and cost-effective energy solutions by maximizing the potential of our power facilities and building advanced infrastructure to meet the demands of high-performance computing, Bitcoin mining, and other energy-intensive industries.",
      delay: 0
    },
    {
      icon: Lightbulb,
      title: "Our Focus",
      description: "We are focused on continuously expanding our power infrastructure to create a resilient backbone for the future of energy and technology. We are committed to powering the digital economy and the energy grid of tomorrow through sustainable, scalable, and strategically positioned energy assets.",
      delay: 200
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and innovative approaches to energy infrastructure development, we drive the expansion of sustainable energy assets while supporting the growing demands of the digital economy.",
      delay: 400
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Building resilient and reliable energy infrastructure that can withstand the demands of high-performance computing while maintaining cost-effectiveness and environmental sustainability.",
      delay: 600
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background with Tech Grid */}
      <div className="absolute inset-0 tech-grid"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${missionImage})` }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[30px]'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Mission & Focus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driving the future of energy infrastructure through innovation, sustainability, and technological excellence.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionCards.map((card, index) => (
            <Card 
              key={card.title}
              className={`bg-card/70 backdrop-blur-lg border-border/50 hover:border-primary/30 transition-all duration-700 group ${
                inView ? 'animate-assemble-parts opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${card.delay}ms` }}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <card.icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-electric opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          inView ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Power the <span className="text-primary">Future</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join us in building the energy infrastructure of tomorrow. Explore our investor relations and discover the opportunities ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="tech-button px-8 py-3 rounded-lg font-semibold text-primary-foreground hover:glow-strong transition-all duration-300">
                Investor Relations
              </button>
              <button className="px-8 py-3 rounded-lg font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;