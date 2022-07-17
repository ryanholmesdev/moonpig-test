import React, { useCallback } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import useProducts from '../hooks/useProducts/useProducts'
import ProductCard from '../components/product-card'
import { SearchResult } from '../types/searchTypes'

interface IHomePageProps {
  searchResult: SearchResult
}

const Home: NextPage<IHomePageProps> = ({ searchResult }) => {
  const { filter, setFilter, filteredProducts } = useProducts(
    searchResult.Products,
  )

  const onSetFilter = useCallback(
    (e: { currentTarget: { value: string | ((filter: string) => string) } }) =>
      setFilter(e.currentTarget.value),
    [setFilter],
  )

  return (
    <div>
      <Head>
        <title>Moonpig</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='hero is-primary is-orange'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <p className='title'>Moonpig - Products</p>
            </div>
          </div>
        </section>
        <div className='box cta'>
          <p className='has-text-centered'>
            Checkout the latest Moonpig products
          </p>
        </div>

        <section className='container p-4'>
          <div className='field is-grouped'>
            <p className='control is-expanded'>
              <input
                className='input'
                type='text'
                placeholder='Search products'
                onChange={onSetFilter}
                value={filter}
              />
            </p>
          </div>

          <div className='columns is-multiline mt-4 p-4'>
            {filteredProducts.map((p) => (
              <div
                key={p.ProductId}
                className='column is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    'https://moonpig.github.io/tech-test-frontend/search.json',
  )
  const result: SearchResult = await response.json()
  return {
    props: {
      searchResult: result,
    },
  }
}

export default Home
