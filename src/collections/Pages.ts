import type { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'
import meta from '../fields/meta'
import Spacer, { Type as SpacerType } from '@/blocks/spacer/spacer.block'
import Hero, { Type as HeroType } from '@/blocks/hero/hero.block'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export type Layout = SpacerType | HeroType

export type Type = {
  title: string
  slug: string
  layout: Layout[]
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [Spacer, Hero],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    meta,
    slug,
  ],
}
