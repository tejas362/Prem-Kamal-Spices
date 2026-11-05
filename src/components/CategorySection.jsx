import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Tag, Sparkles } from "lucide-react";
import { shopCategories } from "../data/categories";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";
import { TiltCard } from "./TiltCard";

export const CategorySection = ({ onSelectCategory }) => {
  const handleExplore = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <section id="categories-section" className="py-16 sm:py-24 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 border-b border-cream-300 relative overflow-hidden">
      
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-maroon-700/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>Explore by Department</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight"
          >
            Shop by Category
          </motion.h2>

          <KashmiriDivider className="my-3.5" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal"
          >
            Discover our authentic ranges: pure Kashmiri spices, handpicked mountain dry fruits, traditional grains, and cultural heritage display keepsakes.
          </motion.p>
        </div>

        {/* Responsive 6-Card Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {shopCategories.map((cat, index) => (
            <motion.div
              key={cat.id || index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <TiltCard
                maxTilt={6}
                scale={1.02}
                className="bg-gradient-to-b from-white via-white to-cream-50/80 rounded-2xl overflow-hidden border border-saffron-500/20 shadow-card hover:border-saffron-500/60 hover:shadow-hover transition-all duration-300 flex flex-col h-full group card-sheen"
              >
                {/* Image Container with Golden Ratio Aspect */}
                <div
                  onClick={() => handleExplore(cat)}
                  className="relative aspect-[16/10] bg-cream-200 overflow-hidden cursor-pointer"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-600 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle vignette gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-maroon-950/15 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                  {/* Circular Gold Numbering Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="w-8 h-8 rounded-full bg-maroon-950/90 text-saffron-300 text-xs font-bold flex items-center justify-center shadow-md border border-saffron-500/40 backdrop-blur-xs font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Hindi Category Label Pill */}
                  {cat.hindiTitle && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full bg-maroon-950/90 backdrop-blur-xs text-saffron-300 text-xs font-semibold border border-saffron-500/40 shadow-xs">
                        {cat.hindiTitle}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3
                      onClick={() => handleExplore(cat)}
                      className="font-serif text-2xl font-bold text-maroon-900 group-hover:text-maroon-700 transition-colors leading-snug cursor-pointer flex items-center justify-between"
                    >
                      <span>{cat.title}</span>
                      <ArrowRight className="w-4 h-4 text-saffron-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                      {cat.description}
                    </p>

                    {/* Products List in Stock */}
                    {cat.productsList && cat.productsList.length > 0 && (
                      <div className="pt-2 border-t border-cream-200/80">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-maroon-900 uppercase tracking-wider mb-2">
                          <Tag className="w-3 h-3 text-saffron-600" />
                          <span>Included In Stock:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.productsList.map((prodName, pIdx) => (
                            <span
                              key={pIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] bg-cream-100/90 text-charcoal-700 border border-saffron-500/15 font-medium group-hover:border-saffron-500/30 transition-colors"
                            >
                              {prodName}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Explore Button */}
                  <div className="pt-3 border-t border-cream-200">
                    <button
                      onClick={() => handleExplore(cat)}
                      className="w-full py-2.5 px-4 rounded-xl bg-cream-100 hover:bg-gradient-to-r hover:from-maroon-900 hover:to-maroon-800 text-maroon-900 hover:text-cream-50 text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 border border-saffron-500/25 hover:border-maroon-900 cursor-pointer shadow-xs"
                    >
                      <span>Explore {cat.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
