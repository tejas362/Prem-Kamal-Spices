import React from "react";
import { Link } from "react-router-dom";
import { HelpCircle, MessageSquare, Phone, MapPin, ArrowRight } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { KashmiriDivider, KamalMotif } from "../components/KashmiriMotifs";

export const FAQPage = () => {
  const faqs = [
    {
      q: "Where is Prem Kamal Spices – Kashmiri Bazar located?",
      a: `Our physical store is located at ${shopInfo.address.full}. You are welcome to visit our shop during open hours to inspect spices and dry fruits in person.`,
    },
    {
      q: "How can I enquire about product availability and prices?",
      a: `You can reach out directly via WhatsApp at ${shopInfo.contact.phone} or click any product card on the website to send a pre-filled inquiry. You can also call us directly at ${shopInfo.contact.phone}.`,
    },
    {
      q: "What pack sizes do you offer?",
      a: "Pack sizes vary by product. For spices and dry fruits, we accommodate standard counter quantities and custom household pack sizes upon request. Please enquire on WhatsApp for specific requirements.",
    },
    {
      q: "Are the spices freshly ground?",
      a: "Yes, our stone-ground spice powders (such as Kashmiri Mirch, Haldi, Saunf, and Saunth) are milled carefully to retain their natural essential oils and aroma.",
    },
    {
      q: "Do you offer counter pickup or local delivery in Dwarka?",
      a: "Yes! Counter pickup is available during normal shop hours. For local deliveries across Dwarka and surrounding Delhi NCR neighbourhoods, please contact us on WhatsApp to check delivery options.",
    },
    {
      q: "What is your FSSAI registration number?",
      a: `Prem Kamal Spices is registered under FSSAI License No. ${shopInfo.fssaiLicense}.`,
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-cream-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal-500 mb-6">
          <Link to="/" className="hover:text-maroon-800 transition-colors font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-maroon-900 font-semibold">Frequently Asked Questions</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 text-maroon-900 text-xs font-semibold uppercase tracking-widest border border-cream-300 mb-3 shadow-xs">
            <KamalMotif className="w-4 h-4 text-maroon-800" />
            <span>Help & Inquiries</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            Frequently Asked Questions
          </h1>

          <KashmiriDivider className="my-3" />

          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
            Helpful information about our products, store location, ordering through WhatsApp, and visiting our Dwarka shop.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-cream-300 shadow-soft"
            >
              <h3 className="font-serif text-lg sm:text-xl font-bold text-maroon-900 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-saffron-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal pl-7.5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Help Box */}
        <div className="mt-12 bg-maroon-900 rounded-3xl p-6 sm:p-8 text-cream-100 text-center space-y-4 border border-saffron-500/30">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
            Have a question that is not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-cream-200 max-w-md mx-auto leading-relaxed">
            Reach out directly to shop owner Rajdeep Jain for immediate assistance.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${shopInfo.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-spicegreen-700 hover:bg-spicegreen-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
            <a
              href={`tel:${shopInfo.contact.phone}`}
              className="px-5 py-2.5 rounded-xl bg-maroon-950 hover:bg-maroon-800 text-cream-100 font-semibold text-xs sm:text-sm flex items-center gap-2 border border-saffron-500/30"
            >
              <Phone className="w-4 h-4 text-saffron-400" />
              <span>Call: {shopInfo.contact.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
