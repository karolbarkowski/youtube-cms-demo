'use client'
import React, { useEffect, useState } from 'react'

import { Page, Product } from '../../../payload/payload-types'
import { productsBestsellers, productsLatest } from '../../_api/products'
import Image from 'next/image'

type Props = Extract<Page['layout'][0], { blockType: 'productsSlider' }>

export const ProductsSliderBlock: React.FC<Props> = props => {
  const { ProductsCount, ListType } = props
  const [products, setProducts] = useState<Product[]>([])

  const getHeader = () => {
    switch (ListType) {
      case 'Bestsellers':
        return <h4>Bestsellers</h4>
      case 'Recent':
        return <h4>Recently Added</h4>
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      let products = []
      switch (ListType) {
        case 'Bestsellers':
          products = await productsBestsellers(ProductsCount)
        case 'Recent':
          products = await productsLatest(ProductsCount)
      }
      console.log(products)
      setProducts(products)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <div>
      {getHeader()}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        {products.map(p => (
          <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-end' }}
            >
              {p.mediaImages.map(i => (
                <Image
                  src={i.url}
                  alt="product image"
                  width={i.isMain ? 100 : 40}
                  height={i.isMain ? 100 : 40}
                />
              ))}
            </div>

            <p>
              <strong>{p.name}</strong>
            </p>
            <p>{p.vat}</p>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
