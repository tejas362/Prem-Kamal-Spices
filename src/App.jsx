import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageProgressBar } from "./components/PageProgressBar";
import { PremKamalTransitionOverlay } from "./components/PremKamalTransitionOverlay";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { PolicyPage } from "./pages/PolicyPage";
import { BasketDrawer } from "./components/BasketDrawer";
import { BasketProvider, useBasket } from "./context/BasketContext";
import { getGeneralWhatsAppUrl } from "./utils/whatsapp";
import { MessageSquare, ShoppingBag } from "lucide-react";

// Fluid, luxury page transition variants (GPU-accelerated)
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.994,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1], // Smooth luxury cubic-bezier deceleration
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.994,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="w-full flex-1"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <PageWrapper>
              <ProductsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />
        <Route
          path="/faqs"
          element={
            <PageWrapper>
              <FAQPage />
            </PageWrapper>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageWrapper>
              <PolicyPage />
            </PageWrapper>
          }
        />
        <Route
          path="/terms"
          element={
            <PageWrapper>
              <PolicyPage />
            </PageWrapper>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const FloatingActions = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();
  const { basket, openBasket } = useBasket();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Basket Pill (Appears when items are in basket) */}
      <AnimatePresence>
        {basket.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openBasket}
            className="flex items-center gap-2 bg-maroon-900 hover:bg-maroon-800 text-cream-100 pl-3.5 pr-4 py-2.5 rounded-full shadow-lg border border-saffron-500/40 cursor-pointer"
            aria-label="Open Inquiry Basket"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-saffron-400" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-saffron-500 text-maroon-950 font-bold text-[9px] flex items-center justify-center font-mono">
                {basket.length}
              </span>
            </div>
            <span className="text-xs font-semibold tracking-wide">
              Basket ({basket.length})
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Global Floating WhatsApp Action Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-spicegreen-700 hover:bg-spicegreen-800 text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-colors border border-spicegreen-600"
        aria-label="Open WhatsApp to enquire with Prem Kamal Spices"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-saffron-300"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-saffron-300 shrink-0" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
          Order on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

export function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        {/* Instant scroll window to top on every route transition */}
        <ScrollToTop />

        {/* Global Page Transition Progress Indicator Bar */}
        <PageProgressBar />

        {/* Signature Prem Kamal Spices Animated Page Transition Overlay */}
        <PremKamalTransitionOverlay />

        <div className="min-h-screen flex flex-col bg-cream-100 text-charcoal-800 font-sans selection:bg-maroon-800 selection:text-cream-100">
          
          {/* Navigation Bar */}
          <Navbar />

          {/* Multi-Page Routes with smooth Page Transition */}
          <main className="flex-1 flex flex-col">
            <AnimatedRoutes />
          </main>

          {/* Footer */}
          <Footer />

          {/* Interactive Basket Drawer */}
          <BasketDrawer />

          {/* Global Floating Actions (WhatsApp + Basket) */}
          <FloatingActions />

        </div>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
