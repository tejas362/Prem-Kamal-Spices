import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Store, ShieldCheck, Heart, Layers, Clock } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";
import { TiltCard } from "./TiltCard";

export const BrandIntroSection = () => {
  const brandPillars = [
    { label: "24+ Offerings", desc: "Spices, Dry Fruits & Specialties", icon: <Layers className="w-4 h-4 text-saffron-500" /> },
    { label: "Dwarka Sector 7", desc: "Shop No. 53, Palam Extension", icon: <Store className="w-4 h-4 text-saffron-500" /> },
    { label: "FSSAI Registered", desc: "Lic. No. 23323011003046", icon: <ShieldCheck className="w-4 h-4 text-saffron-500" /> },
    { label: "Counter Pickup", desc: "Walk-ins & WhatsApp Orders", icon: <Clock className="w-4 h-4 text-saffron-500" /> },
  ];

  return (
    <section id="brand-intro-section" className="py-18 sm:py-24 bg-gradient-to-b from-cream-100/90 via-cream-50 to-cream-100/90 border-b border-cream-300 relative overflow-hidden">
      
      {/* Soft Ambient Glows (No loud shapes) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-maroon-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Showcase Container */}
        <div className="bg-gradient-to-br from-white via-cream-50/80 to-white rounded-3xl p-7 sm:p-10 lg:p-14 border border-saffron-500/25 shadow-card relative overflow-hidden card-sheen">
          
          {/* Subtle gold foil top arch ornament */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col: Interactive 3D Brand Emblem Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <TiltCard
                maxTilt={6}
                scale={1.02}
                className="bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 rounded-3xl p-7 sm:p-9 text-cream-100 border-2 border-saffron-500/40 shadow-hover relative overflow-hidden flex flex-col items-center text-center group"
              >
                {/* Background glow halo */}
                <div className="absolute inset-0 bg-radial-maroon opacity-70 pointer-events-none" />
                <div className="absolute -top-16 -right-16 w-44 h-44 bg-saffron-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Circular Brand Seal with Breathing Glow */}
                <div className="relative mb-5 z-10">
                  <motion.div
                    animate={{ rotate: [0, 4, 0, -4, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-maroon-900/60 p-1.5 border-3 border-saffron-400 shadow-glow-gold flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <img
                      src="/assets/brand/logo.png"
                      alt="Prem Kamal Spices Circular Seal"
                      className="w-full h-full object-contain rounded-full max-w-[130px] max-h-[130px] drop-shadow-md"
                    />
                  </motion.div>
                  
                  {/* Subtle lotus badge at bottom of seal */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-saffron-500 text-maroon-950 font-bold text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 fill-current" />
                    <span>Est. Dwarka</span>
                  </div>
                </div>

                {/* Brand Titles */}
                <div className="relative z-10 space-y-1 mb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 tracking-tight">
                    Prem Kamal Spices
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-saffron-400 font-bold">
                    Kashmiri Bazar • Dwarka Sector 7
                  </p>
                  <p className="font-serif italic text-sm text-saffron-300 pt-1">
                    “{shopInfo.tagline}”
                  </p>
                </div>

                {/* Store Location Pill */}
                <div className="relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-maroon-900/80 text-cream-200 text-xs font-medium border border-saffron-500/30 backdrop-blur-xs">
                  <Store className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                  <span>Shop No. 53, Palam Extn., Delhi</span>
                </div>

              </TiltCard>
            </motion.div>

            {/* Right Col: Brand Story & Interactive Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-7 space-y-5"
            >
              {/* Section Header */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/90 text-maroon-900 text-xs font-semibold uppercase tracking-wider border border-saffron-500/30 shadow-xs">
                <KamalMotif className="w-3.5 h-3.5 text-saffron-600 animate-pulse" />
                <span>Kashmiri Heritage & Tradition</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-maroon-900 tracking-tight leading-snug">
                Welcome to Prem Kamal Spices – Kashmiri Bazar
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-saffron-800">
                “Bringing genuine valley flavours and everyday cooking aroma to your table.”
              </p>

              {/* Story Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                <p>
                  Located at Shop No. 53, Palam Extension, Dwarka Sector 7, <strong>Prem Kamal Spices – Kashmiri Bazar</strong> is your neighbourhood destination for authentic regional foods, fresh stone-ground spice powders, and prized Himalayan dry fruits.
                </p>
                <p>
                  We celebrate traditional culinary methods: ruby-red Kashmiri Mirch ground slowly to preserve aroma, whole cardamom quills, crisp mountain walnuts, authentic Kehwa tea blends, and seasonal valley sun-dried delicacies like Al Hachi (Dried Lauki) and Wangan Hachi (Dried Baigan).
                </p>
              </div>

              {/* 4 Brand Pillars Mini-Grid */}
              <div className="pt-2 grid grid-cols-2 gap-3 sm:gap-3.5">
                {brandPillars.map((p, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="p-3 sm:p-3.5 rounded-xl bg-cream-100/90 border border-saffron-500/20 shadow-xs flex items-start gap-2.5 transition-colors hover:border-saffron-500/40 hover:bg-white"
                  >
                    <div className="p-1.5 rounded-lg bg-white border border-saffron-500/25 shrink-0 shadow-2xs">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-maroon-900 leading-tight">
                        {p.label}
                      </h4>
                      <p className="text-[11px] text-charcoal-600 font-normal mt-0.5 line-clamp-1">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 hover:from-maroon-800 hover:to-maroon-700 text-cream-100 text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2 shadow-md border border-saffron-500/30 group cursor-pointer"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-cream-100 hover:bg-cream-200 text-maroon-900 text-xs sm:text-sm font-semibold tracking-wide transition-all border border-saffron-500/30 flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-saffron-700" />
                  <span>Visit Our Store & Directions</span>
                </Link>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
