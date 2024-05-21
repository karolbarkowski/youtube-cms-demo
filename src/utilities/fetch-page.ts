import 'server-only'
import { notFound } from 'next/navigation'
import { getPayload as getPayloadInstance } from 'payload'
import configPromise from '@payload-config'
import { Page } from '@/payload-types'

async function getPayload(): ReturnType<typeof getPayloadInstance> {
  return getPayloadInstance({ config: await configPromise })
}

const fetchPage = async (slug: string | string[]): Promise<Page | null> => {
  if (Array.isArray(slug)) slug = slug.join('/')

  const payload = await getPayload()

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    depth: 3,
  })

  if (docs?.length === 0) {
    notFound()
  }

  const page = docs?.at(0)
  return page || null
}

export default fetchPage
