import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search, FileText, FileDown, ExternalLink } from "lucide-react";

interface Filing {
  id: number;
  documentId: string;
  title: string;
  filingDate: string;
  description: string;
  pdfUrl?: string;
}

const SECFilings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filings, setFilings] = useState<Filing[]>([]);
  const [loading, setLoading] = useState(true);
  const filingsPerPage = 6;

  useEffect(() => {
    const fetchFilings = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://fruitful-nest-5c8d028fc8.strapiapp.com/api/sec-filings?populate=*"
        );
        const json = await res.json();

        console.log("SEC Filings API response:", json);

        const data = Array.isArray(json) ? json : json.data;

        setFilings(
          (data ?? []).map((item: any) => {
            // normalize pdfUrl
            let pdfUrl = item.pdfUrl ?? "";
            if (pdfUrl && !pdfUrl.startsWith("http")) {
              pdfUrl = `https://www.sec.gov${pdfUrl}`;
            }

            return {
              id: item.id,
              documentId: item.documentId,
              title: item.title,
              filingDate: item.filingDate,
              description: item.description ?? "",
              pdfUrl,
            };
          })
        );
      } catch (error) {
        console.error("Error fetching filings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilings();
  }, []);

  // Filtering
  const filteredFilings = filings.filter((filing) => {
    return (
      filing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filing.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination
  const indexOfLast = currentPage * filingsPerPage;
  const indexOfFirst = indexOfLast - filingsPerPage;
  const currentFilings = filteredFilings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredFilings.length / filingsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
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

      {/* Filings */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          {loading ? (
            <div className="p-6 text-center">Loading filings...</div>
          ) : currentFilings.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground">
              No filings found.
            </div>
          ) : (
            currentFilings.map((filing) => (
              <div
                key={filing.id}
                className="bg-card/60 backdrop-blur-md border border-border/50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="bg-muted/60 px-4 py-2 text-sm font-medium text-foreground">
                  {filing.filingDate}
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-bold text-primary">{filing.title}</h3>
                  <p className="text-sm text-foreground/80 mt-1">
                    {filing.description}
                  </p>

                  <div className="flex gap-6 mt-4 text-sm">
                    {filing.pdfUrl && (
                      <>
                        <a
                          href={filing.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                        >
                          <FileText className="w-4 h-4" />
                          <span>View File</span>
                        </a>
                        <a
                          href={filing.pdfUrl}
                          download
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                        >
                          <FileDown className="w-4 h-4" />
                          <span>Download</span>
                        </a>
                      </>
                    )}
                    {filing.documentId && (
                      <a
                        href={`https://www.sec.gov/Archives/edgar/data/${filing.documentId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View on SEC</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Pagination */}
          {!loading && currentFilings.length > 0 && (
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SECFilings;
