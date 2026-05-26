'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { site } from '@/lib/site'

function ChannelLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-orange">{children}</p>
  )
}

export function ContactChannels() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard no disponible */
    }
  }

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
      <div>
        <ChannelLabel>Email</ChannelLabel>
        <div className="mt-3 flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="font-sans text-[16px] text-offwhite transition-colors hover:text-orange"
          >
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copiar email"
            className="rounded-sm text-hint transition-colors hover:text-orange"
          >
            {copied ? (
              <Check className="h-4 w-4 text-orange" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div>
        <ChannelLabel>WhatsApp</ChannelLabel>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block font-sans text-[16px] text-offwhite transition-colors hover:text-orange"
        >
          {site.whatsappDisplay}
        </a>
      </div>

      <div>
        <ChannelLabel>Ubicación</ChannelLabel>
        <p className="mt-3 font-sans text-[16px] text-offwhite">{site.location}</p>
      </div>
    </div>
  )
}
