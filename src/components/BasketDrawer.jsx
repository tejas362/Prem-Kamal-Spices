import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { useBasket } from "../context/BasketContext";

export const BasketDrawer = () => {
  const { basket, isOpen, closeBasket, removeFromBasket, clearBasket, sendBasketInquiry } = useBasket();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeBasket}
            className="fixed inset-0 bg-maroon-950/60 backdrop-blur-xs z-50"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 shadow-2xl z-50 flex flex-col border-l border-cream-300"
          >
            {/* Header */}
            <div className="p-5 bg-maroon-900 text-cream-100 flex items-center justify-between border-b border-saffron-500/30">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-maroon-800 flex items-center justify-center text-saffron-400 border border-saffron-500/30">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-50 leading-tight">
                    Inquiry Basket
                  </h3>
                  <span className="text-[11px] text-cream-300">
                    {basket.length} {basket.length === 1 ? "item" : "items"} selected
                  </span>
                </div>
              </div>

              <button
                onClick={closeBasket}
                className="w-8 h-8 rounded-full bg-maroon-800 hover:bg-maroon-700 text-cream-200 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close basket"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
              {basket.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cream-200 text-maroon-800 flex items-center justify-center border border-cream-300">
                    <ShoppingBag className="w-8 h-8 opacity-60" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-maroon-900">
                      Your Basket is Empty
                    </h4>
                    <p className="text-xs text-charcoal-600 mt-1 max-w-xs">
                      Explore our products and click <strong>“+ Add to Basket”</strong> to combine multiple spices into a single WhatsApp inquiry.
                    </p>
                  </div>
                </div>
              ) : (
                <AnimatePresence>
                  {basket.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      className="p-3.5 rounded-2xl bg-white border border-cream-300 shadow-soft flex items-center gap-3 group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-cream-100 overflow-hidden shrink-0 border border-cream-200 flex items-center justify-center p-1">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-semibold text-saffron-700 uppercase tracking-wider block">
                          {item.hindiName || item.categoryLabel || "Spice"}
                        </span>
                        <h5 className="font-serif text-sm font-bold text-maroon-900 truncate">
                          {item.name}
                        </h5>
                        <span className="text-[11px] text-charcoal-500 font-mono">
                          {item.weight || "Contact for details"}
                        </span>
                      </div>

                      <button
                        onClick={() => removeFromBasket(item.id)}
                        className="w-8 h-8 rounded-lg text-charcoal-400 hover:text-maroon-800 hover:bg-maroon-50 flex items-center justify-center transition-colors cursor-pointer"
                        title="Remove from basket"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer Summary & WhatsApp Action */}
            {basket.length > 0 && (
              <div className="p-5 bg-white border-t border-cream-300 space-y-3">
                <div className="flex items-center justify-between text-xs text-charcoal-600">
                  <span>Enquiry for {basket.length} items</span>
                  <button
                    onClick={clearBasket}
                    className="text-[11px] text-maroon-800 hover:underline cursor-pointer font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendBasketInquiry}
                  className="w-full py-3.5 px-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-spicegreen-600"
                >
                  <MessageSquare className="w-4 h-4 text-saffron-300" />
                  <span>Enquire All on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <p className="text-[10px] text-charcoal-500 text-center">
                  Direct WhatsApp enquiry with your selected items.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
