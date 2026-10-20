import React from "react";
import { Quote, AlertCircle } from "lucide-react";
import scenarioImage1 from "../../assets/images/user_scenario_costs_1792492720250.jpg";
import scenarioImage2 from "../../assets/images/user_scenario_criteria_1792492720941.jpg";
import scenarioImage3 from "../../assets/images/user_scenario_strategy_1792492721393.jpg";

export const SocialProofSection: React.FC = () => {
  const scenarios = [
    {
      image: scenarioImage1,
      label: "OBJETIVO DE APRENDIZAGEM",
      headline: "Compreender os custos",
      text: "“Quero aprender a organizar o preço do produto, o transporte e outras despesas antes de decidir comprar.”",
      attribution: "Exemplo ilustrativo — pessoa interessada em importação.",
      tag: "Gestão Orçamental",
    },
    {
      image: scenarioImage2,
      label: "OBJETIVO DE APRENDIZAGEM",
      headline: "Pesquisar com mais critério",
      text: "“Quero saber que aspetos devo verificar ao analisar um produto e o seu vendedor.”",
      attribution: "Exemplo ilustrativo — pessoa interessada em revenda.",
      tag: "Auditoria & Critério",
    },
    {
      image: scenarioImage3,
      label: "OBJETIVO DE APRENDIZAGEM",
      headline: "Preparar a minha estratégia",
      text: "“Quero organizar os próximos passos para pesquisar produtos e avaliar oportunidades de revenda.”",
      attribution: "Exemplo ilustrativo — pessoa interessada em empreendedorismo.",
      tag: "Planeamento Estratégico",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#080808] relative">
      {/* Ambient background soft light */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FFC928]/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFC928] uppercase">
            <span>Cenários Reais de Aplicação</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Aprender Antes de Investir Faz a Diferença.
          </h2>

          <p className="text-base text-[#B7B7B7] leading-relaxed">
            Identifica as necessidades mais comuns de quem procura dar os primeiros passos com método e segurança.
          </p>
        </div>

        {/* 3 Illustrative Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scen, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#FFC928]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
            >
              <div>
                {/* Header with portrait and label */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFC928]/40 shrink-0">
                    <img
                      src={scen.image}
                      alt={scen.headline}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="56"
                      height="56"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#FFC928] uppercase block">
                      {scen.label}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {scen.headline}
                    </h3>
                  </div>
                </div>

                {/* Quotation icon & Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#FFC928]/20 absolute -top-3 -left-1 pointer-events-none" />
                  <p className="text-sm text-[#D1D1D1] italic leading-relaxed pt-3 relative z-10">
                    {scen.text}
                  </p>
                </div>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#7A7A7A]">
                <span>{scen.attribution}</span>
                <span className="text-[10px] font-semibold text-[#B7B7B7] bg-[#1a1a1a] px-2 py-0.5 rounded">
                  {scen.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-12 max-w-xl mx-auto flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-[#0e0e0e] border border-white/10 text-center">
          <AlertCircle className="w-4 h-4 text-[#FFC928] shrink-0" />
          <p className="text-xs text-[#8A8A8A]">
            Os exemplos apresentados são ilustrativos, não são depoimentos reais de clientes.
          </p>
        </div>
      </div>
    </section>
  );
};
