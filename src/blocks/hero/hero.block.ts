import image from '@/fields/image'
import { Block } from 'payload/types'

export type Type = {
  ctaText: string
  image: string
}

const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'ctaText',
      type: 'text',
      required: true,
    },
    image,
  ],
}

export default Hero
