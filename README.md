# Prem Kamal Spices — Website

> **“Let’s Make Our Taste Enhance”**  
> Premium, modern, multi-page website for **Prem Kamal Spices**, Delhi-110077.

---

## 🏛️ Business Details
- **Brand:** Prem Kamal Spices
- **Tagline:** “Let’s Make Our Taste Enhance”
- **Location:** Shop No. 53, Palam Extension, Dwarka Sector 7, Delhi-110077
- **Phone:** 8700628987 / +91 87006 28987
- **WhatsApp:** 918700628987
- **Email:** rajdeepjain1976@gmail.com
- **Store Timings:** Monday – Saturday: 10:00 AM – 9:00 PM | Sunday: 10:00 AM – 8:00 PM

---

## 🌐 Dedicated Multi-Page Routing
The website now features distinct, independent pages rather than a single scroll page:

1. **Home (`/`):**
   - Wide hero banner with authentic Kashmiri Flavours presentation.
   - 4 Category cards with direct links to the filtered product catalog.
   - Featured Kashmiri specialties spotlight using supplied images.
   - Quick Dwarka store visit banner.
2. **Products (`/products`):**
   - Full dedicated product catalog with real-time search.
   - Category filtering (All Items, Spices & Powders, Kashmiri Specialties, Pantry Essentials, Heritage & Display).
   - 2 columns on mobile, 3 on tablet, 4 on desktop.
   - All 14 supplied products and display items with "Enquire on WhatsApp" buttons.
   - Larger product detail view modal.
3. **About Us (`/about`):**
   - Dedicated About page highlighting quality and natural flavour without unverified claims.
   - Quality pillars and counter visit details with supplied product imagery.
4. **Contact (`/contact`):**
   - Full address, Google Maps directions link, click-to-call phone link, WhatsApp chat button, and opening hours.
   - Direct pre-filled WhatsApp enquiry form.

---

## 📁 Project Structure
```
Prem Kamal Spices/
├── index.html                   # HTML entry with configured SEO title & meta tags
├── package.json                 # Project dependencies (React 19, react-router-dom, Tailwind)
├── tailwind.config.js           # Brand color system (cream, maroon, saffron, spice green)
├── public/
│   ├── favicon.png              # Official Prem Kamal Spices circular seal
│   └── assets/
│       ├── brand/
│       │   └── logo.png         # Official Prem Kamal Spices Circular Seal
│       └── products/            # 14 supplied product & heritage images
└── src/
    ├── main.jsx                 # Application root
    ├── App.jsx                  # Multi-page router with ScrollToTop & floating WhatsApp
    ├── index.css                # Tailwind directives & focus accessibility outlines
    ├── data/
    │   ├── shopInfo.js          # Centralized store address, contacts, and opening hours
    │   ├── categories.js        # 4 core shop categories
    │   └── products.js          # Separate editable data file for all 14 supplied items
    ├── utils/
    │   └── whatsapp.js          # Configurable WhatsApp URL generator & message templates
    ├── pages/
    │   ├── HomePage.jsx         # Dedicated Home page
    │   ├── ProductsPage.jsx     # Dedicated Products catalog page
    │   ├── AboutPage.jsx        # Dedicated About Us page
    │   └── ContactPage.jsx      # Dedicated Contact & Location page
    └── components/
        ├── ScrollToTop.jsx      # Auto scroll-to-top on route change
        ├── KashmiriMotifs.jsx   # Hand-crafted SVG Chinar leaf, lotus & divider accents
        ├── Navbar.jsx           # Multi-page NavLinks & prominent "Order on WhatsApp"
        ├── Hero.jsx             # Wide banner with spice bowls & Kashmiri flavours headline
        ├── CategorySection.jsx  # 4 responsive category cards
        ├── KashmiriHeritageSection.jsx # Valley specialty spotlight
        ├── ProductDetailModal.jsx # Larger product detail view modal
        └── Footer.jsx           # Multi-page footer links, hours, directions & copyright
```

---

## 🚀 Running Locally

### Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### Production Build
```bash
npm run build
npm run preview
```
