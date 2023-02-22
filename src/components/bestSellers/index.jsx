import React from 'react'
import ProductCard from '../productCard'

const BestSellers = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col place-items-center text-dark py-24 bg-white gap-8'>
        <h1 className="text-3xl font-medium">Best Sellers</h1>
        <div className='grid grid-flow-col place-content-center gap-8'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='grid grid-flow-col place-content-center gap-8'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>       
    </div>
  )
}

export default BestSellers