import React from "react";
import { motion } from "framer-motion";
import { Eye, MessageSquare, ShoppingBag, Check } from "lucide-react";
import { products } from "../data/products";
import { getProductWhatsAppUrl } from "../utils/whatsapp";
import { ChinarLeaf, PaisleyMotif, KashmiriDivider } from "./KashmiriMotifs";
import { TiltCard } from "./TiltCard";
import { useBasket } from "../context/BasketContext";
import confetti from "canvas-confetti";

export const KashmiriHeritageSection = ({ onSelectProduct }) => {
  const { addToBasket, removeFromBasket, isInBasket } = useBasket();

  // Filter for genuine Kashmiri specialties and heritage display items
  const kashmiriItems = products.filter(
    (p) => p.category === "kashmiri" || p.category === "heritage"
  );

  const handleWhatsAppEnquiry = (name) => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#E58A1F", "#5C1D24", "#F4C46A", "#2B6E44"],
    });
  };

  return (
    <section id="kashmiri-section" className="py-16 sm:py-20 bg-cream-50 relative overflow-hidden border-b border-cream-200">
      
      {/* Decorative Kashmiri watermarks */}
      <motion.div
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 opacity-10 pointer-events-none"
      >
        <ChinarLeaf className="w-64 h-64 text-saffron-600" />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-10 opacity-10 pointer-events-none"
      >
        <PaisleyMotif className="w-56 h-56 text-maroon-800" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-semibold uppercase tracking-widest border border-saffron-300/60 mb-3 shadow-xs">
            <ChinarLeaf className="w-3.5 h-3.5 text-saffron-600" />
            Specialty of the Valley
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            Kashmiri Specialties & Heritage
          </h2>

          <KashmiriDivider className="my-3" />

          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mt-2 font-normal">
            Authentic Kashmiri specialties and traditional heritage display items featured at Prem Kamal Spices in Dwarka Sector 7.
          </p>
        </div>

        {/* 3-Column Responsive Grid with TiltCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {kashmiriItems.map((item, idx) => {
            const whatsappUrl = getProductWhatsAppUrl(item.name);
            const inBasket = isInBasket(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <TiltCard
                  maxTilt={7}
                  scale={1.02}
                  className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-card transition-shadow flex flex-col h-full group"
                >
                  {/* Image */}
                  <div
                    onClick={() => onSelectProduct(item)}
                    className="relative aspect-square overflow-hidden bg-cream-100 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-maroon-900/95 text-cream-100 shadow-sm border border-saffron-500/40">
                        {item.badge}
                      </span>
                    </div>

                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-maroon-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-xl bg-white/95 text-maroon-900 text-xs font-semibold shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                        <Eye className="w-3.5 h-3.5 text-maroon-800" />
                        <span>Quick View</span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div>
                        <h3
                          onClick={() => onSelectProduct(item)}
                          className="font-serif text-lg sm:text-xl font-bold text-maroon-900 hover:text-maroon-700 transition-colors leading-snug cursor-pointer"
                        >
                          {item.name}
                        </h3>
                        {item.hindiName && (
                          <p className="text-xs font-semibold text-saffron-800 -mt-0.5">
                            {item.hindiName}
                          </p>
                        )}
                      </div>

                      <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                        {item.shortDescription}
                      </p>

                      <div className="pt-2 border-t border-cream-200/80 flex items-center justify-between text-xs text-charcoal-600">
                        <span className="text-charcoal-400">Price & Weight:</span>
                        <span className="font-semibold text-maroon-900">
                          {item.price ? `${item.price}` : "Contact for details"}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 border-t border-cream-200 space-y-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleWhatsAppEnquiry(item.name)}
                        className="w-full py-2.5 px-3 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-xs border border-spicegreen-600"
                        aria-label={`Enquire about ${item.name} on WhatsApp`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-saffron-300" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          if (inBasket) {
                            removeFromBasket(item.id);
                          } else {
                            addToBasket(item);
                          }
                        }}
                        className={`w-full py-1.5 px-3 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border cursor-pointer ${
                          inBasket
                            ? "bg-cream-200 text-maroon-900 border-cream-300"
                            : "bg-cream-100 hover:bg-cream-200 text-charcoal-700 hover:text-maroon-900 border-cream-300"
                        }`}
                      >
                        {inBasket ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-spicegreen-700" />
                            <span>In Basket</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5 text-charcoal-400" />
                            <span>+ Add to Basket</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
