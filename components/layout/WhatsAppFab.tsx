import { WhatsAppIcon } from '@/components/brand/WhatsAppIcon'
import { site } from '@/lib/site'

// Botón flotante de WhatsApp, presente en toda la web. Usa un verde apagado
// (reconocible como WhatsApp pero sin romper la estética carbón + naranja).
export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#1E8E5A] py-3 pl-3 pr-3 text-white shadow-lg shadow-black/30 ring-1 ring-white/10 transition-colors hover:bg-[#23A368] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap pr-1 font-sans text-[15px] font-medium opacity-0 transition-all duration-300 group-hover:max-w-[180px] group-hover:opacity-100 sm:inline">
        Hablá con nosotros
      </span>
    </a>
  )
}
