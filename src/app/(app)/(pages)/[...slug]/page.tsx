import React from 'react'
import { Type as PageType } from '../../../../collections/Pages'
import RenderBlocks from '../../_components/RenderBlocks/RenderBlocks'
import LayoutDefault from '../../_components/PageLayouts/layoutDefault'
import { NextApiRequest, NextApiResponse } from 'next'
import RenderPageContent from '../../_components/RenderPageContent/RenderPageContent'
import fetchPage from '@/utilities/fetchPage'
import { notFound } from 'next/navigation'

export type Props = {
  page?: PageType
}

const Page = async (ctx: {
  params: { slug?: string }
  req: NextApiRequest
  res: NextApiResponse
}) => {
  const page = await fetchPage(ctx.params?.slug || '/')

  if (!page) {
    return notFound()
  }

  return (
    <LayoutDefault>
      <RenderBlocks layout={page.layout} />
      {/* <RenderPageContent content={page.docs[0].content} /> */}
    </LayoutDefault>
  )
}

export default Page
