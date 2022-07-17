import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductInfo from './index'

describe('Product-info', () => {
  test('should display product title', () => {
    render(
      <ProductInfo title={'product title'} desciption={''} isSoldOut={false} />,
    )
    expect(screen.getByText('product title')).toBeInTheDocument()
  })

  test('should display product description', () => {
    render(
      <ProductInfo
        title={'product title'}
        desciption={'<p>product description<//p>'}
        isSoldOut={false}
      />,
    )
    expect(screen.getByText('product description')).toBeInTheDocument()
  })

  test('should show buy me button if in stock', () => {
    render(
      <ProductInfo
        title={'product title'}
        desciption={'<p>product description<//p>'}
        isSoldOut={false}
      />,
    )

    const buyButton = screen.getByRole('button', { name: /Buy me/i })
    expect(buyButton).toBeInTheDocument()
    expect(buyButton).not.toBeDisabled()
  })

  test('should show out of stock button if not in stock ', () => {
    render(
      <ProductInfo
        title={'product title'}
        desciption={'<p>product description<//p>'}
        isSoldOut={true}
      />,
    )

    const buyButton = screen.getByRole('button', { name: /Sold out/i })
    expect(buyButton).toBeInTheDocument()
    expect(buyButton).toBeDisabled()
  })
})
