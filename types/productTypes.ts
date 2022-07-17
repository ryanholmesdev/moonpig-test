export interface Price {
  Value: number
  Currency: string
}

export interface Link {
  Href: string
  Method: string
  Rel: string
  Title: string
}

export interface ProductImage {
  Link: Link
  MimeType: string
}

export interface Product {
  Price: Price
  SoldOut: boolean
  Title: string
  ProductId: number
  MoonpigProductNo: string
  ShortDescription: string
  Description: string
  ProductImage: ProductImage
}
