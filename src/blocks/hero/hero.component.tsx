import React from 'react'
import { Type } from './hero.block'
import classes from './hero.module.css'

const Hero: React.FC<Type> = ({ ctaText, image }) => {
  return (
    <div className={classes.hero}>
      <h1>{ctaText}</h1>
      <pre>{image}</pre>
    </div>
  )
}

export default Hero
