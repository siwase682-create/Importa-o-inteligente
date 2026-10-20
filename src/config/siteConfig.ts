/**
 * Site Configuration for Importação Inteligente Angola
 */
export const siteConfig = {
  brandName: "Importação Inteligente Angola",
  productName: "Importação Inteligente",
  price: "3.500 Kz",
  currencySymbol: "Kz",
  /**
   * Checkout / direct landing link for "QUERO O MEU GUIA"
   */
  checkoutUrl: "https://bit.ly/Importação-inteligente1",
  /**
   * Real Angolan WhatsApp phone number: 928230620 (country code 244)
   */
  whatsappNumber: "244928230620",
  whatsappDefaultMessage:
    "Olá! Quero conhecer o guia Importação Inteligente. Podes enviar-me os detalhes, o conteúdo incluído e as opções de pagamento?",
  ebookPhysicalCoverImage:
    "/assets/aistudio/Importa__o_Inteligente__China_para_Angola__1__335109d2.png",
};

/**
 * Returns direct WhatsApp chat link to number 244928230620
 */
export function getWhatsAppChatUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns direct purchase/checkout URL
 */
export function getCheckoutUrl(): string {
  return encodeURI(siteConfig.checkoutUrl);
}
