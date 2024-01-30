import React from 'react'
import CarouselComp from '../components/CarouselComp'
import TopFragrance from '../components/TopFragrance'
import FeaturedProduct from '../components/FeaturedProduct'
import BestSellers from '../components/BestSellers'

import { useSelector, useDispatch } from 'react-redux';
import {selectCart} from '../redux/cartSlice'

const Homepage = () => {
  const cart = useSelector(selectCart)
  console.log(cart)
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