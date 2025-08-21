import { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const statistics = [
    { number: "3", label: "Sites", delay: "delay-100" },
    { number: "12+", label: "Miners", delay: "delay-200" },
    { number: "100", label: "Infrastructure", delay: "delay-300" },
    { number: "37m", label: "Revenue", delay: "delay-400" },
  ];

  const highlights = [
    { number: "3", label: "Active Sites", delay: "delay-100" },
    { number: "11.8k+", label: "Miners", delay: "delay-200" },
    { number: "100MW", label: "Infrastructure", delay: "delay-300" },
    { number: "$37.0m", label: "Revenue", delay: "delay-400" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT BOX - Key Statistics */}
          <div className="p-10 bg-slate-900/70 border border-gray-700 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500">
            <h3 className="text-4xl font-semibold mb-10 text-primary text-center">
              Key Statistics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${stat.delay} ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="relative p-8 bg-slate-900 border border-gray-700 rounded-xl hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-glow">
                    <div className="relative z-10 text-center">
                      <div className="text-4xl font-bold text-primary mb-3 animate-pulse-glow">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-lg font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BOX - Key Highlights */}
          <div className="p-10 bg-slate-900/70 border border-gray-700 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500">
            <h3 className="text-4xl font-semibold mb-10 text-primary text-center">
              Key Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((h, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${h.delay} ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="relative p-8 bg-slate-900 border border-gray-700 rounded-xl hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-glow">
                    <div className="relative z-10 text-center">
                      <div className="text-4xl font-bold text-primary mb-3 animate-pulse-glow">
                        {h.number}
                      </div>
                      <div className="text-gray-400 text-lg font-medium">
                        {h.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
