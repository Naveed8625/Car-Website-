import React from "react";
import styleCard from "./card.module.css"



export const DynamicCard = ({ product, addToCart }) => {

  return (

    <div className={styleCard.cardContainer}>
      {product.map((item, index) => {
        return (
          <div className={styleCard.cardBox} key={index}>
            <img src={item.CarImage} alt="" />
            <div className={styleCard.contentDiv}>
              <h4>{item.itemName}</h4>
              <h5 >{item.price}</h5>
            </div>

            <div>
              <button className={styleCard.buttonDiv} onClick={() => addToCart(item)} > Booking Cart </button>
            </div>

          </div>
        );

      })}



    </div>
  )
}


