import type { GlobalConfig } from 'payload/types'
import link, { Type as LinkType } from '../fields/link'

export type Type = {
  nav: {
    link: LinkType
  }[]
}

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [link],
    },
  ],
}
