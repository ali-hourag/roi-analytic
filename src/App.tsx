import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SyncLangToI18n } from "./components/SyncLangToI18n";
import { SeoHead } from "./components/SeoHead";
import { supportedLanguages, defaultLocale } from "./i18n";

const queryClient = new QueryClient();

const IndexWithLang = () => (
  <SyncLangToI18n>
    <SeoHead />
    <Index />
  </SyncLangToI18n>
);

const LangRoute = () => {
  const { lang } = useParams<{ lang: string }>();
  const isValidLang = lang && supportedLanguages.includes(lang as "es" | "en" | "nl");
  if (!isValidLang) return <NotFound />;
  return <IndexWithLang />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/${defaultLocale}`} replace />} />
          <Route path="/:lang" element={<LangRoute />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
