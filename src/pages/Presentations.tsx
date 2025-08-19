import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";

const Presentations = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Presentations
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our latest investor presentations, insights, and reports to stay informed.
          </p>
        </div>
      </section>

      {/* Presentation Card */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="shadow-lg hover:shadow-xl transition rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                {/* Details only, no thumbnail */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    January 16, 2025
                  </p>
                  <h2 className="text-xl font-semibold mb-4">
                    Investor Presentation
                  </h2>
                  <a
                    href="/assets/1.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Email Alerts */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Us */}
            <Card className="bg-muted/70 p-8 shadow-md rounded-2xl hover:shadow-lg transition">
              <CardContent>
                <h3 className="text-3xl font-bold mb-3">Contact Us</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We value your engagement and are committed to fostering strong
                  relationships with our stakeholders.
                </p>
                <a
                  href="/ContactUs"
                  className="inline-flex items-center gap-3 font-medium text-lg hover:text-primary transition-colors"
                >
                  Get in touch
                  <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </a>
              </CardContent>
            </Card>

            {/* Email Alerts */}
            <Card className="bg-muted/70 p-8 shadow-md rounded-2xl hover:shadow-lg transition">
              <CardContent>
                <h3 className="text-3xl font-bold mb-3">Sign up for Email Alerts</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Receive updates in real-time about company activities and stay
                  up to date with business developments.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 font-medium text-lg hover:text-primary transition-colors"
                >
                  Sign up
                  <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Presentations;
