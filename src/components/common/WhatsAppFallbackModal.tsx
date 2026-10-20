import React, { useState } from "react";
import { MessageSquare, X, Copy, Check, ExternalLink } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

interface WhatsAppFallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export const WhatsAppFallbackModal: React.FC<WhatsAppFallbackModalProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  const [copied, setCopied] = useState(false);
  const textToCopy = message || siteConfig.whatsappDefaultMessage;

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
    >
      <div className="relative w-full max-w-md p-6 bg-[#121212] border border-[#FFC928]/30 rounded-2xl shadow-2xl shadow-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 p-2 text-[#B7B7B7] hover:text-[#FFC928] transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC928]/50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFC928]/10 text-[#FFC928] border border-[#FFC928]/25">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 id="whatsapp-modal-title" className="text-lg font-bold text-white">
              Contacto via WhatsApp
            </h3>
            <span className="text-xs text-[#B7B7B7]">
              {siteConfig.productName}
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-4 text-sm text-[#B7B7B7]">
          <p>
            O canal de atendimento WhatsApp está pré-configurado. Para começar o atendimento, a mensagem padrão pronta para envio é:
          </p>

          <div className="p-3 bg-[#080808] border border-white/10 rounded-xl text-white/90 text-xs font-mono leading-relaxed relative">
            {textToCopy}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#191919] hover:bg-[#222222] text-white border border-white/15 rounded-xl text-xs font-semibold transition-all hover:border-[#FFC928]/40"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Mensagem copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#FFC928]" />
                  <span>Copiar Mensagem</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3 bg-[#FFC928]/5 border border-[#FFC928]/20 rounded-xl text-xs text-[#FFC928]/90">
            <p className="font-semibold mb-1">Nota para o Administrador:</p>
            <p className="text-[#B7B7B7]">
              Para ligar diretamente ao teu número de WhatsApp comercial, define a variável <code className="text-[#FFC928] bg-black/40 px-1 py-0.5 rounded">whatsappNumber</code> no ficheiro <code className="text-[#FFC928] bg-black/40 px-1 py-0.5 rounded">src/config/siteConfig.ts</code>.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-[#E0A800] to-[#FFC928] text-black font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-md shadow-[#E0A800]/20"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
