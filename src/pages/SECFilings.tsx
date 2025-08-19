import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, FileText, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const SECFilings = () => {
  const [inView, setInView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
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

  const filings = [
    {
      title: "Form 10-K - Annual Report",
      date: "February 15, 2025",
      type: "10-K",
      description: "Annual report for fiscal year ended December 31, 2024",
      size: "2.1 MB",
      period: "FY 2024",
      featured: true
    },
    {
      title: "Form 10-Q - Quarterly Report",
      date: "November 14, 2024",
      type: "10-Q",
      description: "Quarterly report for the period ended September 30, 2024",
      size: "1.8 MB",
      period: "Q3 2024",
      featured: false
    },
    {
      title: "Form 8-K - Current Report",
      date: "January 28, 2025",
      type: "8-K",
      description: "Announcement of Q4 2024 earnings results",
      size: "0.9 MB",
      period: "Q4 2024",
      featured: false
    },
    {
      title: "Form DEF 14A - Proxy Statement",
      date: "April 20, 2024",
      type: "DEF 14A",
      description: "Definitive proxy statement for 2024 annual meeting",
      size: "1.5 MB",
      period: "2024 AGM",
      featured: false
    },
    {
      title: "Form 10-Q - Quarterly Report",
      date: "August 15, 2024",
      type: "10-Q",
      description: "Quarterly report for the period ended June 30, 2024",
      size: "1.7 MB",
      period: "Q2 2024",
      featured: false
    },
    {
      title: "Form 8-K - Current Report",
      date: "July 10, 2024",
      type: "8-K",
      description: "Announcement of strategic partnership agreement",
      size: "0.7 MB",
      period: "Q2 2024",
      featured: false
    },
    {
      title: "Form 10-Q - Quarterly Report",
      date: "May 14, 2024",
      type: "10-Q",
      description: "Quarterly report for the period ended March 31, 2024",
      size: "1.6 MB",
      period: "Q1 2024",
      featured: false
    },
    {
      title: "Form 10-K - Annual Report",
      date: "February 28, 2024",
      type: "10-K",
      description: "Annual report for fiscal year ended December 31, 2023",
      size: "2.0 MB",
      period: "FY 2023",
      featured: false
    }
  ];

  const filingTypes = ["All", "10-K", "10-Q", "8-K", "DEF 14A"];

  const filteredFilings = filings.filter(filing => {
    const matchesSearch = filing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         filing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || filing.type === selectedType;
    return matchesSearch && matchesType;
  });

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
              SEC Filings
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Access all SEC regulatory filings and official company documents
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search filings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-muted-foreground w-4 h-4" />
                <div className="flex gap-2">
                  {filingTypes.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                      className={selectedType === type ? "bg-primary text-primary-foreground" : "hover:border-primary/50"}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filings List */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredFilings.map((filing, index) => (
                <Card 
                  key={index}
                  className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${filing.featured ? 'border-primary/30 bg-gradient-glow' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge 
                            variant={filing.featured ? "default" : "secondary"}
                            className={filing.featured ? "bg-primary text-primary-foreground" : ""}
                          >
                            {filing.type}
                          </Badge>
                          {filing.featured && (
                            <Badge className="bg-gradient-electric text-white">
                              Latest
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {filing.period}
                          </Badge>
                        </div>
                        <CardTitle className={`group-hover:text-primary transition-colors duration-300 ${
                          filing.featured ? 'text-2xl' : 'text-xl'
                        }`}>
                          {filing.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {filing.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{filing.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <FileText className="w-4 h-4" />
                          <span>{filing.size}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Click to view filing details and download
                      </div>
                      <Button size="sm" className="tech-button bg-gradient-electric hover:scale-105 transition-all duration-300">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFilings.length === 0 && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center py-12">
                <CardContent>
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <CardTitle className="text-xl mb-2 text-muted-foreground">No filings found</CardTitle>
                  <CardDescription>
                    Try adjusting your search criteria or filter settings
                  </CardDescription>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SECFilings;