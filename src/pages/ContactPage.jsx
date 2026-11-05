import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ExternalLink,
  Copy,
  Check,
  Navigation,
  Send,
  Sparkles,
  Store,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Car,
  Train,
  CreditCard,
  Flame,
} from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { KashmiriDivider, KamalMotif } from "../components/KashmiriMotifs";
import { TiltCard } from "../components/TiltCard";
import confetti from "canvas-confetti";

export const ContactPage = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedTopic: "General Enquiry",
    selectedItems: [],
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Quick selectable spice interest chips
  const spicePicks = [
    "Kashmiri Mirch Powder",
    "Special Kehwa Blend",
    "Kagzi Mountain Walnuts",
    "Pure Kashmiri Hing",
    "Al Hachi (Dried Lauki)",
    "Fennel / Saunf Powder",
    "Dry Fruit Gift Pack",
    "Store Counter Pickup",
  ];

  // Dynamic store open/closed status calculation
  const storeStatus = useMemo(() => {
    try {
      const now = new Date();
      // Get India Standard Time (UTC+5:30)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);
      const day = istTime.getDay(); // 0 is Sunday
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinute = hours * 60 + minutes;

      const isSunday = day === 0;
      const openMinute = 10 * 60; // 10:00 AM
      const closeMinute = isSunday ? 20 * 60 : 21 * 60; // 8:00 PM Sun, 9:00 PM Mon-Sat

      if (currentMinute >= openMinute && currentMinute < closeMinute) {
        return {
          isOpen: true,
          label: "Open Now for Walk-ins",
          subtext: `Closes at ${isSunday ? "8:00 PM" : "9:00 PM"} today`,
          badgeClass: "bg-spicegreen-700 text-cream-50 border-spicegreen-600",
        };
      } else {
        return {
          isOpen: false,
          label: "Currently Closed",
          subtext: "Opens at 10:00 AM today / tomorrow",
          badgeClass: "bg-maroon-800 text-cream-200 border-maroon-700",
        };
      }
    } catch {
      return {
        isOpen: true,
        label: "Open 7 Days",
        subtext: "10:00 AM – 9:00 PM",
        badgeClass: "bg-spicegreen-700 text-cream-50 border-spicegreen-600",
      };
    }
  }, []);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    confetti({
      particleCount: 22,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#E07A18", "#731627", "#F59E0B"],
    });
    setTimeout(() => setCopiedField(null), 2200);
  };

  const toggleSpicePick = (item) => {
    setFormData((prev) => {
      const exists = prev.selectedItems.includes(item);
      const updated = exists
        ? prev.selectedItems.filter((i) => i !== item)
        : [...prev.selectedItems, item];
      return { ...prev, selectedItems: updated };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && !formData.phone) return;

    const itemsSummary =
      formData.selectedItems.length > 0
        ? `\nInterested In: ${formData.selectedItems.join(", ")}`
        : "";

    const userMessage = formData.message ? `\nDetails: ${formData.message}` : "";

    const fullText = `Hello Prem Kamal Spices,\nName: ${formData.name || "Customer"}\nPhone: ${
      formData.phone || "Not provided"
    }\nTopic: ${formData.selectedTopic}${itemsSummary}${userMessage}`;

    const waUrl = `https://wa.me/${shopInfo.contact.whatsapp}?text=${encodeURIComponent(fullText)}`;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#E07A18", "#731627", "#265735", "#F59E0B"],
    });

    window.open(waUrl, "_blank");
    setFormSent(true);
  };

  const faqs = [
    {
      q: "Can I inspect the aroma and quality before buying?",
      a: "Yes! At our Dwarka Sector 7 store, you are welcome to inspect genuine spice aromas, look at unbleached mountain walnuts, and choose from our fresh stone-ground spice powders in person.",
    },
    {
      q: "Can I pre-order on WhatsApp for counter pickup?",
      a: "Absolutely. Send your list of items on WhatsApp to 8700628987. Proprietor Rajdeep Jain will pack and weigh your order so it's ready for immediate pickup when you arrive.",
    },
    {
      q: "What payment methods are accepted at the shop?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm), Cash, and direct bank transfers for your convenience.",
    },
    {
      q: "Where exactly is Shop No. 53 in Palam Extension?",
      a: "We are located at Shop No. 53, Palam Extension, Dwarka Sector 7, New Delhi-110077. Landmark: Palam Extension market area with easy access from Sector 7 and Ramphal Chowk.",
    },
  ];

  return (
    <div className="bg-cream-100 min-h-screen relative overflow-hidden pb-16">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 left-0 w-[450px] h-[450px] bg-maroon-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 sm:pt-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-charcoal-500 mb-6">
          <Link to="/" className="hover:text-maroon-800 transition-colors font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-maroon-900 font-semibold">Contact & Store Location</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200/90 text-maroon-900 text-xs font-semibold uppercase tracking-widest border border-saffron-500/30 mb-3.5 shadow-xs"
          >
            <KamalMotif className="w-3.5 h-3.5 text-saffron-600 animate-pulse" />
            <span>Store Visit & Direct Orders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight"
          >
            Connect With Prem Kamal Spices
          </motion.h1>

          <KashmiriDivider className="my-3.5" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Speak directly with proprietor <strong>Rajdeep Jain</strong>, visit our physical store in Dwarka Sector 7, or send an enquiry for fresh spices and mountain dry fruits.
          </motion.p>
        </div>

        {/* Top 3 High-Priority Interactive Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          
          {/* 1. WhatsApp Fast Connect */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-saffron-500/20 shadow-card hover:border-spicegreen-600 hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-spicegreen-100 text-spicegreen-800 flex items-center justify-center border border-spicegreen-200 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-spicegreen-50 text-spicegreen-800 border border-spicegreen-200">
                  Instant Reply
                </span>
              </div>

              <div>
                <h2 className="font-serif text-lg font-bold text-maroon-900">
                  WhatsApp Direct Chat
                </h2>
                <p className="text-xs text-charcoal-600 mt-1">
                  Enquire about spice stock, custom pack sizes, or reserve for counter pickup.
                </p>
              </div>

              <div className="pt-1">
                <span className="font-mono text-sm font-bold text-charcoal-900 block">
                  +91 {shopInfo.contact.phone}
                </span>
                <span className="text-[11px] text-charcoal-500">
                  Proprietor: Rajdeep Jain
                </span>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-cream-200">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-600 text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-spicegreen-600/50"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* 2. Direct Counter Phone Hotline */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-saffron-500/20 shadow-card hover:border-saffron-500 hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-saffron-100 text-saffron-800 flex items-center justify-center border border-saffron-200 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-saffron-50 text-saffron-900 border border-saffron-200">
                  Voice Call
                </span>
              </div>

              <div>
                <h2 className="font-serif text-lg font-bold text-maroon-900">
                  Shop Counter Call
                </h2>
                <p className="text-xs text-charcoal-600 mt-1">
                  Call our Dwarka store directly during business hours for quick verification.
                </p>
              </div>

              <div className="pt-1">
                <span className="font-mono text-sm font-bold text-charcoal-900 block">
                  {shopInfo.contact.phone}
                </span>
                <span className="text-[11px] text-charcoal-500">
                  Available Mon–Sun 10 AM – 9 PM
                </span>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-cream-200 flex items-center gap-2">
              <a
                href={`tel:${shopInfo.contact.phone}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-maroon-900 hover:bg-maroon-800 text-cream-100 font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer border border-saffron-500/30"
              >
                <Phone className="w-3.5 h-3.5 text-saffron-400" />
                <span>Call Counter</span>
              </a>

              <button
                onClick={() => copyToClipboard(shopInfo.contact.phone, "phone")}
                className="p-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal-700 border border-cream-300 transition-colors cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-spicegreen-700" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* 3. Physical Store & Directions */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-saffron-500/20 shadow-card hover:border-maroon-700 hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-maroon-100 text-maroon-900 flex items-center justify-center border border-maroon-200 group-hover:scale-105 transition-transform">
                  <Store className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-maroon-50 text-maroon-900 border border-maroon-200">
                  Walk-In Store
                </span>
              </div>

              <div>
                <h2 className="font-serif text-lg font-bold text-maroon-900">
                  Dwarka Sector 7 Store
                </h2>
                <p className="text-xs text-charcoal-600 mt-1 line-clamp-2">
                  Shop No. 53, Palam Extension, Dwarka Sector 7, New Delhi-110077
                </p>
              </div>

              <div className="pt-1 flex items-center gap-1.5 text-xs text-charcoal-700">
                <ShieldCheck className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
                <span>FSSAI Lic: <strong className="font-mono text-maroon-900">{shopInfo.fssaiLicense}</strong></span>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-cream-200 flex items-center gap-2">
              <a
                href={shopInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-maroon-900 hover:bg-maroon-800 text-cream-100 font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer border border-saffron-500/30"
              >
                <Navigation className="w-3.5 h-3.5 text-saffron-400" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-saffron-300" />
              </a>

              <button
                onClick={() => copyToClipboard(shopInfo.address.full, "address")}
                className="p-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal-700 border border-cream-300 transition-colors cursor-pointer"
                title="Copy full address"
                aria-label="Copy full address"
              >
                {copiedField === "address" ? (
                  <Check className="w-4 h-4 text-spicegreen-700" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

        </div>

        {/* Core Showcase: Asymmetrical Layout (Store Timings & Credentials + Interactive Enquiry Builder) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Store Hours & Visiting Experience Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Card with 3D Tilt */}
            <TiltCard
              maxTilt={4}
              scale={1.01}
              className="bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 rounded-3xl p-6 sm:p-7 border-2 border-saffron-500/40 shadow-card relative overflow-hidden group card-sheen"
            >
              {/* Background ambient halo */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-saffron-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                
                {/* Header & Live Status */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-maroon-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-maroon-800 flex items-center justify-center text-saffron-400 border border-saffron-500/30">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-cream-50 leading-tight">
                        Store Operating Hours
                      </h3>
                      <p className="text-[11px] text-cream-300">
                        Dwarka Sector 7 Counter
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${storeStatus.badgeClass} shadow-xs`}
                  >
                    <span className="w-2 h-2 rounded-full bg-saffron-300 animate-pulse"></span>
                    <span>{storeStatus.label}</span>
                  </span>
                </div>

                {/* Schedule Items */}
                <div className="space-y-2.5 text-xs">
                  {shopInfo.openingHours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-maroon-900/80 border border-maroon-800 flex items-center justify-between gap-3 text-cream-200"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" />
                        <span className="font-medium">{schedule.days}</span>
                      </div>
                      <span className="font-mono font-bold text-saffron-300">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-cream-300/90 leading-relaxed italic">
                  *Open all 7 days of the week for walk-in shopping and pre-packed WhatsApp counter pickups.
                </p>

                {/* Store Amenities & Convenience */}
                <div className="pt-4 border-t border-maroon-800/80 space-y-2 text-xs text-cream-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-400 block mb-2">
                    Visiting Highlights
                  </span>

                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                    <span>Aroma inspection & unadulterated spice powders</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CreditCard className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                    <span>UPI, Google Pay, PhonePe, Paytm & Cash accepted</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Car className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                    <span>Roadside parking available at Palam Extension</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Train className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                    <span>Nearest Metro: Dwarka Sector 9 / Dashrathpuri / Palam</span>
                  </div>
                </div>

                {/* Email Direct Link */}
                <div className="pt-3 border-t border-maroon-800/80 flex items-center justify-between text-xs text-cream-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-saffron-400" />
                    <span className="truncate max-w-[200px]">{shopInfo.contact.email}</span>
                  </div>
                  <a
                    href={`mailto:${shopInfo.contact.email}`}
                    className="text-saffron-400 hover:underline font-semibold"
                  >
                    Email Us
                  </a>
                </div>

              </div>
            </TiltCard>

          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Builder (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-saffron-500/25 shadow-card relative overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-saffron-500 via-maroon-800 to-saffron-500" />

              <div className="space-y-5">
                
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-maroon-900 text-[10px] font-bold uppercase tracking-wider mb-2 border border-saffron-500/30">
                    <Sparkles className="w-3 h-3 text-saffron-600" />
                    <span>Instant WhatsApp Message Drafter</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-maroon-900 leading-snug">
                    Send an Enquiry or Pre-Order
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
                    Select the items you are interested in below to auto-generate a formatted WhatsApp message directly to Rajdeep Jain.
                  </p>
                </div>

                {/* Interactive Spice Quick-Pick Tags */}
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-2">
                    Quick Select Products of Interest (Click to Add):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {spicePicks.map((pick) => {
                      const isSelected = formData.selectedItems.includes(pick);
                      return (
                        <button
                          key={pick}
                          type="button"
                          onClick={() => toggleSpicePick(pick)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-maroon-900 text-cream-100 border border-saffron-400 shadow-xs"
                              : "bg-cream-100 hover:bg-cream-200 text-charcoal-700 border border-saffron-500/20"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-saffron-400" />}
                          <span>{pick}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-1">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. S. Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-saffron-500/20 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98110XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-saffron-500/20 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Inquiry Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Product Availability", "Counter Pickup", "Bulk / Pricing"].map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setFormData({ ...formData, selectedTopic: topic })}
                          className={`py-2 px-2.5 rounded-xl text-[11px] font-semibold transition-colors cursor-pointer text-center ${
                            formData.selectedTopic === topic
                              ? "bg-saffron-500 text-maroon-950 font-bold border border-saffron-600 shadow-xs"
                              : "bg-cream-100 hover:bg-cream-200 text-charcoal-700 border border-saffron-500/15"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Additional Message / Required Quantity
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need 500g Kashmiri Mirch and 250g Kehwa blend for pickup tomorrow afternoon..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-saffron-500/20 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 transition-all shadow-inner resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-spicegreen-700 via-spicegreen-600 to-spicegreen-700 hover:from-spicegreen-600 hover:to-spicegreen-500 text-white font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md border border-spicegreen-500/40"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-saffron-300" />
                    <span>Send Pre-Filled Enquiry to WhatsApp</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </motion.button>

                  {formSent && (
                    <div className="p-3 rounded-xl bg-spicegreen-50 border border-spicegreen-200 text-center">
                      <p className="text-xs text-spicegreen-800 font-semibold flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-spicegreen-600" />
                        <span>WhatsApp opened with your drafted enquiry!</span>
                      </p>
                    </div>
                  )}

                  <p className="text-[11px] text-charcoal-500 text-center">
                    Direct conversation with Rajdeep Jain • No spam, strictly authentic shop assistance.
                  </p>

                </form>

              </div>

            </div>
          </div>

        </div>

        {/* Integrated Interactive Google Maps Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden border border-saffron-500/25 shadow-card p-5 sm:p-7 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-cream-200">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-saffron-700 uppercase tracking-wider block">
                Google Maps Location
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-maroon-900">
                Find Prem Kamal Spices in Dwarka Sector 7
              </h2>
              <p className="text-xs text-charcoal-600">
                Shop No. 53, Palam Extension, Dwarka Sector 7, Delhi-110077
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={shopInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon-900 hover:bg-maroon-800 text-cream-100 text-xs font-semibold shadow-xs transition-colors shrink-0 border border-saffron-500/30"
                aria-label="Open Prem Kamal Spices location in Google Maps app"
              >
                <Navigation className="w-3.5 h-3.5 text-saffron-400" />
                <span>Get Turn-by-Turn Directions</span>
                <ExternalLink className="w-3 h-3 text-saffron-300" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map iframe */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-saffron-500/20 shadow-inner bg-cream-50">
            <iframe
              title="Prem Kamal Spices Exact Location Map"
              src={shopInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Quick FAQ / Visiting Guidance */}
        <div className="bg-gradient-to-br from-white via-cream-50 to-white rounded-3xl p-6 sm:p-8 border border-saffron-500/25 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-[10px] font-bold text-saffron-700 uppercase tracking-wider block mb-1">
              Visiting Guide
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-maroon-900">
              Frequently Asked Visiting Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-cream-100/70 border border-saffron-500/20 hover:border-saffron-500/40 transition-colors"
              >
                <h3 className="font-serif text-sm font-bold text-maroon-900 mb-1.5 flex items-start gap-2">
                  <span className="text-saffron-600 font-sans font-bold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-charcoal-700 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
