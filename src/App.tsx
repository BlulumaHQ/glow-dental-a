import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import WhyGlow from "./pages/WhyGlow";
import PediatricDentist from "./pages/PediatricDentist";
import { AbbotsfordTeam, LangleyTeam, RichmondTeam } from "./pages/TeamPages";
import Locations from "./pages/Locations";
import { LangleyLocation, RichmondLocation, AbbotsfordLocation } from "./pages/LocationDetail";
import BookOnline from "./pages/BookOnline";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import CDCP from "./pages/CDCP";
import NewPatients from "./pages/NewPatients";
import Emergency from "./pages/Emergency";
import BabyFirstVisit from "./pages/BabyFirstVisit";
import DentistryForChildren from "./pages/DentistryForChildren";
import TeenDentist from "./pages/TeenDentist";
import DentistReferral from "./pages/DentistReferral";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/" element={<About />} />
            <Route path="/about/why-childrens-dental-clinic/" element={<WhyGlow />} />
            <Route path="/our-pediatric-dentist/" element={<PediatricDentist />} />
            <Route path="/our-abbotsford-team/" element={<AbbotsfordTeam />} />
            <Route path="/our-langley-team/" element={<LangleyTeam />} />
            <Route path="/our-richmond-team/" element={<RichmondTeam />} />
            <Route path="/locations/" element={<Locations />} />
            <Route path="/our-locations/langley/" element={<LangleyLocation />} />
            <Route path="/our-locations/richmond/" element={<RichmondLocation />} />
            <Route path="/our-locations/abbotsford/" element={<AbbotsfordLocation />} />
            <Route path="/book-online/" element={<BookOnline />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/resources/" element={<Resources />} />
            <Route path="/cdcp/" element={<CDCP />} />
            <Route path="/new-patients/" element={<NewPatients />} />
            <Route path="/emergency-pediatric-dental-care/" element={<Emergency />} />
            <Route path="/ages/baby-first-dental-visit/" element={<BabyFirstVisit />} />
            <Route path="/ages/dentistry-for-children/" element={<DentistryForChildren />} />
            <Route path="/ages/teen-dentist-langley/" element={<TeenDentist />} />
            <Route path="/dentist-referral/" element={<DentistReferral />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
