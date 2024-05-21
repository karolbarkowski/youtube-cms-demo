import { CollectionConfig } from 'payload/types'
import slug from './fields/slug'
import meta from './fields/meta'
import image from './fields/image'

export const Study: CollectionConfig = {
  slug: 'studies',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },

    //sidebar fields
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'studies-categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'client',
      type: 'text',
      label: 'Client',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      admin: {
        position: 'sidebar',
      },
    },
    image,
    slug,
    meta,
  ],
}
