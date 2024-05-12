import React from 'react'
import { Type } from './spacer.block'
import classes from './spacer.module.css'

const Spacer: React.FC<Omit<Type, 'blockType'>> = ({ size }) => {
  return <div className={`${classes.spacer} spacer=${size}`} />
}

export default Spacer
