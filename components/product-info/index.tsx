import React from 'react'
import { IProductInfoProps } from './types'

const ProductInfo = ({ title, desciption, isSoldOut }: IProductInfoProps) => {
  return (
    <>
      <h4 className='title is-2'>{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: desciption }} />
      <p className='mt-4'>
        <button className='button is-rounded is-primary' disabled={isSoldOut}>
          {isSoldOut ? 'Sold out' : 'Buy me'}
        </button>
      </p>
    </>
  )
}

export default ProductInfo
