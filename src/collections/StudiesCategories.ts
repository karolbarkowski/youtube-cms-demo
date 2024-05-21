import { CollectionConfig } from 'payload/types'
import slug from './fields/slug'

export const StudyCategory: CollectionConfig = {
  slug: 'studies-categories',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: true,
    },
    slug,
  ],
}
