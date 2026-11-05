import React from "react";
import { motion } from "framer-motion";
import { Eye, ArrowRight, MessageSquare, ShoppingBag, Sparkles } from "lucide-react";
import { products } from "../data/products";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";
import { TiltCard } from "./TiltCard";
import { getProductWhatsAppUrl } from "../utils/whatsapp";

// Initial launch 8 featured products specified by the shop owner
const FEATURED_IDS = [
  "kashmiri-akhrot",
  "rajma",
  "kashmiri-mirch-powder",
  "kaju",
  "badam",
  "kashmiri-kehwa-chai",
  "elaichi",
  "anjeer",
];

export const FeaturedProductsSection = ({ onSelectProduct, onViewAll }) => {
  const featuredProducts = FEATURED_IDS.map((id) =>
    products.find((p) => p.id === id)
  ).filter(Boolean);

  return (
    <section id="featured-products-section" className="py-16 sm:py-24 bg-cream-50/70 border-b border-cream-300 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200/80 border border-saffron-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest mb-3.5 shadow-xs"
          >
            <KamalMotif className="w-4 h-4 text-saffron-600 animate-pulse" />
            <span>Featured Product Selection</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight"
          >
            Featured Products
          </motion.h2>

          <KashmiriDivider className="my-3.5" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal"
          >
            Our core initial launch selection representing authentic valley harvests, freshly milled ground spices, and handpicked premium dry fruits.
          </motion.p>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, idx) => {
            const whatsappUrl = getProductWhatsAppUrl(product.name);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
              >
                <TiltCard
                  maxTilt={6}
                  scale={1.015}
                  className="bg-white rounded-2xl overflow-hidden border border-saffron-500/20 shadow-card hover:border-saffron-500/60 hover:shadow-hover transition-all duration-300 flex flex-col h-full group card-sheen"
                >
                  {/* Product Image */}
                  <div
                    onClick={() => onSelectProduct && onSelectProduct(product)}
                    className="relative aspect-square bg-cream-100 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Quick View Hover Cue */}
                    <div className="absolute inset-0 bg-maroon-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-xl bg-white/95 text-maroon-900 text-xs font-semibold shadow-lg flex items-center gap-1.5 backdrop-blur-xs border border-saffron-500/30">
                        <Eye className="w-3.5 h-3.5 text-maroon-800" />
                        <span>Quick View</span>
                      </span>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-maroon-950/85 text-saffron-300 shadow-xs border border-saffron-500/40 backdrop-blur-xs">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3
                        onClick={() => onSelectProduct && onSelectProduct(product)}
                        className="font-serif text-base sm:text-lg font-bold text-maroon-900 hover:text-saffron-700 transition-colors leading-snug cursor-pointer line-clamp-1"
                        title={product.name}
                      >
                        {product.name}
                      </h3>
                      {product.hindiName && (
                        <p className="text-xs font-semibold text-saffron-800 -mt-0.5">
                          {product.hindiName}
                        </p>
                      )}

                      {/* Pack Size & Price */}
                      <div className="pt-2 border-t border-cream-200/80 space-y-1 text-xs text-charcoal-600">
                        <div className="flex items-center justify-between">
                          <span className="text-charcoal-400">Pack size:</span>
                          <span className="font-medium text-charcoal-700">
                            {product.packSize ? product.packSize : "Contact for pack sizes"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-charcoal-400">Price:</span>
                          <span className="font-semibold text-maroon-900">
                            {product.price ? product.price : "Contact for price"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* View Product Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onSelectProduct && onSelectProduct(product)}
                        className="w-full py-2.5 px-3 rounded-xl bg-cream-100 hover:bg-maroon-900 text-maroon-900 hover:text-cream-50 text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 border border-saffron-500/25 hover:border-maroon-900 cursor-pointer shadow-xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Product</span>
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA Footer */}
        {onViewAll && (
          <div className="mt-14 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onViewAll}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 hover:from-maroon-800 hover:to-maroon-700 text-cream-100 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-card cursor-pointer border border-saffron-500/30"
            >
              <Sparkles className="w-4 h-4 text-saffron-400" />
              <span>Explore Complete 24 Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
};
