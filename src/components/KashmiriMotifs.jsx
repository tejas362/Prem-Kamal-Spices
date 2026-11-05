import React from "react";

// Stylized Chinar Leaf (Iconic Kashmir Valley symbol)
export const ChinarLeaf = ({ className = "w-6 h-6 text-saffron-500", ...props }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} {...props}>
    <path d="M32 4 C31 12 25 18 20 20 C22 24 20 30 15 32 C20 34 22 39 19 44 C24 43 28 47 28 53 L31 53 L30 62 L34 62 L33 53 L36 53 C36 47 40 43 45 44 C42 39 44 34 49 32 C44 30 42 24 44 20 C39 18 33 12 32 4 Z" />
    <path d="M32 14 L32 52 M32 30 L22 24 M32 30 L42 24 M32 40 L24 38 M32 40 L40 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
  </svg>
);

// Stylized Kamal (Lotus) motif for Prem Kamal
export const KamalMotif = ({ className = "w-8 h-8 text-maroon-800", ...props }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} {...props}>
    {/* Center petal */}
    <path d="M50 15 C50 15 38 32 38 48 C38 60 45 68 50 72 C55 68 62 60 62 48 C62 32 50 15 50 15 Z" />
    {/* Left petal */}
    <path d="M47 30 C47 30 26 36 22 52 C20 62 28 70 38 71 C34 62 38 50 47 44 Z" opacity="0.85" />
    {/* Right petal */}
    <path d="M53 30 C53 30 74 36 78 52 C80 62 72 70 62 71 C66 62 62 50 53 44 Z" opacity="0.85" />
    {/* Far left wing */}
    <path d="M38 52 C28 50 12 58 12 70 C12 78 24 82 34 78 C28 72 32 62 38 58 Z" opacity="0.7" />
    {/* Far right wing */}
    <path d="M62 52 C72 50 88 58 88 70 C88 78 76 82 66 78 C72 72 68 62 62 58 Z" opacity="0.7" />
    {/* Lotus base */}
    <path d="M36 78 C42 82 58 82 64 78 C58 86 42 86 36 78 Z" />
    <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
  </svg>
);

// Kashmiri Paisley / Kalka motif
export const PaisleyMotif = ({ className = "w-6 h-6 text-saffron-600", ...props }) => (
  <svg viewBox="0 0 64 80" fill="currentColor" className={className} {...props}>
    <path d="M32 6 C18 18 10 32 10 48 C10 66 22 76 36 76 C50 76 56 64 56 50 C56 34 44 26 44 14 C44 8 40 4 36 4 C32 4 32 6 32 6 Z" />
    <circle cx="34" cy="50" r="8" fill="#FFFFFF" opacity="0.7"/>
    <circle cx="34" cy="50" r="4" fill="currentColor"/>
  </svg>
);

// Ornamental Kashmiri Divider
export const KashmiriDivider = ({ label = "", className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
    <div className="h-px bg-gradient-to-r from-transparent via-maroon-700/30 to-saffron-500/60 w-16 sm:w-28"></div>
    <div className="flex items-center gap-1.5 text-saffron-600">
      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span>
      <KamalMotif className="w-5 h-5 text-maroon-800" />
      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span>
    </div>
    {label && (
      <span className="text-xs uppercase tracking-widest font-medium text-maroon-800 px-1 font-serif">
        {label}
      </span>
    )}
    <div className="h-px bg-gradient-to-l from-transparent via-maroon-700/30 to-saffron-500/60 w-16 sm:w-28"></div>
  </div>
);

// Jali pattern accent for banners & card borders
export const JaliPattern = ({ className = "" }) => (
  <div className={`pointer-events-none opacity-5 bg-[radial-gradient(#671620_1px,transparent_1px)] [background-size:16px_16px] ${className}`} />
);
