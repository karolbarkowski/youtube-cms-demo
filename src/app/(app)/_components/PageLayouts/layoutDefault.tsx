import React from 'react'
import classes from './layoutDefault.module.scss'

type Props = {
  children?: React.ReactNode
}

const LayoutDefault: React.FC<Props> = ({ children }) => (
  <>
    <div className={classes.layoutDefault}>{children}</div>
    <footer>
      <h1>FOOTER</h1>
    </footer>
  </>
)

export default LayoutDefault
