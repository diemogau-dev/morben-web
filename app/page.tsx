import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { ManifestoExcerpt } from '@/components/sections/ManifestoExcerpt'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { CasesPreview } from '@/components/sections/CasesPreview'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { Integrations } from '@/components/sections/Integrations'
import { IndustriesPreview } from '@/components/sections/IndustriesPreview'
import { TeamPreview } from '@/components/sections/TeamPreview'
import { ClosingCTA } from '@/components/sections/ClosingCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ManifestoExcerpt />
      <WhatWeDo />
      <CasesPreview />
      <HowWeWork />
      <Integrations />
      <IndustriesPreview />
      <TeamPreview />
      <ClosingCTA />
    </>
  )
}
