import React from 'react'
import { Layout } from '../../../../collections/Pages'
import { componentsMap } from '../../../../blocks'

type Props = {
  layout: Layout[]
}

const RenderBlocks: React.FC<Props> = ({ layout }) => (
  <div>
    {layout.map((block, i) => {
      const Block: React.FC<any> = componentsMap[block.blockType]

      if (Block) {
        return (
          <section key={i}>
            <Block {...block} />
          </section>
        )
      }

      return null
    })}
  </div>
)

export default RenderBlocks
