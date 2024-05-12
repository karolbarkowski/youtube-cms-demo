import type { GlobalConfig } from 'payload/types'
import link, { Type as LinkType } from '../fields/link'

export type Type = {
  nav: {
    link: LinkType
  }[]
}

export const Header: GlobalConfig = {
  slug: 'header',
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
