import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Phone, ShoppingBag, Check, ZoomIn } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getProductWhatsAppUrl } from "../utils/whatsapp";
import { useBasket } from "../context/BasketContext";
import confetti from "canvas-confetti";

export const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  const { addToBasket, removeFromBasket, isInBasket, openBasket } = useBasket();
  const inBasket = isInBasket(product.id);
  const whatsappUrl = getProductWhatsAppUrl(product.name);

  // Interactive Image Zoom State
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setZoomPos((prev) => ({ ...prev, active: false }));
  };

  const handleWhatsAppEnquiry = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#E58A1F", "#5C1D24", "#F4C46A", "#2B6E44"],
    });
  };

  const handleBasketToggle = () => {
    if (inBasket) {
      removeFromBasket(product.id);
    } else {
      addToBasket(product);
      openBasket();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-maroon-950/70 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-cream-300 shadow-2xl relative"
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cream-100 text-charcoal-700 hover:bg-cream-200 flex items-center justify-center border border-cream-300 shadow-xs cursor-pointer transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-5 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            
            {/* Interactive Zoomable Product Image Container */}
            <div className="space-y-2">
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl overflow-hidden border border-cream-300 bg-cream-50 aspect-square flex items-center justify-center cursor-crosshair group shadow-inner"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={
                    zoomPos.active
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                          transform: "scale(2.2)",
                        }
                      : { transform: "scale(1)" }
                  }
                  className="w-full h-full object-cover object-center transition-transform duration-150 pointer-events-none"
                />

                {/* Badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-maroon-900 text-cream-100 shadow-sm border border-maroon-800">
                    {product.badge || product.categoryLabel}
                  </span>
                </div>

                {/* Zoom Hint */}
                {!zoomPos.active && (
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-1 rounded-md bg-white/90 text-charcoal-700 text-[10px] font-medium shadow-xs border border-cream-200 flex items-center gap-1 opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <ZoomIn className="w-3 h-3 text-maroon-800" />
                    <span>Hover to zoom</span>
                  </div>
                )}
              </div>
              <p className="text-[10px] text-charcoal-500 text-center">
                Original packaging view from Prem Kamal Spices
              </p>
            </div>

            {/* Core Info & Specifications */}
            <div className="space-y-3.5 pr-0 sm:pr-6">
              <div className="flex items-center gap-2 pr-12 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-cream-200 text-maroon-900 border border-cream-300">
                  {product.categoryLabel}
                </span>
                <span className="text-xs text-charcoal-500">
                  Shop No. 53, Dwarka Sec 7
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900 leading-tight">
                  {product.name}
                </h3>
                {product.hindiName && (
                  <p className="text-base font-semibold text-saffron-800 mt-0.5">
                    {product.hindiName}
                  </p>
                )}
                <p className="text-xs font-serif italic text-charcoal-500 mt-0.5">
                  Prem Kamal Spices • “{shopInfo.tagline}”
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                {product.detailDescription || product.shortDescription}
              </p>

              {/* Weight & Price Specifications */}
              <div className="p-3.5 rounded-2xl bg-cream-50 border border-cream-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-charcoal-500">Weight / Packaging:</span>
                  <span className="font-semibold text-charcoal-800">
                    {product.weight ? product.weight : "Contact for details"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-cream-200 pt-1.5">
                  <span className="font-medium text-charcoal-500">Price:</span>
                  <span className="font-bold text-maroon-900 text-sm">
                    {product.price ? product.price : "Contact for details"}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Actions: Enquire WhatsApp + Add to Basket + Call */}
          <div className="mt-6 pt-5 border-t border-cream-200 flex flex-col sm:flex-row gap-3">
            {/* Primary Action: Enquire on WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppEnquiry}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-xs border border-spicegreen-600"
            >
              <MessageSquare className="w-4 h-4 text-saffron-300" />
              <span>Enquire on WhatsApp</span>
            </motion.a>

            {/* Basket Toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBasketToggle}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 border cursor-pointer ${
                inBasket
                  ? "bg-maroon-900 text-cream-100 border-maroon-800"
                  : "bg-cream-100 hover:bg-cream-200 text-maroon-900 border-cream-300"
              }`}
            >
              {inBasket ? (
                <>
                  <Check className="w-4 h-4 text-saffron-400" />
                  <span>In Basket (View)</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-maroon-800" />
                  <span>+ Add to Basket</span>
                </>
              )}
            </motion.button>

            {/* Direct Call Button */}
            <a
              href={`tel:${shopInfo.contact.phone}`}
              className="py-3 px-4 rounded-xl bg-cream-100 hover:bg-cream-200 text-maroon-900 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-cream-300"
            >
              <Phone className="w-4 h-4 text-maroon-800" />
              <span>Call ({shopInfo.contact.phone})</span>
            </a>
          </div>

        </div>

      </motion.div>
    </div>
  );
};
