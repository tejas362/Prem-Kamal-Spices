import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, MapPin, Sparkles, ShieldCheck, Store, Flame } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { KamalMotif, ChinarLeaf, PaisleyMotif } from "./KashmiriMotifs";
import { SpiceParticles } from "./SpiceParticles";
import { TiltCard } from "./TiltCard";
import confetti from "canvas-confetti";

export const Hero = ({ onExploreCatalog }) => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  const handleWhatsAppClick = (e) => {
    confetti({
      particleCount: 40,
      spread: 65,
      origin: { y: 0.8 },
      colors: ["#E07A18", "#731627", "#F59E0B", "#265735"],
    });
  };

  const heroShowcase = [
    {
      image: "/assets/products/kashmiri-mirch-powder.png",
      tag: "Valley Specialty",
      name: "Kashmiri Mirch",
      subtitle: "Ruby-Red & Mild Warmth",
    },
    {
      image: "/assets/products/kashmiri-akhrot.png",
      tag: "Mountain Harvest",
      name: "Kashmiri Akhrot",
      subtitle: "Natural Rich Oils",
    },
    {
      image: "/assets/products/kashmiri-kehwa-chai.png",
      tag: "Heritage Brew",
      name: "Kehwa Chai",
      subtitle: "Saffron & Spices",
    },
    {
      image: "/assets/products/elaichi.png",
      tag: "Select Whole Spice",
      name: "Green Elaichi",
      subtitle: "Bold & Fragrant",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-maroon-950 text-cream-100 min-h-[90vh] flex items-center">
      
      {/* Background Image with Deep Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596040033282-3db368032efb?auto=format&fit=crop&w=2000&q=85"
          alt="Traditional Indian spices and aromas"
          className="w-full h-full object-cover object-center filter brightness-[0.28] saturate-[1.35]"
        />
        {/* Layered luxury radial gradient overlays */}
        <div className="absolute inset-0 bg-radial-maroon opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-maroon-950/70" />
      </div>

      {/* Floating Organic Spice & Saffron Particles */}
      <SpiceParticles className="absolute inset-0 z-10 pointer-events-auto" />

      {/* Subtle Kashmiri decorative watermark */}
      <motion.div
        animate={{ rotate: [10, 16, 10], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -right-12 lg:right-16 opacity-10 pointer-events-none z-10"
      >
        <ChinarLeaf className="w-80 h-80 text-saffron-400" />
      </motion.div>

      {/* Main Banner Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Supporting Text, and Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Brand & Location Pill */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-900/90 border border-saffron-500/40 text-cream-100 shadow-glow-gold backdrop-blur-md"
            >
              <KamalMotif className="w-4 h-4 text-saffron-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-saffron-300">
                Prem Kamal Spices – Kashmiri Bazar
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-400" />
              <span className="text-[11px] text-cream-200 hidden sm:inline">Dwarka Sector 7, Delhi</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream-50 leading-[1.12]">
                Authentic Kashmiri Flavours &{" "}
                <span className="gold-gradient-text block sm:inline font-extrabold">
                  Handpicked Spices
                </span>
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-saffron-300/95 tracking-wide pt-1">
                “{shopInfo.tagline}”
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-cream-200/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore pure whole and ground spices, valley specialties, mountain walnuts, crisp almonds, and traditional dry provisions right here in Dwarka.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary: Explore Catalog */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-saffron-500 hover:from-saffron-400 hover:to-saffron-500 text-maroon-950 font-bold text-sm tracking-wide transition-all shadow-glow-gold flex items-center justify-center gap-2.5 cursor-pointer group card-sheen"
              >
                <span>Explore 24 Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary: Chat on WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-600 text-white font-semibold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2.5 border border-spicegreen-500/50 cursor-pointer"
                aria-label="Order on WhatsApp with Prem Kamal Spices"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-maroon-800/80 text-left">
              <div className="bg-maroon-900/60 backdrop-blur-sm rounded-xl p-3 border border-saffron-500/20">
                <div className="flex items-center gap-2 text-saffron-400 font-bold text-sm">
                  <Store className="w-4 h-4" />
                  <span>Dwarka Sec-7</span>
                </div>
                <p className="text-[11px] text-cream-300 mt-0.5">Shop 53, Palam Extn.</p>
              </div>

              <div className="bg-maroon-900/60 backdrop-blur-sm rounded-xl p-3 border border-saffron-500/20">
                <div className="flex items-center gap-2 text-saffron-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>FSSAI Certified</span>
                </div>
                <p className="text-[11px] text-cream-300 mt-0.5">Lic. 23323011003046</p>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-maroon-900/60 backdrop-blur-sm rounded-xl p-3 border border-saffron-500/20">
                <div className="flex items-center gap-2 text-saffron-400 font-bold text-sm">
                  <Flame className="w-4 h-4" />
                  <span>Direct Orders</span>
                </div>
                <p className="text-[11px] text-cream-300 mt-0.5">Counter & WhatsApp</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 4-Card Luxury Interactive Spice Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing gold halo behind the grid */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-saffron-500/20 via-maroon-700/20 to-saffron-500/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative grid grid-cols-2 gap-4 sm:gap-5 p-3 rounded-3xl bg-maroon-900/70 border border-saffron-500/30 backdrop-blur-md shadow-2xl">
              {heroShowcase.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <TiltCard
                    maxTilt={8}
                    scale={1.03}
                    className="bg-maroon-950/90 rounded-2xl overflow-hidden border border-saffron-500/30 shadow-card hover:border-saffron-500/70 hover:shadow-glow-gold transition-all duration-300 flex flex-col h-full group card-sheen"
                  >
                    {/* Image Container with Golden Ratio */}
                    <div className="relative aspect-square overflow-hidden bg-maroon-900/40">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-transparent opacity-80" />
                      
                      {/* Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-maroon-900/90 text-saffron-300 border border-saffron-500/40 shadow-xs backdrop-blur-xs">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Title */}
                    <div className="p-3 text-center bg-maroon-950">
                      <h4 className="font-serif text-sm font-bold text-cream-50 group-hover:text-saffron-300 transition-colors line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-cream-300/80 font-normal line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Bottom floating prompt */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-4 text-center"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-saffron-300 font-medium bg-maroon-900/80 px-3.5 py-1.5 rounded-full border border-saffron-500/30 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
                <span>Visit our store to experience authentic aromas</span>
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
