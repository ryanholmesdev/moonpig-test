import React, { useState, useMemo } from 'react'
import { IProduct } from '../../types/productTypes'

export default function useProducts(products: IProduct[]): {
  filteredProducts: IProduct[]
  filter: string
  setFilter: (filter: string | ((filter: string) => string)) => void
} {
  const [filter, setFilter] = useState('')
  const [allProducts] = useState(products)

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((p) =>
      p.Title.toLowerCase().includes(filter.toLowerCase()),
    )
    return filtered
  }, [allProducts, filter])

  return {
    filteredProducts,
    filter,
    setFilter,
  }
}
