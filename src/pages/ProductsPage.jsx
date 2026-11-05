import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Eye, X, MessageSquare, ShoppingBag, Check, Sparkles, Filter } from "lucide-react";
import { products, productCategories } from "../data/products";
import { shopInfo } from "../data/shopInfo";
import { getProductWhatsAppUrl } from "../utils/whatsapp";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { KashmiriDivider, KamalMotif } from "../components/KashmiriMotifs";
import { TiltCard } from "../components/TiltCard";
import { useBasket } from "../context/BasketContext";
import confetti from "canvas-confetti";

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToBasket, removeFromBasket, isInBasket, openBasket } = useBasket();

  // Sync category state with URL search param
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && productCategories.some((c) => c.id === cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter products by category and live search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.hindiName && item.hindiName.toLowerCase().includes(q)) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppEnquiry = (productName) => {
    confetti({
      particleCount: 30,
      spread: 55,
      origin: { y: 0.75 },
      colors: ["#E58A1F", "#5C1D24", "#F4C46A", "#2B6E44"],
    });
  };

  return (
    <div className="py-10 sm:py-16 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-charcoal-500 mb-3">
            <Link to="/" className="hover:text-maroon-800 transition-colors font-medium">
              Home
            </Link>
            <span>/</span>
            <span className="text-maroon-900 font-semibold">Products Catalog</span>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-saffron-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
              <KamalMotif className="w-4 h-4 text-maroon-800" />
              Complete Product Catalog
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
              Spices, Kashmiri Specialties & Provisions
            </h1>

            <KashmiriDivider className="my-3" />

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
              Explore our range of authentic spices, Kashmiri specialties, and pantry essentials. Select any item to view details or enquire directly on WhatsApp.
            </p>
          </div>
        </div>

        {/* Search Field & Category Filters Toolbar */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-saffron-500/25 shadow-card mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input for Product Names */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-saffron-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g. Kashmiri Mirch, Hing, Kehwa)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-cream-50 border border-saffron-500/20 text-charcoal-900 placeholder-charcoal-400 text-xs sm:text-sm focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all shadow-inner"
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
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                      isActive
                        ? "bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-cream-100 border border-saffron-500/40 shadow-sm"
                        : "bg-cream-100 hover:bg-cream-200 text-charcoal-700 border border-saffron-500/15"
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>

          </div>

          {/* Results Summary */}
          <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between text-xs text-charcoal-600">
            <span>
              Showing <strong className="text-maroon-900">{filteredProducts.length}</strong> items in catalog
            </span>
            {(searchQuery || selectedCategory !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryChange("all");
                }}
                className="text-saffron-700 hover:underline font-medium cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 3 on tablet, and 4 on desktop */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => {
                const whatsappUrl = getProductWhatsAppUrl(product.name);
                const inBasket = isInBasket(product.id);

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <TiltCard
                      maxTilt={6}
                      scale={1.015}
                      className="bg-white rounded-2xl overflow-hidden border border-saffron-500/20 shadow-card hover:border-saffron-500/60 hover:shadow-hover transition-all duration-300 flex flex-col h-full group card-sheen"
                    >
                      {/* Supplied Product Image Container */}
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="relative aspect-square bg-cream-50 overflow-hidden cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />

                        {/* Badge */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-maroon-950/85 text-saffron-300 shadow-xs border border-saffron-500/40 backdrop-blur-xs">
                            {product.badge}
                          </span>
                        </div>

                        {/* View Details hover hint */}
                        <div className="absolute inset-0 bg-maroon-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-xl bg-white/95 text-maroon-900 text-xs font-semibold shadow-md flex items-center gap-1.5 backdrop-blur-xs border border-saffron-500/30">
                            <Eye className="w-3.5 h-3.5 text-maroon-800" />
                            <span>Quick View</span>
                          </span>
                        </div>
                      </div>

                      {/* Product Card Body */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          {/* Product Name & Hindi Name */}
                          <div>
                            <h3
                              onClick={() => setSelectedProduct(product)}
                              className="font-serif text-base sm:text-lg font-bold text-maroon-900 hover:text-saffron-700 transition-colors leading-snug cursor-pointer line-clamp-1"
                              title={`${product.name} (${product.hindiName})`}
                            >
                              {product.name}
                            </h3>
                            {product.hindiName && (
                              <p className="text-xs font-semibold text-saffron-800 -mt-0.5">
                                {product.hindiName}
                              </p>
                            )}
                          </div>

                          {/* Short Description */}
                          <p className="text-[11px] sm:text-xs text-charcoal-600 line-clamp-2 leading-relaxed font-normal">
                            {product.shortDescription}
                          </p>

                          {/* Weight and Price Fields */}
                          <div className="pt-2 border-t border-cream-200/80 space-y-1 text-[11px] text-charcoal-600">
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

                        {/* Actions: WhatsApp + Basket Button */}
                        <div className="pt-2 space-y-1.5">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleWhatsAppEnquiry(product.name)}
                            className="w-full py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-white text-[11px] sm:text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-xs border border-spicegreen-600 hover:shadow-sm"
                            aria-label={`Enquire about ${product.name} on WhatsApp`}
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-saffron-300 shrink-0" />
                            <span className="truncate">Enquire on WhatsApp</span>
                          </a>

                          <button
                            onClick={() => {
                              if (inBasket) {
                                removeFromBasket(product.id);
                              } else {
                                addToBasket(product);
                              }
                            }}
                            className={`w-full py-1.5 px-2.5 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
                              inBasket
                                ? "bg-cream-200 text-maroon-900 border-cream-300"
                                : "bg-white hover:bg-cream-100 text-charcoal-700 border-cream-300 hover:text-maroon-900"
                            }`}
                          >
                            {inBasket ? (
                              <>
                                <Check className="w-3 h-3 text-spicegreen-700" />
                                <span>In Basket</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3 h-3 text-charcoal-400" />
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
            </AnimatePresence>
          </motion.div>
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
                  handleCategoryChange("all");
                }}
                className="px-4 py-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-cream-100 text-xs font-semibold transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Larger Product Detail View Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
