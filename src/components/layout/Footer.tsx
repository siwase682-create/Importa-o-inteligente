import React from "react";
import { siteConfig } from "../../config/siteConfig";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#060606] text-[#B7B7B7] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div>
            <span className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFC928]" />
              {siteConfig.brandName}
            </span>
            <p className="mt-1 text-xs text-[#7A7A7A] max-w-sm">
              Capacitação prática e estratégica para empreendedores e compradores em Angola.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-[#B7B7B7]">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="hover:text-[#FFC928] transition-colors"
            >
              Início
            </a>
            <a
              href="#oportunidade"
              onClick={(e) => handleNavClick(e, "#oportunidade")}
              className="hover:text-[#FFC928] transition-colors"
            >
              Oportunidade
            </a>
            <a
              href="#conteudo"
              onClick={(e) => handleNavClick(e, "#conteudo")}
              className="hover:text-[#FFC928] transition-colors"
            >
              Conteúdo
            </a>
            <a
              href="#recursos"
              onClick={(e) => handleNavClick(e, "#recursos")}
              className="hover:text-[#FFC928] transition-colors"
            >
              Recursos
            </a>
            <a
              href="#oferta"
              onClick={(e) => handleNavClick(e, "#oferta")}
              className="hover:text-[#FFC928] transition-colors"
            >
              Garantia & FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-center md:text-left">
          <p className="text-[11px] leading-relaxed text-[#7A7A7A]">
            Aviso Legal: O guia Importação Inteligente é um produto digital estritamente educacional. O processo de importação envolve custos de frete, taxas de desembaraço aduaneiro, variações cambiais e riscos comerciais que variam caso a caso. Não prometemos nem garantimos lucros fixos ou resultados pré-determinados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] text-[#7A7A7A]">
            <p>© {currentYear} {siteConfig.brandName}. Todos os direitos reservados.</p>
            <p className="text-[#666666]">Feito para a nova geração do comércio em Angola.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
