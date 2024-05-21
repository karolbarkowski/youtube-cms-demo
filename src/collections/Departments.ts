import { CollectionConfig } from 'payload/types'
import slug from './fields/slug'
import image from './fields/image'

export const Department: CollectionConfig = {
  slug: 'departments',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'address',
      type: 'textarea',
      label: 'Address',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          label: 'Lat',
          required: true,
        },
        {
          name: 'longitude',
          type: 'number',
          label: 'Lng',
          required: true,
        },
      ],
    },
    image,
    slug,
  ],
}
