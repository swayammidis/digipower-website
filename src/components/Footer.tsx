import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-card to-background border-t border-border/50 overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-20 h-20 border border-primary/20 rounded-lg rotate-45 animate-float" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold bg-gradient-electric bg-clip-text text-transparent">
                DIGIPOWER X
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              DigiPower X is an innovative energy infrastructure company that develops cutting-edge data centers to drive the expansion of sustainable energy assets.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@digipowerx.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                <span>United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/investor-relations" className="block text-muted-foreground hover:text-primary transition-colors">
                Investor Relations
              </Link>
              <Link to="/press-releases" className="block text-muted-foreground hover:text-primary transition-colors">
                Press Releases
              </Link>
              <Link to="/presentations" className="block text-muted-foreground hover:text-primary transition-colors">
                Presentations
              </Link>
              <Link to="/stock-information" className="block text-muted-foreground hover:text-primary transition-colors">
                Stock Information
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Legal</h3>
            <div className="space-y-3">
              <Link to="/sec-filings" className="block text-muted-foreground hover:text-primary transition-colors">
                SEC Filings
              </Link>
              <Link to="/leadership" className="block text-muted-foreground hover:text-primary transition-colors">
                Leadership
              </Link>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 DigiPower X. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 border border-current rounded" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 border border-current rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;