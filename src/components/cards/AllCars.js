import React from 'react'
import { Data } from './Dynamic Cards/CardData'
import Data2 from './Dynamic Cards/Carddata2'
// import { CartProvider } from 'react-use-cart'



function AllCars() {
  return (
    <div>
      {/* <CartProvider> */}

        <Data />
        <Data2 />
        
      {/* </CartProvider> */}
    </div>
  )
}

export default AllCars