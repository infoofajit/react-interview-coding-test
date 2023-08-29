import React, { useEffect, useState } from 'react'

const RECORD_PER_PAGE = 10

const ProductsServerSide = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getProductsPromise = async () => {
      const res = await fetch(`https://dummyjson.com/products?limit=${RECORD_PER_PAGE}&skip=${RECORD_PER_PAGE*page}`)
      const json = await res.json()
      console.log(json)
      setProducts(json?.products)

      if(!total && json?.total) {
        setTotal(json?.total)
      }
    }

    getProductsPromise()
  }, [page])

  return (
    <div>
      <h1 className='text-4xl text-center font-bold text-cyan-600'>Server side</h1>
      {products.length && <div className='flex flex-col products'>
        {products.map((res) => {
          return (
            <div key={res?.id} className='flex p-2 border-b border-cyan-600 items-center'>
              <div className='mr-2'><img src={res?.thumbnail} alt={res.title} width={70} height={50} /></div>
              <div className='flex flex-col'>
                <span>{res.title}</span>
                <small>{res.description}</small>
                <small>{res.price}/-</small>
              </div>
            </div>
          )
        })}
      </div>}
      {products.length && <div className='flex flex-col pagination m-6 items-center'>
        <div className="flex items-center">
          {total &&
            [...new Array(total/RECORD_PER_PAGE)].map((_, i) => {
              return (
                <span
                  key={i}
                  onClick={() => setPage(i)}
                  className={`px-2 border ${page === (i) ? 'bg-gray-100' : ''}`}
                  style={{cursor: 'pointer'}}
                >
                  {i+1}
                </span>
              )
            })
          }
        </div>
      </div>}
    </div>
  )
}

export default ProductsServerSide
