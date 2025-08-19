import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Calendar, Clock, FileDown } from "lucide-react";

const StockInformation = () => {
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

  const stockData = {
    currentPrice: "$45.67",
    change: "+2.34",
    changePercent: "+5.4%",
    volume: "2.1M",
    marketCap: "$1.2B",
    peRatio: "18.5",
    high52Week: "$52.30",
    low52Week: "$28.45",
    avgVolume: "1.8M"
  };

  const keyMetrics = [
    { title: "Market Capitalization", value: stockData.marketCap, icon: DollarSign, color: "text-blue-400" },
    { title: "P/E Ratio", value: stockData.peRatio, icon: BarChart3, color: "text-green-400" },
    { title: "52-Week High", value: stockData.high52Week, icon: TrendingUp, color: "text-purple-400" },
    { title: "52-Week Low", value: stockData.low52Week, icon: TrendingDown, color: "text-orange-400" },
  ];

  const dividendInfo = [
    { label: "Dividend Yield", value: "3.2%" },
    { label: "Annual Dividend", value: "$1.45" },
    { label: "Payout Ratio", value: "28%" },
    { label: "Ex-Dividend Date", value: "Mar 15, 2025" },
  ];

  const analystCoverage = [
    { firm: "Goldman Sachs", rating: "Buy", target: "$55.00", date: "Feb 10, 2025" },
    { firm: "Morgan Stanley", rating: "Hold", target: "$48.00", date: "Feb 8, 2025" },
    { firm: "JP Morgan", rating: "Buy", target: "$52.00", date: "Feb 5, 2025" },
    { firm: "Deutsche Bank", rating: "Buy", target: "$50.00", date: "Jan 28, 2025" },
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
              Stock Information
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Real-time stock data and financial metrics for DPWX
            </p>
          </div>
        </div>
      </section>

      {/* Stock Price Overview */}
      <section className="py-12 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                  NASDAQ: DPWX
                </Badge>
                <Badge variant="outline" className="border-green-400 text-green-400">
                  <Clock className="w-4 h-4 mr-1" />
                  Real-time
                </Badge>
              </div>
              <CardTitle className="text-6xl font-bold text-primary mb-2">
                {stockData.currentPrice}
              </CardTitle>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-2xl font-semibold text-green-400">
                  {stockData.change} ({stockData.changePercent})
                </span>
              </div>
              <p className="text-muted-foreground mt-2">
                Volume: {stockData.volume} | Avg Volume: {stockData.avgVolume}
              </p>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Key Metrics */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <h2 className="text-4xl font-bold mb-4 text-primary">Key Metrics</h2>
            <p className="text-muted-foreground text-lg">Important financial indicators and performance metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card
                key={index}
                className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{metric.value}</CardTitle>
                  <CardDescription className="text-sm">{metric.title}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dividend Information */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Dividend Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dividendInfo.map((item, index) => (
                <Card
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.label}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-primary">
                        {item.value}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analyst Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Analyst Coverage</h2>

            <div className="space-y-4">
              {analystCoverage.map((analyst, index) => (
                <Card
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{analyst.firm}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{analyst.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge
                          className={`${analyst.rating === 'Buy'
                              ? 'bg-green-500 text-white'
                              : 'bg-yellow-500 text-black'
                            }`}
                        >
                          {analyst.rating}
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Price Target</p>
                          <p className="text-xl font-bold text-primary">{analyst.target}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Presentation + Contact/Alerts */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Download Presentation */}
            <Card className="group bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.05]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-2">Investor Presentation</CardTitle>
                <CardDescription className="text-muted-foreground mb-6">
                  View and download the latest company presentation.
                </CardDescription>
                <a href="/assets/1.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="flex items-center gap-2 w-full justify-center group-hover:shadow-glow">
                    <FileDown className="w-5 h-5" />
                    Download PDF
                  </Button>
                </a>
              </CardHeader>
            </Card>

            {/* Contact Us */}
            <Card className="group bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.05]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-2">Contact Us</CardTitle>
                <CardDescription className="text-muted-foreground mb-6">
                  We value your engagement and are committed to fostering strong relationships with our stakeholders.
                </CardDescription>
                <a
                  href="/contact-us"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  Get in touch →
                </a>
              </CardHeader>
            </Card>


            {/* Email Alerts */}
            <Card className="group bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.05]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-2">Sign up for Email Alerts</CardTitle>
                <CardDescription className="text-muted-foreground mb-6">
                  Receive updates in real-time about company activities and stay up to date with business developments.
                </CardDescription>
                <a href="/signup" className="text-lg font-semibold text-primary hover:underline">
                  Sign up →
                </a>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StockInformation;
