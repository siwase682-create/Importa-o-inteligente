import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Oportunidade", href: "#oportunidade" },
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Recursos", href: "#recursos" },
    { label: "Perguntas", href: "#oferta" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928] group-hover:scale-125 transition-transform" />
            <span className="group-hover:text-[#FFC928] transition-colors">
              {siteConfig.productName}
            </span>
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B7B7B7]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[#FFC928] gold-glow-hover"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenCheckout}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#E0A800] to-[#FFC928] rounded-full hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#E0A800]/25 whitespace-nowrap shrink-0"
            >
              <span>Quero o Guia</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-[#B7B7B7] hover:text-[#FFC928] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e]/98 border-b border-[#FFC928]/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2.5 text-base font-medium text-[#B7B7B7] hover:text-[#FFC928] border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold text-black bg-gradient-to-r from-[#E0A800] to-[#FFC928] rounded-xl shadow-lg shadow-[#E0A800]/25"
            >
              <span>Quero o Guia</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
