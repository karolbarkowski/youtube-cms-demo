import React from 'react'

type Props = {
  content: any
}

const RenderPageContent: React.FC<Props> = ({ content }) => (
  <div>
    {content.children.map((child, i) => {
      return <div>{child.type}</div>
    })}
  </div>
)

export default RenderPageContent
