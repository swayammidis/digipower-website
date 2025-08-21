import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Investor Relations", href: "/investor-relations" },
    { name: "Press Releases", href: "/press-releases" },
    { name: "Presentations", href: "/presentations" },
    { name: "Stock Information", href: "/stock-information" },
    { name: "SEC Filings", href: "/sec-filings" },
    { name: "Leadership & Committees", href: "/leadership" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div
        className={`px-6 py-4 flex items-center justify-between 
        backdrop-blur-md border-b border-cyan-500/30 shadow-lg
        ${isScrolled ? "bg-cyan-950/80" : "bg-cyan-900/70"}`}
      >
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Digipower X Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* ✅ Custom Square Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 
            border-2 border-cyan-400 rounded-md transition-all duration-300 
            hover:bg-cyan-800/30 hover:scale-105"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-cyan-400 transition-transform duration-300" />
          ) : (
            <>
              <span className="w-5 h-0.5 bg-cyan-400 rounded" />
              <span className="w-5 h-0.5 bg-cyan-400 rounded" />
              <span className="w-5 h-0.5 bg-cyan-400 rounded" />
            </>
          )}
        </button>
      </div>

      {/* ✅ Dropdown Panel */}
      {isOpen && (
        <div className="mt-2 mx-auto w-[95%] max-w-5xl rounded-lg bg-cyan-900/90 backdrop-blur-md border border-cyan-500/30 shadow-xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block text-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                location.pathname === item.href
                  ? "bg-cyan-800/60 text-white shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                  : "text-gray-200 hover:text-cyan-300 hover:bg-cyan-800/30"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
