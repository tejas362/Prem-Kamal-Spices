import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Utensils, Coffee, Flame, Heart, ShoppingBag, MessageSquare, ArrowRight } from "lucide-react";
import { products } from "../data/products";
import { shopInfo } from "../data/shopInfo";
import { useBasket } from "../context/BasketContext";
import confetti from "canvas-confetti";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";

export const SpicePairingFinder = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState("rogan-josh");
  const { addToBasket, openBasket } = useBasket();

  const pairings = [
    {
      id: "rogan-josh",
      name: "Kashmiri Wazwan & Curries",
      icon: <Utensils className="w-4 h-4" />,
      tagline: "The rich crimson aroma of traditional Kashmiri cuisine",
      productIds: [
        "kashmiri-mirch-powder",
        "masala-tikki",
        "fennel-powder",
        "saunth-powder",
        "kala-jeera",
        "hing",
      ],
      description:
        "The soul of authentic Kashmiri curries relies on deep vibrant color without blistering heat, balanced with aromatic fennel, dry ginger, and royal black cumin.",
    },
    {
      id: "kehwa",
      name: "Traditional Kehwa & Teas",
      icon: <Coffee className="w-4 h-4" />,
      tagline: "Fragrant valley warmth in every golden sip",
      productIds: [
        "kashmiri-kehwa-chai",
        "elaichi",
        "dalchini-powder",
        "cinnamon",
        "badam",
      ],
      description:
        "Warm, restorative traditional Kashmiri green tea brewed with whole green cardamom, sweet cinnamon, and garnished with crisp slivered almonds.",
    },
    {
      id: "rajma-feast",
      name: "Comfort Rajma & Dal",
      icon: <Flame className="w-4 h-4" />,
      tagline: "Wholesome grains & digestive aromatics",
      productIds: [
        "rajma",
        "barmuth",
        "hing",
        "haldi-powder",
        "kashmiri-mirch-powder",
      ],
      description:
        "Tender Kashmiri red beans and traditional valley pulses paired with pure compounding hing and vibrant golden haldi for wholesome family meals.",
    },
    {
      id: "wellness",
      name: "Vitality & Mountain Dry Fruits",
      icon: <Heart className="w-4 h-4" />,
      tagline: "Traditional strength & winter nourishment",
      productIds: [
        "shilajit",
        "kashmiri-akhrot",
        "badam",
        "anjeer",
        "saunth-powder",
      ],
      description:
        "Pure Himalayan shilajit and natural unbleached mountain dry fruits (walnuts, almonds, and figs) known across generations for stamina and wellness.",
    },
    {
      id: "heritage",
      name: "Valley Heritage & Living",
      icon: <Sparkles className="w-4 h-4" />,
      tagline: "Handcrafted cultural keepsakes & sun-dried veg",
      productIds: [
        "kashmiri-kangri",
        "tumbaknaari",
        "dried-lauki",
        "sukha-baigan",
      ],
      description:
        "Traditional wicker-woven fire pots, musical earthenware goblet drums, and sun-dried vegetables (Al Hachi & Wangan Hachi) cherished in Kashmiri households.",
    },
  ];

  const currentPairing = pairings.find((p) => p.id === activeTab) || pairings[0];
  const matchedProducts = currentPairing.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const handleEnquireSet = () => {
    const names = matchedProducts.map((p) => p.name).join(", ");
    const text = `Hello Prem Kamal Spices,\n\nI am interested in the "${currentPairing.name}" spice combination:\n- ${names}\n\nPlease share availability and details.`;
    const url = `https://wa.me/${shopInfo.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#E58A1F", "#5C1D24", "#F4C46A", "#2B6E44"],
    });

    window.open(url, "_blank");
  };

  const handleAddAllToBasket = () => {
    matchedProducts.forEach((p) => addToBasket(p));
    openBasket();
  };

  return (
    <section className="py-16 sm:py-20 bg-cream-200/50 border-b border-cream-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-100 text-maroon-900 text-xs font-semibold uppercase tracking-widest border border-cream-300 mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-saffron-600 animate-spin" style={{ animationDuration: "12s" }} />
            Interactive Flavour Matcher
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900 tracking-tight">
            What Are You Preparing Today?
          </h2>

          <KashmiriDivider className="my-3" />

          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
            Click a culinary tradition below to discover the authentic spices and ingredients that bring it to life.
          </p>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {pairings.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-maroon-900 text-cream-50 shadow-md ring-2 ring-saffron-500/50"
                    : "bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-300 hover:text-maroon-900"
                }`}
              >
                <span className={isActive ? "text-saffron-400" : "text-charcoal-500"}>
                  {tab.icon}
                </span>
                <span>{tab.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Pairing Display Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft"
          >
            {/* Pairing Info Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-cream-200">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-saffron-700 uppercase tracking-wider block">
                  Recommended Pairing
                </span>
                <h3 className="font-serif text-2xl font-bold text-maroon-900">
                  {currentPairing.name}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl leading-relaxed">
                  {currentPairing.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  onClick={handleAddAllToBasket}
                  className="px-4 py-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-maroon-900 text-xs font-semibold flex items-center gap-2 border border-cream-300 transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-maroon-800" />
                  <span>Add Set to Basket</span>
                </button>

                <button
                  onClick={handleEnquireSet}
                  className="px-4 py-2.5 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer border border-spicegreen-600"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-saffron-300" />
                  <span>Enquire Set on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {matchedProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.25 }}
                  whileHover={{ y: -4 }}
                  onClick={() => onSelectProduct && onSelectProduct(product)}
                  className="group cursor-pointer p-3 rounded-2xl bg-cream-50 hover:bg-white border border-cream-300 hover:border-maroon-700 hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="aspect-square rounded-xl bg-white p-2.5 border border-cream-200 overflow-hidden flex items-center justify-center mb-2.5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-saffron-700 uppercase tracking-wider block">
                      {product.hindiName || product.categoryLabel || "Spice"}
                    </span>
                    <h4 className="font-serif text-xs font-bold text-maroon-900 line-clamp-1 group-hover:text-maroon-800 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[10px] text-charcoal-500 line-clamp-1">
                      {product.shortDescription || product.shortDesc}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-cream-200 flex items-center justify-between text-[11px] text-maroon-800 font-semibold group-hover:text-saffron-700">
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
