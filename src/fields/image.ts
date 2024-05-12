import { Field } from 'payload/types'

const image: Field = {
  name: 'image',
  type: 'upload',
  label: 'Featured Image',
  relationTo: 'media',
  required: true,
}

export default image
