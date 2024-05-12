import image from '@/fields/image'
import { Block } from 'payload/types'

export type Type = {
  ctaText: string
  image: any
  blockType: 'hero'
}

const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
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
