import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Play, FileText, Users } from "lucide-react";

const Presentations = () => {
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

  const presentations = [
    {
      title: "Q4 2024 Earnings Call Presentation",
      date: "February 11, 2025",
      type: "Earnings",
      description: "Comprehensive overview of Q4 2024 financial performance and 2025 outlook",
      duration: "45 minutes",
      featured: true,
      hasVideo: true
    },
    {
      title: "Data Center Infrastructure Strategy",
      date: "January 25, 2025",
      type: "Strategic",
      description: "Deep dive into our data center expansion plans and infrastructure capabilities",
      duration: "30 minutes",
      featured: false,
      hasVideo: true
    },
    {
      title: "Sustainable Energy Solutions Overview",
      date: "December 15, 2024",
      type: "Technology",
      description: "Presentation on our sustainable energy initiatives and environmental impact",
      duration: "25 minutes",
      featured: false,
      hasVideo: false
    },
    {
      title: "Investor Day 2024 - Company Overview",
      date: "November 10, 2024",
      type: "Investor Day",
      description: "Annual investor day presentation covering business strategy and growth plans",
      duration: "60 minutes",
      featured: false,
      hasVideo: true
    },
    {
      title: "Q3 2024 Financial Results",
      date: "October 28, 2024",
      type: "Earnings",
      description: "Q3 2024 earnings presentation with management discussion and analysis",
      duration: "40 minutes",
      featured: false,
      hasVideo: true
    },
  ];

  const upcomingEvents = [
    {
      title: "Q1 2025 Earnings Call",
      date: "May 15, 2025",
      time: "4:00 PM EST",
      description: "Live earnings call and presentation for Q1 2025 results"
    },
    {
      title: "Energy Infrastructure Conference",
      date: "April 22, 2025",
      time: "10:00 AM EST",
      description: "Industry conference presentation on future of energy infrastructure"
    }
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
              Presentations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Access investor presentations, earnings calls, and strategic updates
            </p>
          </div>
        </div>
      </section>

      {/* Presentations Grid */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-4 text-primary">Recent Presentations</h2>
            <p className="text-muted-foreground text-lg">Download or view our latest investor materials</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {presentations.map((presentation, index) => (
              <Card 
                key={index}
                className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${presentation.featured ? 'border-primary/30 bg-gradient-glow lg:col-span-2' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={presentation.featured ? "default" : "secondary"}
                        className={presentation.featured ? "bg-primary text-primary-foreground" : ""}
                      >
                        {presentation.type}
                      </Badge>
                      {presentation.featured && (
                        <Badge className="bg-gradient-electric text-white">
                          Latest
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{presentation.date}</span>
                    </div>
                  </div>
                  <CardTitle className={`group-hover:text-primary transition-colors duration-300 ${
                    presentation.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {presentation.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {presentation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>PDF Available</span>
                      </div>
                      {presentation.hasVideo && (
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          <span>{presentation.duration}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {presentation.hasVideo && (
                        <Button variant="outline" size="sm" className="hover:border-primary/50 hover:bg-primary/10">
                          <Play className="w-4 h-4 mr-1" />
                          Watch
                        </Button>
                      )}
                      <Button size="sm" className="tech-button bg-gradient-electric hover:scale-105 transition-all duration-300">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Mark your calendar for these important dates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      Upcoming
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Presentations;