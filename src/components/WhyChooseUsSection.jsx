import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Layers, MessageSquare, Store, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MapPin, Phone } from "lucide-react";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";
import { TiltCard } from "./TiltCard";
import { shopInfo } from "../data/shopInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

export const WhyChooseUsSection = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  const corePillars = [
    {
      icon: <Compass className="w-5 h-5 text-saffron-400" />,
      tag: "Valley Sourced",
      title: "Kashmiri-Inspired Selection",
      description:
        "Specialized products celebrating authentic Kashmir culinary heritage — ruby-red mirch, fragrant kehwa, and sun-dried valley delicacies.",
      highlight: "Pure heritage recipes & traditional spices",
    },
    {
      icon: <Layers className="w-5 h-5 text-saffron-400" />,
      tag: "Complete Kitchen",
      title: "All Specialities Under One Roof",
      description:
        "From everyday turmeric and fennel powders to in-shell mountain walnuts, jumbo cashews, and traditional shilajit.",
      highlight: "24+ authentic spices, dry fruits & grains",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-saffron-400" />,
      tag: "Direct Support",
      title: "Convenient WhatsApp Ordering",
      description:
        "Chat directly with shop proprietor Rajdeep Jain to enquire about availability, custom pack sizes, or reserve items for pickup.",
      highlight: "Quick response & personalized recommendations",
    },
    {
      icon: <Store className="w-5 h-5 text-saffron-400" />,
      tag: "Local Presence",
      title: "Physical Shop in Dwarka Sector 7",
      description:
        "Visit our store at Shop No. 53, Palam Extension to inspect aromas, verify quality, and enjoy dependable counter pickup.",
      highlight: "Open Monday – Sunday with dedicated customer service",
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-18 sm:py-24 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 border-b border-cream-300 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-maroon-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200/90 border border-saffron-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest mb-3.5 shadow-xs"
          >
            <KamalMotif className="w-4 h-4 text-saffron-600 animate-pulse" />
            <span>Why Prem Kamal Spices</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight"
          >
            Authentic Taste, Trusted Sourcing
          </motion.h2>

          <KashmiriDivider className="my-3.5" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal"
          >
            Dependable regional sourcing, transparent details, and attentive neighbourhood service in Dwarka.
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Showcase: Featured Card on Left + 4 Pillars Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Featured Brand Spotlight Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <TiltCard
              maxTilt={5}
              scale={1.01}
              className="bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 rounded-3xl p-7 sm:p-9 text-cream-100 border-2 border-saffron-500/40 shadow-card flex flex-col justify-between h-full relative overflow-hidden group card-sheen"
            >
              {/* Glow halos */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-maroon-700/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-900/90 border border-saffron-500/40 text-saffron-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Our Commitment to You</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-snug">
                    Genuine Valley Heritage In Every Pinch
                  </h3>
                  <p className="font-serif italic text-sm sm:text-base text-saffron-300">
                    “{shopInfo.tagline}”
                  </p>
                </div>

                {/* Narrative */}
                <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-normal">
                  We believe great cooking begins with authentic, unadulterated ingredients. We source directly and package with complete transparency, verified FSSAI compliance, and clear batch details.
                </p>

                {/* Key Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-maroon-800/80 text-xs text-cream-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0" />
                    <span>FSSAI Registered: <strong>Lic. No. {shopInfo.fssaiLicense}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0" />
                    <span>Physical Walk-in Store at Palam Extension, Dwarka</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0" />
                    <span>Stone-ground powders, unbleached mountain dry fruits</span>
                  </div>
                </div>

              </div>

              {/* Bottom Card Actions */}
              <div className="relative z-10 pt-8 mt-6 border-t border-maroon-800/80 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-600 text-white font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center gap-2 border border-spicegreen-600/40 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Order on WhatsApp</span>
                </a>

                <Link
                  to="/about"
                  className="px-4 py-2.5 rounded-xl bg-maroon-900/80 hover:bg-maroon-800 text-cream-100 text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 border border-saffron-500/30"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </TiltCard>
          </motion.div>

          {/* Right: 4 Interactive Pillar Cards (7 cols, 2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="flex flex-col h-full"
              >
                <TiltCard
                  maxTilt={5}
                  scale={1.015}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-saffron-500/20 shadow-card hover:border-saffron-500/60 hover:shadow-hover transition-all duration-300 flex flex-col justify-between h-full group card-sheen"
                >
                  <div className="space-y-3.5">
                    
                    {/* Header with Icon and Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-maroon-950 text-saffron-400 border border-saffron-500/40 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-saffron-300 transition-all duration-300">
                        {pillar.icon}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-cream-100 text-maroon-900 border border-saffron-500/20">
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-maroon-900 leading-snug group-hover:text-saffron-800 transition-colors">
                      {pillar.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                  </div>

                  {/* Bottom Highlight Strip */}
                  <div className="pt-3 mt-4 border-t border-cream-200/80 flex items-center gap-1.5 text-[11px] font-medium text-maroon-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                    <span className="line-clamp-1">{pillar.highlight}</span>
                  </div>

                </TiltCard>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
