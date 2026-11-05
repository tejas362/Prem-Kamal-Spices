import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Eye, Scale, UtensilsCrossed, HeartHandshake, ArrowRight, Camera } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { KashmiriDivider, KamalMotif, ChinarLeaf } from "../components/KashmiriMotifs";
import { TiltCard } from "../components/TiltCard";

export const AboutPage = () => {
  const qualityPillars = [
    {
      icon: <Eye className="w-5 h-5 text-maroon-800" />,
      title: "Careful Selection",
      description: "Whole spices, Kashmiri specialties, and dry fruits examined for natural color, intact grains, and true aroma.",
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-saffron-700" />,
      title: "Focus on Flavour",
      description: "Ingredients chosen to enhance the authentic taste and aroma of every daily meal and festive recipe.",
    },
    {
      icon: <Scale className="w-5 h-5 text-spicegreen-700" />,
      title: "Custom Quantities",
      description: "Weighed to order at our counter so you take home exactly what your household or kitchen needs.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-maroon-800" />,
      title: "Local & Trustworthy",
      description: "A friendly neighborhood store experience with honest recommendations and personalized customer care.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-cream-50 min-h-screen relative overflow-hidden">
      
      {/* Decorative ambient motif */}
      <motion.div
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-4 opacity-5 pointer-events-none"
      >
        <ChinarLeaf className="w-96 h-96 text-saffron-500" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal-500 mb-6">
          <Link to="/" className="hover:text-maroon-800 transition-colors font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-maroon-900 font-semibold">About Us</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 text-maroon-900 text-xs font-semibold uppercase tracking-widest border border-cream-300 mb-3 shadow-xs">
            <KamalMotif className="w-4 h-4 text-maroon-800" />
            Our Story & Store
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            About Prem Kamal Spices
          </h1>

          <KashmiriDivider className="my-3" />

          <p className="font-serif italic text-lg sm:text-xl text-saffron-700 font-medium">
            “{shopInfo.tagline}”
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Short Introduction & Quality Pillars */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-700">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900 leading-snug">
                Your Neighborhood Destination for Quality Spices & Dry Fruits
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-charcoal-800 font-normal">
                <strong className="text-maroon-900 font-semibold">Prem Kamal Spices</strong> is a local shop in Palam Extension, Dwarka Sector 7, Delhi, offering spices, Kashmiri specialties, dry fruits, and related food products.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-charcoal-700 font-normal">
                We believe that good food begins with honest ingredients. Whether you are preparing simple everyday meals or festive celebrations, the freshness and natural aroma of your spices make all the difference. Our shop is dedicated to bringing quality ingredients directly to your kitchen.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-charcoal-700 font-normal">
                From fragrant whole spices and cold-milled ground blends to genuine Kashmiri specialties like saffron and mountain walnuts, we provide a warm, reliable shopping experience where you can see, smell, and select your ingredients with confidence.
              </p>
            </div>

            {/* Quality & Flavour Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {qualityPillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="p-4 rounded-xl bg-white border border-cream-300 shadow-xs flex items-start gap-3.5 hover:shadow-soft transition-all"
                >
                  <div className="p-2 rounded-lg bg-cream-100 shrink-0 border border-cream-200">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-maroon-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/products"
                  className="px-5 py-3 rounded-xl bg-maroon-900 hover:bg-maroon-800 text-cream-100 font-semibold text-xs tracking-wide transition-colors flex items-center gap-2 shadow-xs"
                >
                  <span>Browse Our Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-xl bg-cream-200 hover:bg-cream-300 text-maroon-900 font-semibold text-xs tracking-wide transition-colors flex items-center gap-2 border border-cream-300"
                >
                  <MapPin className="w-4 h-4 text-maroon-800" />
                  <span>Visit Us in Dwarka</span>
                </Link>
              </motion.div>
            </div>

          </div>

          {/* Right Column: Store Image Placeholder with 3D Tilt */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <TiltCard
                maxTilt={6}
                scale={1.01}
                className="relative rounded-2xl overflow-hidden shadow-soft border-2 border-dashed border-maroon-800/40 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 aspect-[4/5] flex flex-col items-center justify-center p-8 text-center group"
              >
                {/* Background watermark */}
                <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
                  <KamalMotif className="w-64 h-64 text-maroon-900" />
                </div>

                <div className="relative z-10 space-y-4 max-w-xs">
                  {/* Camera icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white text-maroon-900 mx-auto flex items-center justify-center border border-maroon-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-maroon-800" />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-maroon-900 text-cream-100 tracking-wider uppercase shadow-xs">
                      Store Image Placeholder
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-maroon-900 mt-2">
                      Shop & Storefront
                    </h3>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed font-normal">
                    Reserved for store photograph, counter view, or spice displays at Shop No. 53, Palam Extension, Dwarka Sector 7.
                  </p>

                  <div className="pt-2">
                    <span className="inline-block text-[10px] font-mono text-saffron-800 bg-saffron-100/90 px-3 py-1 rounded-md border border-saffron-300">
                      Recommended: 4:5 Portrait Photo
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-cream-300 text-charcoal-800 shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-saffron-700">
                      Dwarka Sector 7
                    </span>
                    <span className="text-[10px] font-medium text-charcoal-500">
                      Delhi-110077
                    </span>
                  </div>
                  <p className="text-xs font-serif font-bold text-maroon-900 mt-0.5">
                    Prem Kamal Spices Counter
                  </p>
                </div>
              </TiltCard>

            </div>
          </div>

        </div>

        {/* Counter Visit Callout Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-300 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-1">
              <h3 className="font-serif text-xl font-bold text-maroon-900">
                Visit Our Shop Counter in Dwarka
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Shop No. 53, Palam Extension, Dwarka Sector 7, Delhi-110077. Open Monday to Saturday: 10:00 AM – 9:00 PM, Sunday: 10:00 AM – 8:00 PM.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href={shopInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-cream-100 hover:bg-cream-200 text-maroon-900 text-xs font-semibold flex items-center justify-center gap-2 border border-cream-300 transition-colors text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-maroon-800" />
                <span>Get Directions</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-saffron-300" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
