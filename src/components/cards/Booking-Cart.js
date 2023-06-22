import React from 'react'


function BookingCart({ cart }) {
  return (
    <div>
      {

        cart.map((cartitem, cartindex) => {
          return (
            <div>
              <img src={cartitem.CarImage} width={60} />
              <span>{cartitem.itemName}</span>
              <button>-</button>
              <span>{cartitem.quantity}</span>
              <button>+</button>
              <span>{cartitem.price}</span>

            </div>
          )
        })
      }
    </div>
  )
}

export default BookingCart