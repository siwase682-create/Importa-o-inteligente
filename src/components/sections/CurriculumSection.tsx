import React, { useState } from "react";
import {
  Compass,
  Store,
  UserCheck,
  PackageCheck,
  Calculator,
  Share2,
  Info,
  ChevronRight,
} from "lucide-react";

export const CurriculumSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const modules = [
    {
      icon: Compass,
      title: "Pesquisa de Produtos",
      description:
        "Aprende a identificar produtos que merecem ser analisados para uma possível revenda.",
      takeaways: [
        "Critérios de volume, peso e valor agregado",
        "Como filtrar itens com boa aceitação em Angola",
        "Análise de tendências sem cair em modismos passageiros",
      ],
    },
    {
      icon: Store,
      title: "Xianyu / Goofish",
      description:
        "Conhece a plataforma e aprende os cuidados básicos ao pesquisar anúncios.",
      takeaways: [
        "Navegação na interface da plataforma chinesa",
        "Tradução e leitura correta da descrição dos anúncios",
        "Diferenciação entre novos, seminovos e lotes de fábrica",
      ],
    },
    {
      icon: UserCheck,
      title: "Avaliação de Vendedores",
      description:
        "Descobre aspetos a verificar antes de decidir comprar.",
      takeaways: [
        "Pontuação de reputação e autenticidade da loja",
        "Análise de fotos reais fornecidas por outros compradores",
        "Sinais de alerta para evitar transações inseguras",
      ],
    },
    {
      icon: PackageCheck,
      title: "Hoobuy e Processo de Compra",
      description:
        "Compreende o papel de um agente de compra e as etapas gerais do processo.",
      takeaways: [
        "Como funciona a intermediação de agentes de compras",
        "Armazenamento e consolidação no entreposto chinês",
        "Etapas de conferência e fotografia antes do envio internacional",
      ],
    },
    {
      icon: Calculator,
      title: "Cálculo de Custos",
      description:
        "Organiza o preço do produto, transporte e outras despesas para estimar o custo total.",
      takeaways: [
        "Câmbio de Yuan/Dólar para Kwanzas (Kz)",
        "Frete aéreo por quilo vs frete marítimo por CBM",
        "Cálculo de margem real de revenda sem surpresas",
      ],
    },
    {
      icon: Share2,
      title: "Preparação para Revenda",
      description:
        "Explora formas de apresentar produtos, comunicar com clientes e organizar a tua estratégia.",
      takeaways: [
        "Canais de venda eficientes em Luanda e províncias",
        "Posicionamento claro e fotografias que valorizam o item",
        "Estratégia de pré-reserva para gerir fluxo de caixa",
      ],
    },
  ];

  return (
    <section id="conteudo" className="py-20 lg:py-28 bg-[#080808] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#FFC928]/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFC928] uppercase">
            <span>Estrutura Didática</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            O Que Vais Aprender no Guia?
          </h2>

          <p className="text-base text-[#B7B7B7] leading-relaxed">
            Um guia prático para compreender as principais etapas da pesquisa e preparação de uma importação.
          </p>
        </div>

        {/* 6 Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            const isSelected = activeCard === index;
            return (
              <div
                key={mod.title}
                onClick={() => setActiveCard(isSelected ? null : index)}
                className={`relative p-6 sm:p-7 rounded-2xl bg-[#111111] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-[#FFC928] shadow-lg shadow-[#FFC928]/10 bg-[#141414]"
                    : "border-white/10 hover:border-[#FFC928]/40 hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#191919] border border-[#FFC928]/25 text-[#FFC928] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#7A7A7A]">
                      Etapa 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#FFC928] transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B7B7B7] leading-relaxed mb-4">
                    {mod.description}
                  </p>

                  {/* Expandable Key Topics */}
                  <div className="pt-3 border-t border-white/5 space-y-1.5">
                    {mod.takeaways.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#8A8A8A]">
                        <span className="text-[#FFC928] font-bold text-xs leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-medium text-[#FFC928]">
                  <span>{isSelected ? "Fechar detalhes" : "Ver detalhes da etapa"}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isSelected ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Callout */}
        <div className="mt-12 max-w-xl mx-auto flex items-center justify-center gap-3 p-4 rounded-xl bg-[#111111] border border-[#FFC928]/25 text-center">
          <Info className="w-4 h-4 text-[#FFC928] shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-white/95">
            Aprende a analisar melhor antes de comprometer o teu dinheiro.
          </span>
        </div>
      </div>
    </section>
  );
};
