import React from "react";
import { Sparkles, MapPin, CheckCircle, Flame, Heart, Store } from "lucide-react";
import { KamalMotif, ChinarLeaf } from "./KashmiriMotifs";

export const TickerBanner = () => {
  const items = [
    { text: "Kashmiri Mirch & Stone-Ground Powders", icon: <Flame className="w-3.5 h-3.5 text-saffron-400" /> },
    { text: "Shop No. 53, Palam Extension, Dwarka Sector 7", icon: <MapPin className="w-3.5 h-3.5 text-saffron-400" /> },
    { text: "Authentic Kehwa Tea & Mountain Walnuts", icon: <ChinarLeaf className="w-3.5 h-3.5 text-saffron-400" /> },
    { text: "FSSAI Registered: 23323011003046", icon: <CheckCircle className="w-3.5 h-3.5 text-saffron-400" /> },
    { text: "Kangri & Tumbaknaari Heritage Displays", icon: <KamalMotif className="w-3.5 h-3.5 text-saffron-400" /> },
    { text: "WhatsApp Orders & Local Counter Pickup", icon: <Store className="w-3.5 h-3.5 text-saffron-400" /> },
    { text: "“Let’s Make Our Taste Enhance”", icon: <Heart className="w-3.5 h-3.5 text-saffron-400" /> },
  ];

  return (
    <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 py-3 overflow-hidden border-y-2 border-saffron-500/40 relative select-none shadow-md">
      <div className="flex w-max animate-marquee space-x-10">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 shrink-0">
            <span className="p-1 rounded-full bg-maroon-800/80 border border-saffron-500/30">
              {item.icon}
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-cream-100 uppercase font-sans">
              {item.text}
            </span>
            <span className="text-saffron-400 text-base font-bold px-2">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
