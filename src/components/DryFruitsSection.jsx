import React from "react";
import { Sparkles, Check, ShoppingBag, Eye, Phone, MessageSquare } from "lucide-react";
import { products } from "../data/products";
import { shopInfo } from "../data/shopInfo";
import { getProductWhatsAppUrl } from "../utils/whatsapp";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";

export const DryFruitsSection = ({ onSelectProduct, onAddToInquiry }) => {
  const dryFruits = products.filter((p) => p.category === "dryfruits");

  return (
    <section id="dryfruits-section" className="py-16 sm:py-20 bg-cream-200/60 border-b border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 text-maroon-900 text-xs font-semibold uppercase tracking-widest border border-cream-300 mb-3 shadow-xs">
            <KamalMotif className="w-4 h-4 text-maroon-800" />
            Handpicked Mountain Harvest
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900">
            Selected Dry Fruits & Nuts
          </h2>

          <KashmiriDivider className="my-3" />

          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed font-normal">
            Natural, unpolished dry fruits sourced from trusted growers. Rich in natural oils, clean crunch, and natural sweetness without chemical sulfur baths or artificial waxes.
          </p>
        </div>

        {/* 4-Column Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dryFruits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] bg-cream-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/95 text-maroon-900 shadow-xs border border-cream-200">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2.5 text-white drop-shadow-md text-xs font-serif italic">
                  {item.origin}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-saffron-700 tracking-wider">
                    {item.hindiName}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-maroon-900 mt-0.5 group-hover:text-maroon-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3">
                    <span className="text-[10px] font-semibold text-charcoal-500 block mb-1">
                      Packs Available:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.packSizes.map((size) => (
                        <span
                          key={size}
                          className="text-[10px] bg-cream-100 text-charcoal-700 px-1.5 py-0.5 rounded border border-cream-200"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-200 space-y-2">
                  <a
                    href={getProductWhatsAppUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-xs border border-spicegreen-600 hover:shadow-sm"
                    aria-label={`Order ${item.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-saffron-300" />
                    <span>Order on WhatsApp</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="flex-1 py-1.5 px-2.5 rounded-lg bg-cream-100 hover:bg-cream-200 text-charcoal-800 text-xs font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer border border-cream-300"
                    >
                      <Eye className="w-3.5 h-3.5 text-maroon-800" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onAddToInquiry(item)}
                      className="py-1.5 px-2.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-maroon-900 text-xs font-medium transition-colors cursor-pointer border border-cream-300"
                    >
                      + List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Festive & Daily Provisions Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-cream-300 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="space-y-1">
              <span className="text-xs font-bold text-saffron-700 uppercase tracking-wider">
                Store Service
              </span>
              <h4 className="font-serif text-xl font-bold text-maroon-900">
                Custom Packing & Gift Baskets
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Tailored dry fruit platters, brass-finish boxes, and ceremonial gift packs prepared fresh on order for festivals, weddings, and family occasions.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-spicegreen-700 uppercase tracking-wider">
                Counter Weighing
              </span>
              <h4 className="font-serif text-xl font-bold text-maroon-900">
                Any Quantity You Need
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Whether you need 50 grams of rare saffron, 250 grams of Mamra badam, or bulk quantities for catering, we weigh and seal hygienically right before you.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 justify-center">
              <a
                href={`tel:${shopInfo.contact.phone}`}
                className="w-full py-2.5 px-4 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-cream-100 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-saffron-400" />
                <span>Call Store: {shopInfo.contact.phone}</span>
              </a>
              <a
                href={`https://wa.me/${shopInfo.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Prem Kamal Spices, I'm inquiring about your dry fruit packaging options."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-cream-100 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
