import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageSquare, ArrowUp, ShieldCheck, User } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

export const Footer = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <footer id="footer-section" className="bg-maroon-950 text-cream-200 border-t border-saffron-500/40 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        
        {/* Top Row: Brand Info, Navigation Links & Direct Action Buttons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-5 border-b border-maroon-900/80">
          
          {/* Brand & Owner Verification */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-saffron-500/60 bg-maroon-900 flex items-center justify-center p-0.5 shrink-0 shadow-xs hover:border-saffron-400 transition-colors"
              aria-label="Prem Kamal Spices Home"
            >
              <img
                src="/assets/brand/logo.png"
                alt="Prem Kamal Spices Seal"
                className="w-full h-full object-contain max-w-[34px] max-h-[34px]"
              />
            </Link>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-serif text-sm sm:text-base font-bold text-cream-50 leading-tight">
                  Prem Kamal Spices
                </h3>
                <span className="text-[10px] text-saffron-400 font-semibold uppercase tracking-wider">
                  • Kashmiri Bazar
                </span>
              </div>
              <p className="text-[11px] text-cream-300 mt-0.5 flex items-center gap-1.5 flex-wrap">
                <span>Proprietor: <strong className="text-cream-100 font-medium">{shopInfo.owner}</strong></span>
                <span className="text-maroon-700">•</span>
                <span>FSSAI: <span className="font-mono text-saffron-300/90">{shopInfo.fssaiLicense}</span></span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 text-xs text-cream-300 font-medium">
            <Link to="/" className="hover:text-saffron-300 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-saffron-300 transition-colors">All 24 Products</Link>
            <Link to="/about" className="hover:text-saffron-300 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-saffron-300 transition-colors">Contact</Link>
            <Link to="/faqs" className="hover:text-saffron-300 transition-colors">FAQs</Link>
            <Link to="/privacy-policy" className="hover:text-saffron-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-saffron-300 transition-colors">Terms</Link>
          </nav>

          {/* Fast Contact Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-spicegreen-700 hover:bg-spicegreen-600 text-white text-xs font-semibold transition-all border border-spicegreen-600/50 shadow-xs cursor-pointer"
              aria-label="Order on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: 8700628987</span>
            </a>

            <a
              href={`tel:${shopInfo.contact.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-maroon-900 hover:bg-maroon-800 text-cream-200 text-xs font-semibold border border-saffron-500/30 transition-colors"
              aria-label={`Call ${shopInfo.contact.phone}`}
            >
              <Phone className="w-3 h-3 text-saffron-400" />
              <span>Call Us</span>
            </a>
          </div>

        </div>

        {/* Bottom Row: Address, Hours, Copyright */}
        <div className="pt-3.5 sm:pt-4 flex flex-col md:flex-row items-center justify-between gap-2.5 text-[11px] text-cream-300/80">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <span className="flex items-center gap-1 text-cream-200">
              <MapPin className="w-3 h-3 text-saffron-400 shrink-0" />
              <span>Shop No. 53, Palam Extension, Dwarka Sector 7, Delhi-110077</span>
            </span>
            <span className="hidden sm:inline text-maroon-700">•</span>
            <span className="flex items-center gap-1 text-cream-200">
              <Clock className="w-3 h-3 text-saffron-400 shrink-0" />
              <span>Mon–Sat 10:00 AM – 9:00 PM | Sun 10:00 AM – 8:00 PM</span>
            </span>
          </div>

          <div className="text-center md:text-right text-[10px] sm:text-[11px] text-cream-400">
            © {new Date().getFullYear()} Prem Kamal Spices – Kashmiri Bazar. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
