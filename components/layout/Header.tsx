'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/Button'
import { navLinks, cta, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-carbon/80 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Morben — inicio" className="rounded-sm">
          <Logo size={26} />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-sans text-[15px] transition-colors hover:text-offwhite',
                isActive(link.href) ? 'text-orange' : 'text-muted',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={site.calendly} variant="outline" external>
            {cta.header}
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="rounded-sm p-1 text-offwhite md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-carbon transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between container-px">
          <Logo size={26} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="rounded-sm p-1 text-offwhite"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav
          aria-label="Navegación móvil"
          className="flex flex-1 flex-col justify-center gap-2 container-px"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-display text-3xl font-semibold tracking-[-0.01em]',
                isActive(link.href) ? 'text-orange' : 'text-offwhite',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="container-px pb-12">
          <ButtonLink
            href={site.calendly}
            variant="primary"
            size="lg"
            external
            className="w-full"
          >
            {cta.header}
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
