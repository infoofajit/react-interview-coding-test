import React, { useState, useEffect } from 'react'

const RECORD_PER_PAGE = 10

const ProductsClientSide = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)

  const prevNext = (type) => {
    if(type === 1) {
      setPage(page+1)
    } else {
      if(page >= 1) {
        setPage(page-1)
      }
    }
  }

  useEffect(() => {
    const getProductsCallback = () => {
      fetch('https://dummyjson.com/products?limit=100')
        .then(res => res.json())
        .then(res => setProducts(res?.products))
    }

    getProductsCallback()
  }, [])

  return (
    <div>
      <h1 className='text-4xl text-center font-bold text-cyan-600'>Client side</h1>
      {products.length && <div className='flex flex-col products'>
        {products.slice(page*RECORD_PER_PAGE, RECORD_PER_PAGE*(page+1)).map((res) => {
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
        <div className='flex items-center'>
          <span onClick={() => prevNext(-1)} className={`px-2 border`} style={{cursor: 'pointer'}}>{`<`}</span>
          {[...new Array(products.length/RECORD_PER_PAGE)].map((_, i) => {
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
            })}
          <span onClick={() => prevNext(1)} className={`px-2 border`} style={{cursor: 'pointer'}}>{`>`}</span>
        </div>
      </div>}
    </div>
  )
}

export default ProductsClientSide
