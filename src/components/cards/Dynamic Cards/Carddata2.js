import React from 'react'
import {DynamicCard2} from "./DynCards2"


function Data2() {

    const menu2 = [
        {    id:"1",
            itemName: "BMW i7",
            CarImage: "./Dyn-Card-img/BMWi7.png",
            price: "₹ 1.95 Cr*"
        },

        {    id:"2",
            itemName: "Hyundai Kona Ev",
            CarImage: "./Dyn-Card-img/Hyundai Kona Electric.png",
            price: "₹ 23.84 - 24.03 Lakh*"
        },
        {    id:"3",
            itemName: "Mini Cooper SE",
            CarImage: "./Dyn-Card-img/Mini Cooper SE.png",
            price: "₹ 52.50 Lakh*"
        },
        {    id:"4",
            itemName: "Mercedes-Benz EQS",
            CarImage: "./Dyn-Card-img/Mercedes-Benz EQS.png",
            price: "₹ 1.55 - 2.45 Cr*"
        },
        {     id:"5",
            itemName: "Mahindra XUV400EV",
            CarImage: "./Dyn-Card-img/Mahindra XUV400 EV.png",
            price: "₹ 15.99 - 18.99 Lakh*"
        },
        {     id:"6",
            itemName: "Tata Nexon EV Max",
            CarImage: "./Dyn-Card-img/Tata Nexon EV Max.png",
            price: "₹ 16.49 - 18.99 Lakh*"
        },
        ,
        {     id:"7",
            itemName: "Tata Nexon EV Max",
            CarImage: "./Dyn-Card-img/Tata Nexon EV Max.png",
            price: "₹ 16.49 - 18.99 Lakh*"
        },
        {     id:"8",
            itemName: "Tata Nexon EV Max",
            CarImage: "./Dyn-Card-img/Tata Nexon EV Max.png",
            price: "₹ 16.49 - 18.99 Lakh*"
        },
        {    id:"9",
            itemName: "Tata Nexon EV Max",
            CarImage: "./Dyn-Card-img/Tata Nexon EV Max.png",
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