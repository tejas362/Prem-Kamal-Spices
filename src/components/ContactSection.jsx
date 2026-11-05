import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Copy, Check, Navigation, Edit3 } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";
import { KashmiriDivider, KamalMotif } from "./KashmiriMotifs";

export const ContactSection = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream-100 relative border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 text-maroon-900 text-xs font-semibold uppercase tracking-widest border border-cream-300 mb-3 shadow-xs">
            <MapPin className="w-4 h-4 text-maroon-800" />
            Get in Touch
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            Contact & Store Location
          </h2>

          <KashmiriDivider className="my-3" />

          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
            Visit our shop in Dwarka Sector 7, or reach out directly by phone, WhatsApp, or email for enquiries and orders.
          </p>
        </div>

        {/* Contact Grid: Business Cards & Opening Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Address Details */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Store Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-soft hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-maroon-100 text-maroon-800 flex items-center justify-center shrink-0 border border-maroon-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2 flex-1">
                  <div>
                    <span className="text-[11px] font-bold text-saffron-700 uppercase tracking-wider block">
                      Shop Address
                    </span>
                    <h3 className="font-serif text-xl font-bold text-maroon-900">
                      Prem Kamal Spices
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-charcoal-800 leading-snug">
                    {shopInfo.address.line1},<br />
                    {shopInfo.address.line2}, {shopInfo.address.city}-{shopInfo.address.pincode}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {/* Google Maps Directions Link */}
                    <a
                      href={shopInfo.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-maroon-800 hover:bg-maroon-900 text-cream-100 px-3.5 py-2 rounded-xl shadow-xs transition-colors"
                      aria-label="Get Google Maps directions to Prem Kamal Spices"
                    >
                      <Navigation className="w-3.5 h-3.5 text-saffron-400" />
                      <span>Get Directions on Google Maps</span>
                    </a>

                    {/* Copy Address Button */}
                    <button
                      onClick={() => copyToClipboard(shopInfo.address.full, "address")}
                      className="inline-flex items-center gap-1 text-xs text-charcoal-700 hover:text-maroon-900 px-3 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors cursor-pointer"
                      title="Copy full address"
                    >
                      {copiedField === "address" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-spicegreen-700" />
                          <span className="text-[11px] text-spicegreen-700 font-semibold">Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Click-to-Call Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-cream-300 shadow-soft space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-800 flex items-center justify-center border border-saffron-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-400">
                    Call Direct
                  </span>
                </div>
                
                <div>
                  <h4 className="font-serif text-base font-bold text-maroon-900">
                    Phone Link
                  </h4>
                  <a
                    href={`tel:${shopInfo.contact.phone}`}
                    className="text-base font-bold text-maroon-800 hover:underline tracking-wide block mt-1"
                    aria-label={`Call Prem Kamal Spices at ${shopInfo.contact.phone}`}
                  >
                    {shopInfo.contact.phone}
                  </a>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    Click to call our shop counter directly
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${shopInfo.contact.phone}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-cream-100 hover:bg-cream-200 text-maroon-900 px-3 py-2 rounded-xl border border-cream-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-maroon-800" />
                    <span>Call {shopInfo.contact.phone}</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Contact Button Card */}
              <div className="p-5 rounded-2xl bg-white border border-cream-300 shadow-soft space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-spicegreen-100 text-spicegreen-800 flex items-center justify-center border border-spicegreen-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-spicegreen-700">
                    Quick Chat
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-maroon-900">
                    WhatsApp Contact
                  </h4>
                  <span className="text-base font-bold text-charcoal-800 tracking-wide block mt-1">
                    {shopInfo.contact.phone}
                  </span>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    Ask questions, check stock, or place enquiries
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-spicegreen-700 hover:bg-spicegreen-800 text-white px-3 py-2 rounded-xl shadow-xs transition-colors border border-spicegreen-600"
                    aria-label="Contact Prem Kamal Spices on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-saffron-300" />
                    <span>WhatsApp Contact</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Email Contact Card */}
            <div className="p-5 rounded-2xl bg-white border border-cream-300 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cream-200 text-maroon-800 flex items-center justify-center shrink-0 border border-cream-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-400 block">
                    Written Enquiries
                  </span>
                  <h4 className="font-serif text-base font-bold text-maroon-900">
                    Email Link
                  </h4>
                  <a
                    href={`mailto:${shopInfo.contact.email}`}
                    className="text-sm font-semibold text-charcoal-800 hover:text-maroon-800 hover:underline block break-all"
                    aria-label={`Send email to ${shopInfo.contact.email}`}
                  >
                    {shopInfo.contact.email}
                  </a>
                  <p className="text-xs text-charcoal-500">
                    Click to draft an email inquiry directly to our shop.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Opening Hours Section with Editable Placeholder Values */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Opening Hours Box */}
            <div className="p-6 rounded-2xl bg-maroon-900 text-cream-100 border border-saffron-500/30 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-maroon-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-maroon-800 flex items-center justify-center text-saffron-400 border border-saffron-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-cream-50">
                      Opening Hours
                    </h3>
                    <span className="text-[11px] text-cream-300">
                      Prem Kamal Spices
                    </span>
                  </div>
                </div>

                {/* Open status badge */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-spicegreen-800 text-cream-100 text-[10px] font-semibold border border-spicegreen-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 animate-pulse"></span>
                  <span>Open 7 Days</span>
                </span>
              </div>

              {/* Schedule List */}
              <div className="space-y-3.5 text-xs">
                {shopInfo.openingHours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-maroon-950/60 border border-maroon-800/80 flex items-center justify-between gap-3"
                  >
                    <span className="font-medium text-cream-200">{schedule.days}</span>
                    <span className="font-semibold text-saffron-300 font-mono tracking-wide text-right">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-maroon-800/80 text-[11px] text-cream-300/90 leading-relaxed">
                <p>
                  *Visiting after hours or have special inquiries? Feel free to message us on WhatsApp or call before visiting.
                </p>
              </div>
            </div>

            {/* Google Maps Directions Embedded Card */}
            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-maroon-800" />
                  <h4 className="font-serif text-lg font-bold text-maroon-900">
                    Directions & Map
                  </h4>
                </div>
                <span className="text-xs text-charcoal-500">Delhi-110077</span>
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed">
                Located at <strong>Shop No. 53, Palam Extension, Dwarka Sector 7</strong>. Accessible from Dwarka Sector 9 & 10 Metro stations (Blue Line) and Palam Metro station (Magenta Line).
              </p>

              <div className="pt-2">
                <a
                  href={shopInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-cream-100 hover:bg-cream-200 text-maroon-900 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 border border-cream-300"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-maroon-800" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Integrated Interactive Google Maps Embed */}
        <div className="mt-10 bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-soft p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-cream-200">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-saffron-700 uppercase tracking-wider block">
                Google Maps Location
              </span>
              <h3 className="font-serif text-2xl font-bold text-maroon-900">
                Prem Kamal Spices on Google Maps
              </h3>
              <p className="text-xs text-charcoal-600">
                Shop No. 53, Palam Extension, Dwarka Sector 7, Delhi-110077
              </p>
            </div>

            <a
              href={shopInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon-900 hover:bg-maroon-800 text-cream-100 text-xs font-semibold shadow-xs transition-colors shrink-0"
              aria-label="Open Prem Kamal Spices location in Google Maps app"
            >
              <Navigation className="w-3.5 h-3.5 text-saffron-400" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5 text-saffron-300" />
            </a>
          </div>

          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-cream-300 shadow-inner bg-cream-50">
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

      </div>
    </section>
  );
};
