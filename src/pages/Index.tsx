import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import Sites from "@/components/Sites";  
import MissionSection from "@/components/MissionSection";
import ContactForm from "@/components/ContactForm";  // ✅ Import ContactForm
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <Sites />  
        <MissionSection />

        {/* ✅ Contact Form before Footer */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">We’d love to hear from you</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
