import styleCard from "./card.module.css"
// import {useCart} from "react-use-cart"


export const DynamicCard2 = ({ CardData2 }) => {
  
 return (

    <div className={styleCard.cardContainer}>
      {CardData2.map((item, index) => {
        return (
          <div className={styleCard.cardBox}>

            <img src={item.CarImage} alt="" />
            <div className={styleCard.contentDiv}>
              <h4>{item.itemName}</h4>
              <h5 >{item.price}</h5>
            </div>

            <div>
              <button className={styleCard.buttonDiv}  > Booking Cart </button>
            </div>

          </div>
        );

      })}



    </div>
  )
}


