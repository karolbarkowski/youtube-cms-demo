import React from 'react'
import { Type as PageType } from '../../../../collections/Pages'
import RenderBlocks from '../../../../utilities/blocks-renderer'
import LayoutDefault from '../../_components/PageLayouts/layoutDefault'
import { NextApiRequest, NextApiResponse } from 'next'
import fetchPage from '@/utilities/fetch-page'
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
    </LayoutDefault>
  )
}

export default Page
