import React from 'react'
import {DynamicCard2} from "./DynCards2"




function Data2() {

    const menu2 = [
        {
            itemName: "BMW i7",
            foodImage: "./Dyn-Card-img/BMWi7.png",
            price: "₹ 1.95 Cr*"
        },

        {
            itemName: "Hyundai Kona Ev",
            foodImage: "./Dyn-Card-img/Hyundai Kona Electric.png",
            price: "₹ 23.84 - 24.03 Lakh*"
        },
        {
            itemName: "Mini Cooper SE",
            foodImage: "./Dyn-Card-img/Mini Cooper SE.png",
            price: "₹ 52.50 Lakh*"
        },
        {
            itemName: "Mercedes-Benz EQS",
            foodImage: "./Dyn-Card-img/Mercedes-Benz EQS.png",
            price: "₹ 1.55 - 2.45 Cr*"
        },
        {
            itemName: "Mahindra XUV400EV",
            foodImage: "./Dyn-Card-img/Mahindra XUV400 EV.png",
            price: "₹ 15.99 - 18.99 Lakh*"
        },
        {
            itemName: "Tata Nexon EV Max",
            foodImage: "./Dyn-Card-img/Tata Nexon EV Max.png",
            price: "₹ 16.49 - 18.99 Lakh*"
        },
    ]

  return (
    <div>
    <DynamicCard2 CardData2={menu2} />

</div>

  )
}

export default Data2