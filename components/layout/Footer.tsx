import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import {
  site,
  cta,
  footerNav,
  footerIndustries,
} from '@/lib/site'

function ColumnTitle({ children }: { children: string }) {
  return (
    <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-hint">
      {children}
    </p>
  )
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <Link
        href={href}
        className="font-sans text-[15px] text-muted transition-colors hover:text-offwhite"
      >
        {children}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-carbon py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link href="/" aria-label="Morben, inicio" className="rounded-sm">
              <Logo size={30} />
            </Link>
            <p className="mt-6 max-w-xs font-sans text-[15px] leading-[1.6] text-muted">
              Operational AI Company. Construimos operación nueva con IA sobre los
              sistemas que las empresas paraguayas ya tienen. En semanas, no en años.
            </p>
            <p className="mt-6 font-sans text-[15px] text-muted">
              {site.location} <span aria-hidden="true">🇵🇾</span>
            </p>
          </div>

          {/* Navegación */}
          <div>
            <ColumnTitle>Navegación</ColumnTitle>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Industrias */}
          <div>
            <ColumnTitle>Industrias</ColumnTitle>
            <ul className="space-y-3">
              {footerIndustries.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <ColumnTitle>Contacto</ColumnTitle>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-sans text-[15px] text-muted transition-colors hover:text-offwhite"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] text-muted transition-colors hover:text-offwhite"
                >
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] text-muted transition-colors hover:text-offwhite"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] text-muted transition-colors hover:text-offwhite"
                >
                  Instagram {site.social.instagramHandle}
                </a>
              </li>
            </ul>
            <Link
              href={site.agendar}
              className="mt-6 inline-flex items-center gap-2 font-sans text-[15px] text-orange transition-colors hover:text-orange-light"
            >
              {cta.primary}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[13px] text-hint">
            © 2026 Morben. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {/* TODO: redactar páginas legales antes del lanzamiento */}
            <Link
              href="/privacidad"
              className="font-sans text-[13px] text-hint transition-colors hover:text-muted"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="font-sans text-[13px] text-hint transition-colors hover:text-muted"
            >
              Términos
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
