import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { ManifestoExcerpt } from '@/components/sections/ManifestoExcerpt'
import { WhatWeAre } from '@/components/sections/WhatWeAre'
import { Products } from '@/components/sections/Products'
import { CasesPreview } from '@/components/sections/CasesPreview'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { Faq } from '@/components/sections/Faq'
import { ClosingCTA } from '@/components/sections/ClosingCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ManifestoExcerpt />
      <WhatWeAre />
      <Products />
      <CasesPreview />
      <HowWeWork />
      <Faq />
      <ClosingCTA />
    </>
  )
}
