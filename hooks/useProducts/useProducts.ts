import React, { useState, useMemo } from 'react'
import { Product } from '../../types/productTypes'

export default function useProducts(products: Product[]): {
  filteredProducts: Product[]
  filter: string
  setFilter: (filter: string | ((filter: string) => string)) => void
} {
  const [filter, setFilter] = useState('')
  const [allProducts] = useState(products)

  const filteredProducts = useMemo(() => {
    const dfsfdsf = allProducts.filter((p) =>
      p.Title.toLowerCase().includes(filter.toLowerCase()),
    )
    return dfsfdsf
  }, [allProducts, filter])

  return {
    filteredProducts,
    filter,
    setFilter,
  }
}
