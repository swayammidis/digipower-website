import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InvestorRelations from "./pages/InvestorRelations";
import PressReleases from "./pages/PressReleases";
import Presentations from "./pages/Presentations";
import StockInformation from "./pages/StockInformation";
import SECFilings from "./pages/SECFilings";
import Leadership from "./pages/Leadership";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/stock-information" element={<StockInformation />} />
          <Route path="/sec-filings" element={<SECFilings />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
