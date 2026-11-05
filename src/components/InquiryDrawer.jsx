import React, { useState } from "react";
import { X, Trash2, MessageSquare, Phone, Mail, ShoppingBag, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getMultiProductWhatsAppUrl } from "../utils/whatsapp";
import { KamalMotif, ChinarLeaf } from "./KashmiriMotifs";

export const InquiryDrawer = ({ isOpen, onClose, items = [], onRemoveItem, onClearAll }) => {
  const [userNote, setUserNote] = useState("");

  if (!isOpen) return null;

  // Format WhatsApp message via centralized configurable utility
  const handleSendWhatsApp = () => {
    const waUrl = getMultiProductWhatsAppUrl(items, userNote);
    window.open(waUrl, "_blank");
  };

  // Format Email body
  const handleSendEmail = () => {
    let body = `Hello Prem Kamal Spices,\n\nI would like to inquire about availability and pricing for the following items:\n\n`;

    items.forEach((item, index) => {
      body += `${index + 1}. ${item.name} (${item.hindiName}) - Form: ${item.form}\n`;
    });

    if (userNote.trim()) {
      body += `\nSpecial Note / Preferred Quantity: ${userNote}\n`;
    }

    body += `\nPlease let me know availability and how I can order/pick up from your Dwarka Sector 7 store.\n\nThank you!`;

    const mailtoUrl = `mailto:${shopInfo.contact.email}?subject=${encodeURIComponent(
      "Product Availability Inquiry - Prem Kamal Spices"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 shadow-2xl flex flex-col border-l border-cream-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-maroon-900 text-cream-100 flex items-center justify-between border-b border-maroon-800">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-maroon-800 flex items-center justify-center text-saffron-400 border border-saffron-500/30">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold">Your Inquiry List</h3>
                <p className="text-[11px] text-cream-300">
                  {items.length} {items.length === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-cream-200 hover:text-white hover:bg-maroon-800 transition-colors cursor-pointer"
              aria-label="Close inquiry drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <KamalMotif className="w-12 h-12 text-cream-400 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-maroon-900">
                  Your inquiry list is empty
                </h4>
                <p className="text-xs text-charcoal-600 mt-1 max-w-xs mx-auto leading-relaxed">
                  Browse our catalog to select whole spices, authentic Kashmiri specialties, and dry fruits to send a quick inquiry.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 rounded-xl bg-maroon-800 text-cream-100 text-xs font-semibold hover:bg-maroon-900 transition-colors cursor-pointer"
                >
                  Explore Spice Catalog
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-1 border-b border-cream-200">
                  <span className="text-xs font-semibold text-charcoal-600">Selected Products</span>
                  <button
                    onClick={onClearAll}
                    className="text-[11px] text-maroon-800 hover:text-maroon-950 underline font-medium cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-2.5">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white rounded-xl border border-cream-300 shadow-xs flex items-center justify-between gap-3"
                    >
                      <div className="w-12 h-12 rounded-lg bg-cream-200 overflow-hidden shrink-0 border border-cream-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-saffron-700 font-semibold uppercase tracking-wider block">
                          {item.hindiName}
                        </span>
                        <h5 className="font-serif text-sm font-bold text-maroon-900 truncate">
                          {item.name}
                        </h5>
                        <p className="text-[10px] text-charcoal-500 truncate">
                          Available: {item.packSizes.slice(0, 2).join(", ")}
                        </p>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-charcoal-400 hover:text-maroon-800 transition-colors cursor-pointer"
                        title="Remove from list"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Optional Note / Quantity specification */}
                <div className="mt-4 pt-3 border-t border-cream-200">
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Special Notes or Preferred Quantities (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="e.g. Looking for 5g saffron, 500g almonds, need counter pickup today..."
                    className="w-full p-2.5 rounded-xl bg-white border border-cream-300 text-xs text-charcoal-800 focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-cream-300 space-y-2.5">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-800 text-cream-100 font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Inquiry via WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${shopInfo.contact.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-maroon-800 hover:bg-maroon-900 text-cream-100 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Call {shopInfo.contact.phone}</span>
                </a>

                <button
                  onClick={handleSendEmail}
                  className="py-2.5 px-3 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-cream-300 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-maroon-800" />
                  <span>Send Email</span>
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] text-charcoal-500">
                <span>Shop No. 53, Palam Extension, Dwarka Sector 7</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
