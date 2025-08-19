import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search, FileText, FileDown } from "lucide-react";

const SECFilings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const filingsPerPage = 6;

  const filings = [
    {
      date: "Aug 15, 2025",
      type: "6-K",
      description: "Current Report",
      pdf: "/assets/SEC8.pdf",
      links: ["pdf", "doc"],
    },
    {
      date: "Aug 14, 2025",
      type: "SCHEDULE 13G/A",
      description: "Statement of Beneficial Ownership by Certain Investors",
      pdf: "/assets/SEC7.pdf",
      links: ["pdf", "doc"],
    },
    {
      date: "Aug 14, 2025",
      type: "6-K",
      description: "Current Report",
      pdf: "/assets/SEC6.pdf",
      links: ["pdf", "doc"],
    },
    {
      date: "Aug 13, 2025",
      type: "6-K",
      description: "Current Report",
      pdf: "/assets/SEC5.pdf",
      links: ["pdf", "doc"],
    },
    {
      date: "Aug 4, 2025",
      type: "6-K",
      description: "Current Report",
      pdf: "/assets/SEC4.pdf",
      links: ["pdf", "doc"],
    },
    {
      date: "Jul 28, 2025",
      type: "6-K",
      description: "Current Report",
      pdf: "/assets/SEC3.pdf",
      links: ["pdf", "doc"],
    },
    {
      date: "Jul 23, 2025",
      type: "SUPPL",
      description: "Voluntary Supplemental Material by Foreign Issuers [Section 11(a)]",
      pdf: "/assets/SEC2.pdf",
      links: ["pdf", "doc"],
    },
    {
      date: "Jul 23, 2025",
      type: "6-K",
      description: "Current Report",
      pdf: "/assets/SEC1.pdf",
      links: ["pdf", "doc"],
    },
  ];

  // Filter filings by search
  const filteredFilings = filings.filter(
    (filing) =>
      filing.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastFiling = currentPage * filingsPerPage;
  const indexOfFirstFiling = indexOfLastFiling - filingsPerPage;
  const currentFilings = filteredFilings.slice(indexOfFirstFiling, indexOfLastFiling);
  const totalPages = Math.ceil(filteredFilings.length / filingsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">SEC Filings</h1>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 bg-card/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search filings..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 bg-background border"
            />
          </div>
        </div>
      </section>

      {/* Filings Cards */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          {currentFilings.map((filing, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-md border border-border/50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Date Header */}
              <div className="bg-muted/60 px-4 py-2 text-sm font-medium text-foreground">
                {filing.date}
              </div>

              {/* Filing Content */}
              <div className="px-6 py-4">
                <h3 className="text-lg font-bold text-primary">{filing.type}</h3>
                <p className="text-sm text-foreground/80 mt-1">{filing.description}</p>

                {/* Download Links */}
                <div className="flex gap-4 mt-4">
                  {filing.links.includes("pdf") && (
                    <a
                      href={filing.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open PDF"
                    >
                      <FileText className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary" />
                    </a>
                  )}
                  {filing.links.includes("doc") && (
                    <a
                      href={filing.pdf}
                      download
                      title="Download PDF"
                    >
                      <FileDown className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* No Results */}
          {currentFilings.length === 0 && (
            <div className="p-6 text-center text-muted-foreground">
              No filings found.
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center pt-4">
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex gap-2 text-sm">
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                First
              </button>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SECFilings;
