import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IProductCardProps } from './types'

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Link
      href={`/product-details/${encodeURIComponent(product.MoonpigProductNo)}`}
    >
      <div data-testid='product-card' className='card product-card is-shady'>
        <div className='card-image'>
          <figure className='image'>
            <Image
              src={product.ProductImage.Link.Href}
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='contain'
              loading='lazy'
              alt={product.ProductImage.Link.Title}
            />
          </figure>
        </div>
        <div className='card-content'>
          <div className='content'>
            <h6>{product.Title}</h6>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
