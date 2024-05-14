import React from 'react'

type Props = {
  children?: React.ReactNode
}

const LayoutDefault: React.FC<Props> = ({ children }) => <main>{children}</main>

export default LayoutDefault
