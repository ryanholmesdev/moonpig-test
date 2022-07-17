import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from './index'
import { productsTestData } from '../../tests/fixtures/productsFixtures'

const product = productsTestData[0]

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('Product-card', () => {
  test('should display title', () => {
    render(<ProductCard product={product} />)
    expect(screen.getByText(product.Title)).toBeInTheDocument()
  })

  test('should display image', () => {
    render(<ProductCard product={product} />)
    const image = screen.getByAltText(product.ProductImage.Link.Title)
    expect(image.getAttribute('src')).toContain(product.ProductImage.Link.Href)
  })
})
