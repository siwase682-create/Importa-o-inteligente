import React from "react";
import { AlertTriangle, DollarSign, Target, CheckCircle2 } from "lucide-react";

export const ProblemOpportunitySection: React.FC = () => {
  const cards = [
    {
      icon: AlertTriangle,
      title: "Comprar sem pesquisar",
      description:
        "Escolher produtos apenas pelo preço pode levar a decisões pouco informadas.",
      detail:
        "Nem todo o produto barato tem procura ou qualidade comprovada. Aprender a verificar reputação e especificações poupa frustrações.",
    },
    {
      icon: DollarSign,
      title: "Ignorar os custos",
      description:
        "Transporte, taxas e outras despesas podem alterar o custo final do produto.",
      detail:
        "O preço anunciado na plataforma chinesa é apenas a primeira fração. É crucial estimar frete aéreo/marítimo, embalagem e desembaraço.",
    },
    {
      icon: Target,
      title: "Vender sem estratégia",
      description:
        "Conhecer o público e calcular a margem ajuda-te a tomar decisões mais conscientes.",
      detail:
        "Ter produto em Luanda sem saber a quem apresentar nem como precificar reduz a margem. Ter uma estratégia definida antes da compra muda o jogo.",
    },
  ];

  return (
    <section id="oportunidade" className="py-20 lg:py-28 bg-[#0c0c0c] border-y border-white/5 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FFC928]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFC928] uppercase">
            <span>Diagnóstico do Mercado</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Comprar Barato Não Significa Ter Lucro.
          </h2>

          <p className="text-base text-[#B7B7B7] leading-relaxed">
            Antes de escolher um produto, é importante compreender os custos, verificar os vendedores e analisar se existe uma oportunidade de revenda.
          </p>
        </div>

        {/* 3 Problem & Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-8 bg-[#141414] border border-[#FFC928]/15 rounded-2xl transition-all duration-300 hover:border-[#FFC928]/45 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#FFC928]/30 to-transparent group-hover:via-[#FFC928] transition-all" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#FFC928] mb-6 group-hover:border-[#FFC928]/40 group-hover:bg-[#FFC928]/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono text-[#7A7A7A] uppercase tracking-widest block mb-2">
                    0{idx + 1} // Ponto Crítico
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFC928] transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm font-medium text-[#E0E0E0] mb-3 leading-relaxed">
                    {card.description}
                  </p>

                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Closing Statement */}
        <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-b from-[#141414] to-[#111111] border border-[#FFC928]/30 text-center shadow-lg">
          <div className="inline-flex items-center gap-2 mb-2 text-[#FFC928]">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">A Regra de Ouro da Importação</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-white tracking-wide">
            “Pesquisa primeiro. Calcula depois. Decide com informação.”
          </p>
        </div>
      </div>
    </section>
  );
};
