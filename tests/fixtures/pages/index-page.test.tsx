import { fireEvent, render, screen } from '@testing-library/react'
import Index from '../../../pages/index'
import { SearchResult } from '../../../types/searchTypes'
import { productsTestData } from '../productsFixtures'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}))

const searchResult: SearchResult = {
  SearchId: 'searchid',
  NumberofProducts: productsTestData.length.toString(),
  Start: '0',
  Products: productsTestData,
}

describe('Index - page', () => {
  it('should render page with correct information', () => {
    render(<Index searchResult={searchResult} />)
    expect(screen.getByText('Moonpig - Products')).toBeInTheDocument()
    expect(
      screen.getByText('Checkout the latest Moonpig products'),
    ).toBeInTheDocument()

    searchResult.Products.forEach((p) => {
      expect(screen.getByText(p.Title))
    })
  })

  it('should render page with correct information', () => {
    render(<Index searchResult={searchResult} />)
    expect(screen.getByText('Moonpig - Products')).toBeInTheDocument()
    expect(
      screen.getByText('Checkout the latest Moonpig products'),
    ).toBeInTheDocument()

    searchResult.Products.forEach((p) => {
      expect(screen.getByText(p.Title))
    })
  })

  it('should only show products that match filter', () => {
    render(<Index searchResult={searchResult} />)

    const searchText = searchResult.Products[0].Title

    const input: HTMLInputElement =
      screen.getByPlaceholderText(/Search products/i)

    fireEvent.change(input, { target: { value: searchText } })
    expect(input).toHaveValue(searchText)

    const matches = searchResult.Products.filter((p) =>
      p.Title.toLowerCase().includes(searchText.toLowerCase()),
    ).length

    expect(screen.queryAllByTestId('product-card')).toHaveLength(matches)
  })
})
