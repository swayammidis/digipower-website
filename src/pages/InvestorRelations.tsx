import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp, DollarSign, Users, Download } from "lucide-react";

const InvestorRelations = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const financialHighlights = [
    { icon: DollarSign, title: "Total Revenue", value: "$37.0M", subtitle: "Fiscal Year 2024", color: "text-green-400" },
    { icon: TrendingUp, title: "Growth Rate", value: "+25%", subtitle: "Year over Year", color: "text-blue-400" },
    { icon: Users, title: "Mining Sites", value: "3", subtitle: "United States-based", color: "text-purple-400" },
    { icon: Calendar, title: "Operating Days", value: "365", subtitle: "24/7 Operations", color: "text-orange-400" },
  ];

  const quickLinks = [
    { title: "Annual Reports", description: "Comprehensive annual financial reports and analysis" },
    { title: "Quarterly Earnings", description: "Latest quarterly earnings reports and guidance" },
    { title: "Investor Presentations", description: "Management presentations and investor materials" },
    { title: "Dividend Information", description: "Dividend history and payment schedules" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-primary/30 rounded-lg rotate-45 animate-float" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-electric bg-clip-text text-transparent animate-slide-in-left">
              Investor Relations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Driving sustainable growth through innovative energy infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="tech-button bg-gradient-electric hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Latest Report
              </Button>
              <Button variant="outline" size="lg" className="hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                View Presentations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-4 text-primary">Financial Highlights</h2>
            <p className="text-muted-foreground text-lg">Key performance indicators and growth metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <Card 
                key={index}
                className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto p-3 bg-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{item.value}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{item.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Investor Resources</h2>
            <p className="text-muted-foreground text-lg">Access important financial documents and reports</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {link.title}
                  </CardTitle>
                  <CardDescription>
                    {link.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorRelations;