export interface Post {
  slug: string
  title: string
  category: string
  date: string
  excerpt?: string
  body: string[]
}

// TODO: cargar los artículos del blog cuando estén listos.
export const posts: Post[] = []

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
