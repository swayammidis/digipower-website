import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp, DollarSign, Users, Download, ArrowRight } from "lucide-react";

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

  const pressReleases = [
    {
      title: "Digi Power X Reports Solid Mid-Year Financial Position, Removal of 'Going Concern' Risk and Positive Adjusted EBITDA in Q2 2025",
      date: "August 14, 2025",
      category: "Corporate News",
      pdf: "/assets/August 14, 2025.pdf",
    },
    {
      title: "Digi Power X Reports 122% Month-Over-Month Increase in Cash and Crypto Position with No Long-Term Debt and Reports July 2025 Production Results",
      date: "August 4, 2025",
      category: "Corporate News",
      pdf: "/assets/August 4, 2025.pdf",
    },
    {
      title: "Digi Power X Subsidiary, US Data Centers Inc., Files Provisional Patent for ARMS 200 Modular AI Data Center Platform",
      date: "July 28, 2025",
      category: "Financial",
      pdf: "/assets/July 28, 2025.pdf",
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
              Investor Relations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Driving sustainable growth through innovative energy infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              {/* Download Button */}
              <a
                href="/assets/1.pdf"
                download
                className="tech-button bg-gradient-electric hover:scale-105 transition-all duration-300 inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Investor Presentation
              </a>

              {/* View Button */}
              <a
                href="/assets/1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center border rounded-md px-4 py-2 text-lg"
              >
                View Presentations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Financial Highlights</h2>
            <p className="text-muted-foreground text-lg">Key performance indicators and growth metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <Card
                key={index}
                className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto p-3 bg-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
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

      {/* Press Releases Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-primary">Press Releases</h2>
            <p className="text-muted-foreground text-lg">Latest updates and company announcements</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {pressReleases.map((news, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start border-b border-border pb-6"
              >
                <div>
                  <p className="text-sm text-muted-foreground">{news.date}</p>
                  {/* Title opens PDF */}
                  <a
                    href={news.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium mt-1 hover:text-primary transition-colors cursor-pointer block"
                  >
                    {news.title}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA (React Router Link) */}
          <div className="flex justify-end mt-12">
            <Link
              to="/press-releases"
              className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
            >
              View all press releases
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorRelations;
