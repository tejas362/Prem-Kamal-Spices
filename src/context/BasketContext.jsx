import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { shopInfo } from "../data/shopInfo";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    try {
      const saved = localStorage.getItem("pks_basket");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("pks_basket", JSON.stringify(basket));
    } catch {
      // ignore storage errors
    }
  }, [basket]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev;
      }
      return [...prev, product];
    });

    // Gentle saffron-colored confetti burst
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.85, x: 0.9 },
      colors: ["#E58A1F", "#5C1D24", "#F4C46A", "#2B6E44"],
    });
  };

  const removeFromBasket = (productId) => {
    setBasket((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const isInBasket = (productId) => {
    return basket.some((item) => item.id === productId);
  };

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);
  const toggleBasket = () => setIsOpen((prev) => !prev);

  const sendBasketInquiry = () => {
    if (basket.length === 0) return;

    const itemList = basket.map((item, idx) => `${idx + 1}. ${item.name}`).join("\n");
    const message = `Hello Prem Kamal Spices,\n\nI would like to enquire about the following items from your catalog:\n${itemList}\n\nPlease share availability and details.`;
    
    const url = `https://wa.me/${shopInfo.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E58A1F", "#5C1D24", "#2B6E44", "#F4C46A"],
    });

    window.open(url, "_blank");
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        clearBasket,
        isInBasket,
        isOpen,
        openBasket,
        closeBasket,
        toggleBasket,
        sendBasketInquiry,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
