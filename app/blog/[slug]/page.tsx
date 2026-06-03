import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { posts, getPost } from '@/lib/content/posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <PageHero eyebrow={`${post.category} · ${post.date}`} title={post.title} subtitle={post.excerpt} />

      <article className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[680px] space-y-6">
            {post.body.map((p, i) => (
              <p key={i} className="font-sans text-[18px] leading-[1.75] text-muted md:text-[19px]">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <CtaBlock
        heading="¿Te sirvió? Hay más en el newsletter."
        secondary={{ label: 'Ver casos', href: '/casos' }}
      />
    </>
  )
}
