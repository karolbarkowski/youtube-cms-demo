import React from 'react'
import { Layout } from '../collections/Pages'
import { componentsMap } from '../blocks'

const RenderBlocks: React.FC = ({ layout }: { layout: Layout }) => (
  <div>
    {layout.map((block, i) => {
      const Block: React.FC<any> = componentsMap[block.blockType]

      return Block ? <Block key={i} {...block} /> : null
    })}
  </div>
)

export default RenderBlocks
