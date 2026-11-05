/**
 * Configurable WhatsApp Ordering & Enquiry Configuration
 * for Prem Kamal Spices
 */

export const whatsappConfig = {
  // WhatsApp phone number in international format without '+' or spaces
  phoneNumber: "918700628987",

  // Display phone format for human reading
  displayNumber: "+91 87006 28987",

  // Configurable message templates
  templates: {
    // When a customer clicks "Order on WhatsApp" for a specific product
    productEnquiry: (productName) =>
      `Hello Prem Kamal Spices, I am interested in ${productName}. Please share the details.`,

    // General store enquiry from floating button or header
    generalEnquiry: () =>
      `Hello Prem Kamal Spices, I would like to inquire about spice availability, Kashmiri specialties, and dry fruits.`,

    // Multi-item inquiry list
    multiProductEnquiry: (items, note = "") => {
      let msg = `Hello Prem Kamal Spices,\nI am interested in the following products:\n\n`;
      items.forEach((item, idx) => {
        msg += `${idx + 1}. ${item.name} (${item.hindiName || ""})\n`;
      });
      if (note && note.trim()) {
        msg += `\nNote / Required Quantity: ${note.trim()}\n`;
      }
      msg += `\nPlease share the details and availability. Thank you!`;
      return msg;
    },
  },
};

/**
 * Generate a properly URL-encoded WhatsApp direct link for a single product
 * @param {string} productName - Name of the product
 * @returns {string} Fully encoded WhatsApp URL
 */
export const getProductWhatsAppUrl = (productName) => {
  const text = whatsappConfig.templates.productEnquiry(productName);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(text)}`;
};

/**
 * Generate a properly URL-encoded WhatsApp direct link for general enquiry
 * @returns {string} Fully encoded WhatsApp URL
 */
export const getGeneralWhatsAppUrl = () => {
  const text = whatsappConfig.templates.generalEnquiry();
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(text)}`;
};

/**
 * Generate a properly URL-encoded WhatsApp direct link for multiple products
 * @param {Array} items - List of product items
 * @param {string} note - Optional user note
 * @returns {string} Fully encoded WhatsApp URL
 */
export const getMultiProductWhatsAppUrl = (items, note = "") => {
  const text = whatsappConfig.templates.multiProductEnquiry(items, note);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(text)}`;
};
