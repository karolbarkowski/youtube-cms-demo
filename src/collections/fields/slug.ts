import { Field } from 'payload/types'
import formatSlug from '../../utilities/format-slug'

const slug: Field = {
  name: 'slug',
  label: 'Slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [formatSlug('title')],
  },
}

export default slug
