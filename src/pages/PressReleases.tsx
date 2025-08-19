import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { API_URL } from "@/lib/api"; 

const PressReleases = () => {
  const [inView, setInView] = useState(false);
  const [pressReleases, setPressReleases] = useState<any[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // 🔹 Fetch data from Strapi API
  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/press-releases?populate=*`);
        const data = res.data;

        // Map Strapi response to frontend format
        const mapped = data.data.map((item: any) => {
          const attrs = item.attributes || item;

          return {
            id: item.id,
            title: attrs.Title || "Untitled",
            date: attrs.releaseDate
              ? new Date(attrs.releaseDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No date",
            category: attrs.Category?.replace(/"/g, "") || "General",
            excerpt: attrs.Summary || "",
            featured: attrs.Featured || false,
            // ✅ pdf file comes from Strapi uploads, prepend backend URL
            pdf:
              attrs.pdfFile && attrs.pdfFile.length > 0
                ? `${API_URL}${attrs.pdfFile[0].url}`
                : null,
          };
        });

        setPressReleases(mapped);
      } catch (error) {
        console.error("Error fetching press releases:", error);
        setPressReleases([]);
      }
    };

    fetchPressReleases();
  }, []);

  // 🔹 Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
              Press Releases
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Stay updated with the latest news and announcements from DigiPower
              X
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {pressReleases.map((release, index) => (
              <Card
                key={release.id}
                className={`group mb-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow cursor-pointer ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${release.featured ? "border-primary/30 bg-gradient-glow" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={release.featured ? "default" : "secondary"}
                        className={
                          release.featured
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                      >
                        {release.category}
                      </Badge>
                      {release.featured && (
                        <Badge className="bg-gradient-electric text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{release.date}</span>
                    </div>
                  </div>
                  <CardTitle
                    className={`text-xl lg:text-2xl group-hover:text-primary transition-colors duration-300 ${
                      release.featured ? "text-2xl lg:text-3xl" : ""
                    }`}
                  >
                    {release.pdf ? (
                      <a
                        href={release.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {release.title}
                      </a>
                    ) : (
                      release.title
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {release.excerpt}
                  </CardDescription>
                  {release.pdf && (
                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
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

export default PressReleases;
