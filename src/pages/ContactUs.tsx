import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactUs = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "investor@digipowerx.com",
      description: "General inquiries and investor relations"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Business hours: 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "United States",
      description: "Multiple locations across the US"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9 AM - 6 PM EST",
      description: "Emergency contact available 24/7"
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Get in touch with our team for investor relations, partnerships, or general inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Multiple ways to reach our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow text-center"
              >
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {info.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold mb-4 text-primary">Send Us a Message</h2>
              <p className="text-muted-foreground text-lg">We'll respond within 24 hours</p>
            </div>

            <Card
              className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Contact Form</CardTitle>
                </div>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* ✅ Form fields only, no duplicate headers */}
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
