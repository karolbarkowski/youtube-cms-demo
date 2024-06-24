import React, { Fragment } from 'react'
import { Product, ProductCategory } from '../../../payload/payload-types'
import Image from 'next/image'
import { decode, encode } from 'html-entities'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Price } from '../../_components/Price'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  console.log(product)

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-row items-start">
        {product.mediaImages.map((img, i) => (
          <Image key={i} src={img.url} width={100} height={100} alt={''} />
        ))}
      </div>
      <div>
        <h1>{product.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
        <AddToCartButton product={product} />
      </div>
    </div>

    /* 

        <Price product={product} button={false} />
        />
      </div> */
  )
}
