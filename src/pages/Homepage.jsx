import React from 'react'
import CarouselComp from '../components/CarouselComp'
import TopFragrance from '../components/TopFragrance'
import FeaturedProduct from '../components/FeaturedProduct'
import BestSellers from '../components/BestSellers'

const Homepage = () => {
  return (
    <div>
        <CarouselComp />  
        <FeaturedProduct />
        <TopFragrance />
        <BestSellers />
    </div>
  )
}

export default Homepage