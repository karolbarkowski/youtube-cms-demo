import { CollectionConfig } from 'payload/types'

const isAdmin = () => true

export const SubscribeFormSubmission: CollectionConfig = {
  slug: 'subscribe-form-submissions',
  access: {
    // Anyone can create, even unauthenticated
    create: () => true,
    // No one can update, ever
    update: () => false,
    // Only admins can read
    read: isAdmin,
    // No one can delete, ever
    delete: () => false,
  },
  hooks: {
    afterChange: [
      () => {
        // Send an email to the client
        // with the content of the message
      },
    ],
  },
  fields: [
    {
      type: 'text',
      name: 'email',
      label: 'Subscriber Email',
    },
  ],
}
