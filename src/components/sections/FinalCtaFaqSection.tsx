import React, { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";
import { siteConfig, getWhatsAppChatUrl, getCheckoutUrl } from "../../config/siteConfig";
import physicalBookImage from "../../assets/images/ebook_physical_book.png";

export const FinalCtaFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCheckoutAction = () => {
    window.open(getCheckoutUrl(), "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppAction = () => {
    window.open(getWhatsAppChatUrl(), "_blank", "noopener,noreferrer");
  };

  const faqs = [
    {
      q: "O que é o guia Importação Inteligente?",
      a: "É um e-book educativo com orientações sobre pesquisa de produtos, avaliação de vendedores, custos de importação e preparação para revenda.",
    },
    {
      q: "Preciso de experiência para começar a estudar o conteúdo?",
      a: "O guia foi pensado para ajudar quem está a aprender sobre o processo. Deves ler, pesquisar e avaliar cada etapa antes de investir.",
    },
    {
      q: "O guia garante que vou ter lucro?",
      a: "Não. O guia oferece informação e ferramentas de organização. Os resultados dependem de vários fatores, incluindo custos, procura, execução e condições do mercado.",
    },
    {
      q: "Como posso saber as opções de pagamento?",
      a: "Envia uma mensagem pelo WhatsApp para receber os detalhes do produto e as opções de pagamento disponíveis.",
    },
    {
      q: "Como recebo o e-book?",
      a: "Contacta-nos para conhecer as condições de compra e entrega do material digital.",
    },
  ];

  const highlights = [
    "Material digital e prático estruturado para Angola",
    "Acesso a todas as 8 ferramentas e checklists inclusas",
    "Atendimento direto para esclarecimento de dúvidas e compra",
  ];

  return (
    <section id="oferta" className="py-20 lg:py-28 bg-[#090909] relative">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#FFC928]/5 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main High-Conversion Offer Card */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#FFC928]/45 via-[#E0A800]/25 to-transparent shadow-2xl shadow-black/80 mb-20">
          <div className="rounded-[calc(1.5rem-1px)] bg-[#101010] p-6 sm:p-10 lg:p-14 relative overflow-hidden">
            {/* Soft inner radial glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC928]/5 blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Physical Product Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-xs sm:max-w-sm group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFC928]/35 to-[#E0A800]/45 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-2xl overflow-hidden border border-[#FFC928]/35 bg-gradient-to-b from-[#181818] to-[#0e0e0e] p-4 flex flex-col items-center">
                    <img
                      src={physicalBookImage}
                      alt="Guia Importação Inteligente — Livro Físico e Conteúdo Digital"
                      referrerPolicy="no-referrer"
                      className="w-full max-h-[440px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="p-3 text-center bg-[#0a0a0a] rounded-lg mt-3 border border-white/5 w-full">
                      <p className="text-xs font-semibold text-white">Edição Especial Mercado Angolano</p>
                      <p className="text-[11px] text-[#A0A0A0]">Xianyu (Goofish) ➔ Luanda (Angola)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Conversion CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928]/10 border border-[#FFC928]/30 text-[#FFC928] text-xs font-bold tracking-wider uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{siteConfig.productName}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Começa a Preparar a Tua Estratégia de Importação Hoje.
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-[#B7B7B7] leading-relaxed">
                    Conhece o guia Importação Inteligente e aprende os princípios essenciais para pesquisar produtos, compreender os custos e preparar a tua estratégia de revenda.
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#FFC928] tracking-widest uppercase block">
                    PREÇO DE LANÇAMENTO
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {siteConfig.price}
                    </span>
                    <span className="text-xs text-[#8A8A8A]">
                      / pagamento único em Kwanzas
                    </span>
                  </div>
                </div>

                {/* Bullet highlights */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#D1D1D1]">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FFC928]/10 border border-[#FFC928]/30 flex items-center justify-center text-[#FFC928] shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={handleCheckoutAction}
                    className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 text-sm font-extrabold text-black bg-gradient-to-r from-[#E0A800] via-[#FFC928] to-[#E0A800] rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#E0A800]/25 cursor-pointer"
                  >
                    <span>QUERO O MEU GUIA</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleWhatsAppAction}
                    className="inline-flex items-center justify-center gap-2.5 py-4 px-6 text-sm font-bold text-white bg-[#191919] hover:bg-[#222222] border border-[#25D366]/50 hover:border-[#25D366] rounded-xl transition-all shadow-md shadow-black cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                    <span>FALAR PELO WHATSAPP</span>
                  </button>
                </div>

                {/* Reassurance Line */}
                <p className="text-xs text-[#8A8A8A] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B7B7B7] shrink-0" />
                  <span>
                    Recebe os detalhes do produto e as opções de pagamento antes de concluir a compra.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section (Integrated in Section 6) */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC928]">
              Perguntas Frequentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dúvidas Comuns Sobre o Guia
            </h3>
            <p className="text-sm text-[#B7B7B7]">
              Tudo o que precisas de saber antes de dar início aos teus estudos.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#111111] border border-white/10 overflow-hidden transition-colors hover:border-[#FFC928]/30"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928]/50"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FFC928] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#B7B7B7] leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section 6 Footer Disclaimer */}
          <div className="mt-12 p-4 rounded-xl bg-[#0c0c0c] border border-white/10 text-center">
            <p className="text-xs text-[#7A7A7A] leading-relaxed">
              Importação Inteligente é um material educativo. Não garante resultados financeiros. Confirma os custos, condições e requisitos aplicáveis antes de realizar uma importação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
