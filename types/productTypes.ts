export interface IPrice {
  Value: number
  Currency: string
}

export interface ILink {
  Href: string
  Method: string
  Rel: string
  Title: string
}

export interface IProductImage {
  Link: ILink
  MimeType: string
}

export interface IProduct {
  Price: IPrice
  SoldOut: boolean
  Title: string
  ProductId: number
  MoonpigProductNo: string
  ShortDescription: string
  Description: string
  ProductImage: IProductImage
}
