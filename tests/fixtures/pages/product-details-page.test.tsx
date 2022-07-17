import { render, screen } from '@testing-library/react'
import ProductDetailsPage from '../../../pages/product-details/[productNo]'
import { IDetailProduct } from '../../../types/detailProductType'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

const product: IDetailProduct = {
  Title: 'product title',
  SoldOut: false,
  ThumbnailUrl: 'http://website.com/image.png',
  SeoPath: 'product seo',
  Description: 'product description',
}

describe('Product Details - page', () => {
  it('should render page with correct information', async () => {
    render(<ProductDetailsPage product={product} />)
    expect(screen.getByText(product.Title)).toBeInTheDocument()

    const image = screen.getByAltText(product.SeoPath)
    expect(image.getAttribute('src')).toContain(product.ThumbnailUrl)

    expect(screen.getByText(product.Description)).toBeInTheDocument()
  })
})
