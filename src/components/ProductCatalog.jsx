import React, { useState, useMemo } from "react";
import { Search, Eye, X, MessageSquare, Tag, Scale } from "lucide-react";
import { products, productCategories } from "../data/products";
import { shopInfo } from "../data/shopInfo";
import { getProductWhatsAppUrl } from "../utils/whatsapp";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";

export const ProductCatalog = ({ onViewDetails }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products by category and live search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-14 sm:py-20 bg-cream-100 relative border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-saffron-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <KamalMotif className="w-4 h-4 text-maroon-800" />
            Official Product Catalog
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            Our Spices & Specialties
          </h2>

          <KashmiriDivider className="my-3" />

          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
            Authentic spices, traditional Kashmiri specialties, and pantry essentials from Prem Kamal Spices in Dwarka Sector 7.
          </p>
        </div>

        {/* Search Field & Category Filters */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-cream-300 shadow-soft mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input for Product Names */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g. Kashmiri Mirch, Hing, Kehwa)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-800 placeholder-charcoal-400 text-xs sm:text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 transition-all"
                aria-label="Search products by name"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills - Wrapped, No Horizontal Scroll */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {productCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-maroon-900 text-cream-100 shadow-xs"
                        : "bg-cream-100 hover:bg-cream-200 text-charcoal-700 border border-cream-300"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Results count & clear filter */}
          <div className="mt-3 pt-3 border-t border-cream-200 flex items-center justify-between text-xs text-charcoal-600">
            <span>
              Showing <strong className="text-maroon-900">{filteredProducts.length}</strong> items in catalog
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-saffron-700 hover:underline font-medium cursor-pointer"
              >
                Clear search query
              </button>
            )}
          </div>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 3 on tablet, and 4 on desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
            {filteredProducts.map((product) => {
              const whatsappUrl = getProductWhatsAppUrl(product.name);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cream-300 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col group"
                >
                  {/* Supplied Product Image Container */}
                  <div
                    onClick={() => onViewDetails(product)}
                    className="relative aspect-square bg-cream-50 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/95 text-maroon-900 shadow-xs border border-cream-200 backdrop-blur-xs">
                        {product.badge}
                      </span>
                    </div>

                    {/* View Details hover hint */}
                    <div className="absolute inset-0 bg-maroon-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-2.5 py-1 rounded-lg bg-white/95 text-maroon-900 text-xs font-semibold shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-maroon-800" />
                        <span className="hidden sm:inline">View Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Card Body */}
                  <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      {/* Product Name */}
                      <h3
                        onClick={() => onViewDetails(product)}
                        className="font-serif text-base sm:text-lg font-bold text-maroon-900 hover:text-maroon-700 transition-colors leading-snug cursor-pointer line-clamp-1"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-[11px] sm:text-xs text-charcoal-600 line-clamp-2 leading-relaxed font-normal">
                        {product.shortDescription}
                      </p>

                      {/* Weight and Price Fields (Shows "Contact for details" if not available) */}
                      <div className="pt-1.5 border-t border-cream-200/80 space-y-1 text-[11px] text-charcoal-600">
                        <div className="flex items-center justify-between">
                          <span className="text-charcoal-400">Weight:</span>
                          <span className="font-medium text-charcoal-700">
                            {product.weight ? product.weight : "Contact for details"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-charcoal-400">Price:</span>
                          <span className="font-semibold text-maroon-900">
                            {product.price ? product.price : "Contact for details"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action: Enquire on WhatsApp Button */}
                    <div className="pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white text-[11px] sm:text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-xs border border-spicegreen-600 hover:shadow-sm"
                        aria-label={`Enquire about ${product.name} on WhatsApp`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-saffron-300 shrink-0" />
                        <span className="truncate">Enquire on WhatsApp</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-cream-300 p-8">
            <KamalMotif className="w-12 h-12 text-charcoal-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-maroon-900">No matching products found</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1 max-w-md mx-auto">
              Please check your search spelling or reset your category filter to view all products.
            </p>
            <div className="mt-4">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-cream-100 text-xs font-semibold transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
