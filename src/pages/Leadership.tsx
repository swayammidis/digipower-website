import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Linkedin, Mail, Award } from "lucide-react";

const Leadership = () => {
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

  const leadership = [
    {
      name: "John Mitchell",
      position: "Chief Executive Officer & Chairman",
      experience: "20+ years",
      background: "Former VP of Energy Infrastructure at Tesla, led multiple billion-dollar energy projects. MBA from Stanford Business School.",
      expertise: ["Energy Infrastructure", "Strategic Planning", "Corporate Development"],
      featured: true
    },
    {
      name: "Sarah Chen",
      position: "Chief Financial Officer",
      experience: "15+ years",
      background: "Former CFO at SolarEdge Technologies, CPA with extensive experience in renewable energy financing and public company reporting.",
      expertise: ["Financial Planning", "Capital Markets", "Risk Management"],
      featured: false
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      experience: "18+ years",
      background: "Former Principal Engineer at Google's data center division, holds 12 patents in energy-efficient computing infrastructure.",
      expertise: ["Data Center Technology", "Energy Efficiency", "Infrastructure Design"],
      featured: false
    },
    {
      name: "Emily Watson",
      position: "Chief Operating Officer",
      experience: "16+ years",
      background: "Former Operations Director at NextEra Energy, expert in large-scale energy project execution and regulatory compliance.",
      expertise: ["Operations Management", "Project Execution", "Regulatory Affairs"],
      featured: false
    }
  ];

  const boardMembers = [
    {
      name: "Robert Thompson",
      position: "Lead Independent Director",
      background: "Former CEO of American Electric Power, 30+ years in energy sector leadership."
    },
    {
      name: "Dr. Lisa Park",
      position: "Independent Director",
      background: "Professor of Sustainable Energy at MIT, advisor to multiple cleantech companies."
    },
    {
      name: "James Wilson",
      position: "Independent Director",
      background: "Former Managing Director at Goldman Sachs Energy Group, expert in energy finance."
    },
    {
      name: "Maria Gonzalez",
      position: "Independent Director",
      background: "Former General Counsel at Renewable Energy Group, specialist in energy law and compliance."
    }
  ];

  const committees = [
    {
      name: "Audit Committee",
      chair: "Robert Thompson",
      members: ["Dr. Lisa Park", "James Wilson"],
      description: "Oversees financial reporting, internal controls, and risk management processes."
    },
    {
      name: "Compensation Committee",
      chair: "Dr. Lisa Park",
      members: ["Maria Gonzalez", "Robert Thompson"],
      description: "Reviews and approves executive compensation and equity incentive programs."
    },
    {
      name: "Nominating & Governance Committee",
      chair: "James Wilson",
      members: ["Maria Gonzalez", "Dr. Lisa Park"],
      description: "Identifies board candidates and oversees corporate governance practices."
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
              Leadership & Committees
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Meet the experienced team driving DigiPower X's innovative energy solutions
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-4 text-primary">Executive Leadership</h2>
            <p className="text-muted-foreground text-lg">Proven leaders with deep industry expertise</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card 
                key={index}
                className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${leader.featured ? 'border-primary/30 bg-gradient-glow lg:col-span-2' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className={`group-hover:text-primary transition-colors duration-300 ${
                          leader.featured ? 'text-2xl' : 'text-xl'
                        }`}>
                          {leader.name}
                        </CardTitle>
                        {leader.featured && (
                          <Badge className="bg-gradient-electric text-white">
                            CEO
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-lg font-medium text-primary mb-2">
                        {leader.position}
                      </CardDescription>
                      <Badge variant="outline" className="mb-4">
                        {leader.experience}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {leader.background}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Key Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Board of Directors</h2>
            <p className="text-muted-foreground text-lg">Independent oversight and strategic guidance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {boardMembers.map((member, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {member.position}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Committees */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Board Committees</h2>
            <p className="text-muted-foreground text-lg">Specialized committees ensuring effective governance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {committees.map((committee, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {committee.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-primary">Chair:</p>
                      <p className="text-sm text-muted-foreground">{committee.chair}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">Members:</p>
                      {committee.members.map((member, memberIndex) => (
                        <p key={memberIndex} className="text-sm text-muted-foreground">
                          {member}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {committee.description}
                  </p>
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

export default Leadership;