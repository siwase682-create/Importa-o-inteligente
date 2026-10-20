import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppChatUrl } from "../../config/siteConfig";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(getWhatsAppChatUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:block transition-all duration-300 transform ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <div className="py-1.5 px-3 bg-[#111111] text-[#FFC928] border border-[#FFC928]/30 rounded-lg text-xs font-semibold shadow-xl whitespace-nowrap">
          Falar no WhatsApp: 928 230 620
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Conversar pelo WhatsApp no 928230620"
        className="relative group p-4 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-xl shadow-black/60 border border-[#25D366]/40 hover:scale-105 active:scale-95 transition-transform animate-soft-float focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <span className="sr-only">Conversar pelo WhatsApp</span>
        {/* Subtle glowing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping -z-10 opacity-75" />
        <MessageCircle className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
};
