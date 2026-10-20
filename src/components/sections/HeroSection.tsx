import React from "react";
import { ArrowRight, BookOpen, Search, Calculator, TrendingUp, ShieldCheck } from "lucide-react";
import heroBoxImage from "../../assets/images/hero_import_box_1792492719184.jpg";

interface HeroSectionProps {
  onExploreGuide: () => void;
  onViewIncluded: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreGuide,
  onViewIncluded,
}) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#080808]"
    >
      {/* Subtle atmospheric ambient gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFC928]/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E0A800]/5 blur-[120px] pointer-events-none -z-10" />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#FFC928 1px, transparent 1px), linear-gradient(90deg, #FFC928 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFC928]/30 text-[#FFC928] text-xs font-semibold tracking-wider uppercase w-fit shadow-sm shadow-[#FFC928]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-pulse" />
              GUIA PRÁTICO PARA O MERCADO ANGOLANO
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Aprende a{" "}
              <span className="text-[#FFC928] gold-glow-hover transition-colors">
                Importar da China
              </span>{" "}
              para Angola com{" "}
              <span className="text-[#FFC928] gold-glow-hover transition-colors">
                Mais Inteligência
              </span>
              .
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#B7B7B7] leading-relaxed max-w-2xl">
              Descobre como pesquisar produtos, avaliar vendedores e calcular os custos antes de investir o teu dinheiro numa estratégia de revenda.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreGuide}
                className="group inline-flex items-center justify-center gap-3 py-3.5 px-7 text-sm font-bold text-black bg-gradient-to-r from-[#E0A800] via-[#FFC928] to-[#E0A800] rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#E0A800]/25 whitespace-nowrap"
              >
                <span>QUERO CONHECER O GUIA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewIncluded}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#141414] hover:bg-[#1C1C1C] border border-[#FFC928]/25 hover:border-[#FFC928]/60 rounded-xl transition-all whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-[#FFC928]" />
                <span>VER O QUE ESTÁ INCLUÍDO</span>
              </button>
            </div>

            {/* Feature Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-[#B7B7B7]">
                <div className="p-1.5 rounded-lg bg-[#FFC928]/10 text-[#FFC928] border border-[#FFC928]/20">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white/90">Pesquisa de produtos</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#B7B7B7]">
                <div className="p-1.5 rounded-lg bg-[#FFC928]/10 text-[#FFC928] border border-[#FFC928]/20">
                  <Calculator className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white/90">Cálculo de custos</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#B7B7B7]">
                <div className="p-1.5 rounded-lg bg-[#FFC928]/10 text-[#FFC928] border border-[#FFC928]/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white/90">Estratégia de revenda</span>
              </div>
            </div>

            {/* Educational Disclaimer */}
            <div className="flex items-start gap-2 pt-1 text-[11px] text-[#7A7A7A]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B7B7B7] shrink-0 mt-0.5" />
              <span>Conteúdo educativo. A importação envolve custos, riscos e resultados variáveis.</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Outer Golden Glow Gradient Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#E0A800]/40 via-[#FFC928]/20 to-[#E0A800]/50 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-[#FFC928]/35 shadow-2xl shadow-black/80">
                <img
                  src={heroBoxImage}
                  alt="Ilustração futurista de remessa com eletrónicos e produtos de consumo de alta rotação"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                  width="600"
                  height="450"
                />

                {/* Logistics Route Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-black/85 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFC928] animate-ping" />
                    <div>
                      <p className="text-xs font-semibold text-white">Rota Comercial Estruturada</p>
                      <p className="text-[10px] text-[#B7B7B7]">China (Xianyu / Goofish) ➔ Luanda (Angola)</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFC928] bg-[#FFC928]/10 px-2.5 py-1 rounded-md border border-[#FFC928]/25">
                    Metodologia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
