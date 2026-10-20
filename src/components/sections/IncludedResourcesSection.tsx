import React from "react";
import {
  BookText,
  Lightbulb,
  CheckSquare,
  Truck,
  Calculator,
  MessageSquareCode,
  HelpCircle,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import physicalBookImage from "../../assets/images/ebook_physical_book.png";

export const IncludedResourcesSection: React.FC = () => {
  const resources = [
    {
      icon: BookText,
      badge: "Material Base",
      title: "Guia principal: Importação Inteligente",
      desc: "Manual estruturado com todas as fases da importação da China explicadas passo a passo.",
    },
    {
      icon: Lightbulb,
      badge: "Pesquisa Prática",
      title: "100 ideias de produtos para pesquisar",
      desc: "Lista de categorias e produtos populares com alto potencial de análise no contexto angolano.",
    },
    {
      icon: CheckSquare,
      badge: "Verificação",
      title: "Checklist antes da compra",
      desc: "Lista de pontos essenciais para auditar antes de transferir qualquer valor para o fornecedor.",
    },
    {
      icon: Truck,
      badge: "Logística",
      title: "Checklist antes do envio",
      desc: "Controlo de conferência, pesagem, embalagem e escolha de modalidade de frete até Luanda.",
    },
    {
      icon: Calculator,
      badge: "Financeiro",
      title: "Modelo de calculadora de custos",
      desc: "Fórmula organizada para projetar preço base, taxas, frete estimado e margem de revenda.",
    },
    {
      icon: MessageSquareCode,
      badge: "Comunicação",
      title: "Scripts de vendas para WhatsApp",
      desc: "Modelos de respostas prontas para tirar dúvidas de clientes, negociar e fechar pedidos.",
    },
    {
      icon: HelpCircle,
      badge: "Referência",
      title: "Perguntas frequentes e glossário",
      desc: "Termos aduaneiros e de importação (FOB, CIF, CBM, Yuan, Tracking) traduzidos de forma clara.",
    },
    {
      icon: CalendarCheck,
      badge: "Execução",
      title: "Plano de ação de 90 dias",
      desc: "Cronograma prático para estruturar o teu estudo, as primeiras pesquisas e o teste de produto.",
    },
  ];

  return (
    <section id="recursos" className="py-20 lg:py-28 bg-[#0c0c0c] border-y border-white/5 relative">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E0A800]/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FFC928] uppercase">
            <span>Arsenal Completo</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Mais do Que um Guia: Ferramentas Para Te Organizar.
          </h2>

          <p className="text-base text-[#B7B7B7] leading-relaxed">
            Além dos conteúdos principais, o material inclui recursos práticos para apoiar o teu processo de aprendizagem.
          </p>
        </div>

        {/* Central Layout: Physical Book Mockup + 8 Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Central Physical Book Mockup Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm group">
              {/* Outer Golden Aura */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#E0A800]/30 via-[#FFC928]/20 to-[#E0A800]/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#161616] to-[#0f0f0f] border border-[#FFC928]/35 shadow-2xl p-4 flex flex-col items-center">
                <img
                  src={physicalBookImage}
                  alt="Edição do Livro Guia Importação Inteligente — Da China para Angola com Lucro"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[460px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                <div className="pt-4 pb-2 text-center w-full border-t border-white/10 mt-3">
                  <span className="text-xs font-bold text-[#FFC928] uppercase tracking-wider block">
                    Guia Prático e Metodologia
                  </span>
                  <p className="text-xs text-[#B7B7B7] mt-1">
                    Aprende a importar no Xianyu (Goofish) e a revender com segurança em Angola.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Resources Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((res) => {
              const Icon = res.icon;
              return (
                <div
                  key={res.title}
                  className="p-5 rounded-xl bg-[#141414] border border-white/10 hover:border-[#FFC928]/40 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#191919] border border-[#FFC928]/20 flex items-center justify-center text-[#FFC928]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold text-[#FFC928] bg-[#FFC928]/10 px-2 py-0.5 rounded border border-[#FFC928]/20">
                        {res.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                      {res.title}
                    </h3>

                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      {res.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mandatory Transparency Note */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-[#111111] border border-white/10 text-center flex items-center justify-center gap-2.5 text-xs text-[#8A8A8A]">
          <ShieldCheck className="w-4 h-4 text-[#FFC928] shrink-0" />
          <span>
            Os recursos ajudam-te a organizar a pesquisa e o planeamento; não garantem vendas ou lucros.
          </span>
        </div>
      </div>
    </section>
  );
};
