// src/types.d.ts
interface DescriptionInterface {
  title: string
  texts: string[]
  image: string
  references: string[]
}

export interface CardProps {
  data: {
    title: string
    subtext: string
    categories: string[]
    author: string
    description: DescriptionInterface
  }
}
