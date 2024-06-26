import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { IDetailProduct } from '../../types/detailProductType'
import ProductInfo from '../../components/product-info'

interface IProductDetailsPageProps {
  product: IDetailProduct
}

const ProductDetailsPage: NextPage<IProductDetailsPageProps> = ({
  product,
}) => {
  return (
    <div>
      <Head>
        <title>Moonpig</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='hero is-fullheight is-default is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <div className='columns is-vcentered'>
                <div className='column is-5'>
                  <Image
                    src={product.ThumbnailUrl}
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                    alt={product.SeoPath}
                  />
                </div>
                <div className='column is-6 is-offset-1'>
                  <ProductInfo
                    title={product.Title}
                    desciption={product.Description}
                    isSoldOut={product.SoldOut}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context: {
  query: { productNo: string }
}) {
  const { productNo } = context.query
  const request = await fetch(
    `https://moonpig.github.io/tech-test-frontend/product/${productNo}.json`,
  )
  const response: IDetailProduct = await request.json()
  return {
    props: {
      product: response,
    },
  }
}

export default ProductDetailsPage
