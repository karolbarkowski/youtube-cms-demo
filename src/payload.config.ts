import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { SubscribeFormSubmission } from './collections/SubscribeFormSubmissions'
import { Study } from './collections/Studies'
import { StudyCategory } from './collections/StudiesCategories'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { Department } from './collections/Departments'
import Hero from './blocks/hero/hero.block'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    autoLogin: {
      email: 'karol.barkowski@gmail.com',
      password: 'MKB1983!!',
    },
    dateFormat: 'dd.MM.yyyy',
  },
  collections: [Pages, Users, Study, StudyCategory, Media, SubscribeFormSubmission, Department],
  globals: [Header, Footer],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      // BlocksFeature({
      // blocks: [Hero],
      // }),
    ],
  }),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
