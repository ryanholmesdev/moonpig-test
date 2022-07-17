import { Product } from './productTypes'

export interface SearchResult {
  SearchId: string
  NumberofProducts: string
  Start: string
  Products: Product[]
}
