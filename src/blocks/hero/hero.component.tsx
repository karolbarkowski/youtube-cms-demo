import React from 'react'
import { Type } from './hero.block'
import classes from './hero.module.css'
import Image from 'next/image'

const Hero: React.FC<Omit<Type, 'blockType'>> = ({ ctaText, image }) => {
  return (
    <div className={classes.hero}>
      <h1>{ctaText}</h1>
      <Image src={image.url} width={300} height={300} alt={image.alt} />
      <small>{image.description}</small>
    </div>
  )
}

export default Hero
