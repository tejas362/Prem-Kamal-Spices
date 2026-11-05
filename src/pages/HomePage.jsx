import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import { TickerBanner } from "../components/TickerBanner";
import { CategorySection } from "../components/CategorySection";
import { FeaturedProductsSection } from "../components/FeaturedProductsSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { BrandIntroSection } from "../components/BrandIntroSection";
import { OrderCTASection } from "../components/OrderCTASection";
import { ProductDetailModal } from "../components/ProductDetailModal";

export const HomePage = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleExploreCategory = (category) => {
    if (category.filterKey && category.filterKey !== "all") {
      navigate(`/products?category=${category.filterKey}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <div className="space-y-0">
      {/* Section 1: Hero Banner */}
      <Hero onExploreCatalog={() => navigate("/products")} />

      {/* Animated Infinite Ticker Banner */}
      <TickerBanner />

      {/* Section 2: Shop by Category */}
      <CategorySection onSelectCategory={handleExploreCategory} />

      {/* Section 3: Featured Products (Initial Launch 8 Items) */}
      <FeaturedProductsSection
        onSelectProduct={(item) => setSelectedProduct(item)}
        onViewAll={() => navigate("/products")}
      />

      {/* Section 4: Why Choose Prem Kamal Spices? */}
      <WhyChooseUsSection />

      {/* Section 5: Brand Introduction */}
      <BrandIntroSection />

      {/* Section 6: Order CTA */}
      <OrderCTASection />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
