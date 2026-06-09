import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { WhatWeAre } from '@/components/sections/WhatWeAre'
import { Compounding } from '@/components/sections/Compounding'
import { ManifestoExcerpt } from '@/components/sections/ManifestoExcerpt'
import { CasesPreview } from '@/components/sections/CasesPreview'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { Integrations } from '@/components/sections/Integrations'
import { Faq } from '@/components/sections/Faq'
import { ClosingCTA } from '@/components/sections/ClosingCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <WhatWeAre />
      <Compounding />
      <ManifestoExcerpt />
      <CasesPreview />
      <HowWeWork />
      <Integrations />
      <Faq />
      <ClosingCTA />
    </>
  )
}
