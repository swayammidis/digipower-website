import { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const stats = [
    { number: "3", label: "United States-based mining sites", delay: "delay-100" },
    { number: "11.8k+", label: "miners under our domain", delay: "delay-200" },
    { number: "100", label: "megawatts of developed electrical infrastructure", delay: "delay-300" },
    { number: "$37.0m", label: "Fiscal Year 2024 Total Revenue", delay: "delay-400" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-1 h-1 bg-primary-glow rounded-full animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" 
           style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-electric bg-clip-text text-transparent">
            DigiPower X by the numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${stat.delay} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-4 animate-pulse-glow">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;