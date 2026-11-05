import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, MapPin, Menu, X, ShoppingBag } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { useBasket } from "../context/BasketContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { basket, openBasket } = useBasket();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappOrderUrl = getGeneralWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Sleek, Single-Bar Compact Navigation (Height: ~48px–52px) */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-cream-50/95 backdrop-blur-md border-b border-saffron-500/30 shadow-xs py-1.5"
            : "bg-cream-100/90 backdrop-blur-sm border-b border-cream-300 py-1.5 sm:py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-2 group text-left shrink-0"
            aria-label="Prem Kamal Spices – Kashmiri Bazar Home"
          >
            {/* Logo Circular Seal with Saffron Rim */}
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 320 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shadow-xs border border-saffron-500/60 shrink-0 bg-maroon-950 flex items-center justify-center p-0.5 group-hover:border-saffron-400 transition-colors"
            >
              <img
                src="/assets/brand/logo.png"
                alt="Prem Kamal Spices Circular Seal"
                className="w-full h-full object-contain max-w-[32px] max-h-[32px]"
              />
            </motion.div>

            {/* Brand Title (Tight, Compact) */}
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="font-serif text-sm sm:text-base font-bold tracking-tight text-maroon-900 group-hover:text-maroon-800 transition-colors">
                  Prem Kamal
                </span>
                <span className="font-serif text-sm sm:text-base font-bold gold-gradient-text">
                  Spices
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-saffron-800 font-semibold mt-0.5">
                Kashmiri Bazar • Dwarka Sec-7
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs sm:text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-maroon-900 font-bold"
                      : "text-charcoal-700 hover:text-maroon-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron-500 via-maroon-700 to-saffron-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons (Compact) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Basket Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openBasket}
              className="relative p-2 rounded-xl bg-white hover:bg-cream-200 text-maroon-900 border border-saffron-500/25 shadow-xs transition-colors cursor-pointer"
              title="View Inquiry Basket"
              aria-label={`Inquiry Basket with ${basket.length} items`}
            >
              <ShoppingBag className="w-4 h-4 text-maroon-800" />
              {basket.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={basket.length}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-saffron-500 text-maroon-950 font-bold text-[9px] flex items-center justify-center font-mono"
                >
                  {basket.length}
                </motion.span>
              )}
            </motion.button>

            {/* Direct WhatsApp Action (Compact) */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-600 text-white font-semibold text-xs tracking-wide transition-all shadow-xs border border-spicegreen-600/40"
              aria-label="Order on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-maroon-900 hover:bg-cream-200 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-cream-50 border-b border-cream-300 px-4 pt-2.5 pb-4 space-y-2"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-maroon-900 text-cream-100"
                          : "text-charcoal-800 hover:bg-cream-200"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-2 border-t border-cream-200 flex flex-col gap-1.5">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-lg bg-spicegreen-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${shopInfo.contact.phone}`}
                  className="w-full py-2 rounded-lg bg-cream-200 text-maroon-900 font-semibold text-xs flex items-center justify-center gap-1.5 border border-cream-300"
                >
                  <Phone className="w-3.5 h-3.5 text-maroon-800" />
                  <span>Call: {shopInfo.contact.displayPhone}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};
