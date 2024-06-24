import type { CollectionConfig } from 'payload/types'

import { admins } from '../../../access/admins'
import { Archive } from '../../../blocks/ArchiveBlock'
import { CallToAction } from '../../../blocks/CallToAction'
import { Content } from '../../../blocks/Content'
import { MediaBlock } from '../../../blocks/MediaBlock'
import { slugField } from '../../../fields/slug'
import { populateArchiveBlock } from '../../../hooks/populateArchiveBlock'
import { checkUserPurchases } from './access/checkUserPurchases'
import { beforeProductChange } from './hooks/beforeChange'
import { deleteProductFromCarts } from './hooks/deleteProductFromCarts'
import { revalidateProduct } from './hooks/revalidateProduct'
import { ProductSelect } from './ui/ProductSelect'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'stripeProductID', '_status'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/products/${doc.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [beforeProductChange],
    afterChange: [revalidateProduct],
    afterRead: [populateArchiveBlock],
    afterDelete: [deleteProductFromCarts],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
        {
          label: 'Product Details',
          fields: [
            {
              name: 'stripeProductID',
              label: 'Stripe Product',
              type: 'text',
              admin: {
                components: {
                  Field: ProductSelect,
                },
              },
            },
            {
              name: 'priceJSON',
              label: 'Price JSON',
              type: 'textarea',
              admin: {
                readOnly: true,
                hidden: true,
                rows: 10,
              },
            },
            {
              name: 'enablePaywall',
              label: 'Enable Paywall',
              type: 'checkbox',
            },
            {
              name: 'paywall',
              label: 'Paywall',
              type: 'blocks',
              access: {
                read: checkUserPurchases,
              },
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
            {
              name: 'erpId',
              type: 'text',
            },
            {
              name: 'price',
              type: 'number',
            },
            {
              name: 'pricePrevious',
              type: 'number',
            },
            {
              name: 'vat',
              type: 'number',
            },
            {
              name: 'weight',
              type: 'number',
            },
            {
              name: 'quantity',
              type: 'number',
            },
            {
              name: 'quantityMin',
              type: 'number',
            },
            {
              name: 'quantityStep',
              type: 'number',
            },
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'code',
              type: 'text',
            },
            {
              name: 'ean',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'keywords',
              type: 'text',
            },
            {
              name: 'bestseller',
              type: 'checkbox',
            },
            {
              name: 'mediaVideo',
              type: 'array',
              fields: [
                {
                  name: 'url',
                  type: 'text',
                },
              ],
            },
            {
              name: 'mediaImages',
              type: 'array',
              fields: [
                {
                  name: 'url',
                  type: 'text',
                },
                {
                  name: 'isMain',
                  type: 'checkbox',
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoTitle',
              label: 'Title',
              type: 'text',
            },
            {
              name: 'seoDescription',
              label: 'description',
              type: 'textarea',
            },
            {
              name: 'seoImageUrl',
              label: 'Image Url',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'product-category',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'manufacturer',
      type: 'relationship',
      relationTo: 'manufacturer',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'warehouse',
      type: 'relationship',
      relationTo: 'warehouses',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    slugField(),
    {
      name: 'skipSync',
      label: 'Skip Sync',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
        readOnly: true,
        hidden: true,
      },
    },
  ],
}

export default Products
