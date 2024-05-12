import React from 'react'
import { Type as PageType } from '../../../../collections/Pages'
import RenderBlocks from '../../_components/RenderBlocks/RenderBlocks'
import LayoutDefault from '../../_components/PageLayouts/layoutDefault'
import { NextApiRequest, NextApiResponse } from 'next'
import RenderPageContent from '../../_components/RenderPageContent/RenderPageContent'

export type Props = {
  page?: PageType
}

async function fetchPage(slug: string) {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`
  const pageReq = await fetch(url)
  const pageData = await pageReq.json()
  return pageData
}

const Page = async (ctx: {
  params: { slug?: string }
  req: NextApiRequest
  res: NextApiResponse
}) => {
  const slug = ctx.params?.slug || 'home'
  const page = await fetchPage(slug)

  if (!page?.docs) {
    return <pre>PAGE NOT FOUND</pre>
  }

  return (
    <LayoutDefault>
      <RenderBlocks layout={page.docs[0].layout} />
      <RenderPageContent content={page.docs[0].content} />
    </LayoutDefault>
  )
}

export default Page
