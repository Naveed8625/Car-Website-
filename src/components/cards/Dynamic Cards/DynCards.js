import styleCard from "./card.module.css"


export const DynamicCard = ({ CardData }) => {
 return (

    <div className={styleCard.cardContainer}>
      {CardData.map((value, index) => {
        return (
          <div className={styleCard.cardBox}>

            <img src={value.foodImage} alt="" />
            <div className={styleCard.contentDiv}>
              <h4>{value.itemName}</h4>
              <h5 >{value.price}</h5>
            </div>

            <div>
              <button className={styleCard.buttonDiv}> More Details </button>
            </div>

          </div>
        );

      })}



    </div>
  )
}


