import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { KamalMotif } from "./KashmiriMotifs";
import confetti from "canvas-confetti";

export const OrderCTASection = () => {
  const whatsappUrl = `https://wa.me/${shopInfo.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Prem Kamal Spices, I have a product in mind and would like to enquire about availability, pack sizes, and orders."
  )}`;

  const handleConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#E07A18", "#731627", "#F59E0B", "#265735"],
    });
  };

  return (
    <section id="order-cta-section" className="py-18 sm:py-24 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 relative overflow-hidden border-b-2 border-saffron-500/40">
      
      {/* Subtle ambient glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          {/* Order & Inquiries Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-950/90 border border-saffron-500/40 text-saffron-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
            <KamalMotif className="w-3.5 h-3.5 text-saffron-400 animate-pulse" />
            <span>Direct Orders & Inquiries</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-tight">
            Have a product in mind?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-cream-200/90 max-w-xl mx-auto font-normal leading-relaxed">
            Contact us to enquire about availability, pack sizes, and orders.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary: Chat on WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleConfetti}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-600 text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-glow-gold flex items-center justify-center gap-3 cursor-pointer border border-spicegreen-500/50"
              aria-label="Chat on WhatsApp with Prem Kamal Spices"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </motion.a>

            {/* Secondary: Direct Call */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${shopInfo.contact.phone}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-maroon-900/80 hover:bg-maroon-800 text-cream-100 font-semibold text-sm sm:text-base tracking-wide transition-all flex items-center justify-center gap-2.5 border border-saffron-500/30"
              aria-label={`Call ${shopInfo.contact.phone}`}
            >
              <Phone className="w-4 h-4 text-saffron-400" />
              <span>Call: {shopInfo.contact.phone}</span>
            </motion.a>
          </div>

          {/* Quick shop address & hours reminder */}
          <div className="pt-8 border-t border-maroon-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-cream-300">
            <div className="flex items-center gap-2 bg-maroon-900/40 px-3 py-1.5 rounded-lg border border-saffron-500/15">
              <MapPin className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
              <span>Shop No. 53, Palam Extension, Dwarka Sector 7, Delhi-110077</span>
            </div>
            <div className="flex items-center gap-2 bg-maroon-900/40 px-3 py-1.5 rounded-lg border border-saffron-500/15">
              <Clock className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
              <span>Mon – Sat: 10:00 AM – 9:00 PM</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
