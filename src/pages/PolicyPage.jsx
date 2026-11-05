import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, FileText, ArrowLeft, Store } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { KashmiriDivider, KamalMotif } from "../components/KashmiriMotifs";

export const PolicyPage = () => {
  const location = useLocation();
  const isTerms = location.pathname.includes("terms");

  return (
    <div className="py-12 sm:py-16 bg-cream-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal-500 mb-6">
          <Link to="/" className="hover:text-maroon-800 transition-colors font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-maroon-900 font-semibold">
            {isTerms ? "Terms of Service" : "Privacy Policy"}
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cream-100 border border-saffron-500/30 flex items-center justify-center text-maroon-900">
              {isTerms ? <FileText className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900">
                {isTerms ? "Terms of Service" : "Privacy Policy"}
              </h1>
              <p className="text-xs text-charcoal-500">
                Prem Kamal Spices – Kashmiri Bazar • Dwarka Sector 7, New Delhi
              </p>
            </div>
          </div>

          <KashmiriDivider className="my-2" />

          {isTerms ? (
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-maroon-900">1. Store Information & Scope</h2>
                <p>
                  These terms govern inquiries, orders, and counter pickups with <strong>Prem Kamal Spices – Kashmiri Bazar</strong> (operated by Rajdeep Jain), located at {shopInfo.address.full}, holding FSSAI License No. {shopInfo.fssaiLicense}.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-maroon-900">2. Inquiries and Orders</h2>
                <p>
                  Product availability, pack sizes, and prices displayed online are for general informational purposes. Final orders, quantities, and payment methods are confirmed directly with our shop counter via WhatsApp ({shopInfo.contact.phone}) or phone.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-maroon-900">3. Counter Pickup & Deliveries</h2>
                <p>
                  Customers may pick up confirmed orders at our Dwarka Sector 7 store during operating hours. Local deliveries across Dwarka are subject to availability and mutual agreement at the time of ordering.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-maroon-900">4. Food Quality & Standards</h2>
                <p>
                  All spice powders, pulses, and dry fruits are handled according to standard food hygiene and storage practices in accordance with FSSAI regulations.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-maroon-900">1. Information We Receive</h2>
                <p>
                  When you initiate an inquiry via WhatsApp, telephone, or email to <strong>Prem Kamal Spices – Kashmiri Bazar</strong>, we receive only the contact details and messages you voluntarily provide (such as your phone number, name, and product requests).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-maroon-900">2. How We Use Your Information</h2>
                <p>
                  Your information is used strictly to answer your product inquiries, confirm orders, coordinate pickup or delivery, and provide customer support. We do not sell, rent, or share your contact details with third-party advertisers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-maroon-900">3. Contact & Business Details</h2>
                <p>
                  If you have any questions regarding your information or wish to update your details, contact:
                </p>
                <div className="bg-cream-50 p-4 rounded-xl border border-cream-200 text-xs space-y-1 text-charcoal-800">
                  <p><strong>Business Name:</strong> Prem Kamal Spices – Kashmiri Bazar</p>
                  <p><strong>Owner:</strong> Rajdeep Jain</p>
                  <p><strong>Address:</strong> {shopInfo.address.full}</p>
                  <p><strong>Phone / WhatsApp:</strong> {shopInfo.contact.phone}</p>
                  <p><strong>Email:</strong> {shopInfo.contact.email}</p>
                  <p><strong>FSSAI License No.:</strong> {shopInfo.fssaiLicense}</p>
                </div>
              </section>
            </div>
          )}

          <div className="pt-4 border-t border-cream-200 flex justify-between items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon-900 hover:text-saffron-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <span className="text-[11px] text-charcoal-500">
              Prem Kamal Spices © {new Date().getFullYear()}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
