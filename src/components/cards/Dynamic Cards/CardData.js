import { DynamicCard } from "./DynCards";
// import BookingCart from "../Booking-Cart";
import { useState } from "react";



export const Data = () => {
    const [product, setProduct] = useState([
        {
            id: "1",
            itemName: "Tata Tiago EV",
            CarImage: "./Dyn-Card-img/tataTiago.png",
            price: "₹ 8.69 - 11.99 Lakh*"
        },

        {
            id: "2",
            itemName: "Kia EV6",
            CarImage: "./Dyn-Card-img/KiaEV6.png",
            price: "₹ Rs60.95 - 65.95 Lakh*"
        },

        {
            id: "3",
            itemName: "Tata Tigor EV",
            CarImage: "./Dyn-Card-img/tataTigorEv.png",
            price: "₹ 12.49 - 13.75 Lakh*"
        },

        {
            id: "4",
            itemName: "Citroen eC3",
            CarImage: "./Dyn-Card-img/citroenEc3.png",
            price: "₹ 11.50 - 12.13 Lakh*"
        },

        {
            id: "5",
            itemName: "MG ZS EV",
            CarImage: "./Dyn-Card-img/BMW iX.png",
            price: "Rs1.21 Cr*"
        },

        {
            id: "6",
            itemName: "BYD Atto 3",
            CarImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        },

        {
            id: "6",
            itemName: "BYD Atto 3",
            CarImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        },

        {
            id: "6",
            itemName: "BYD Atto 3",
            CarImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        },

        {
            id: "6",
            itemName: "BYD Atto 3",
            CarImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        },

        {
            id: "6",
            itemName: "BYD Atto 3",
            CarImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        },

        {
            id: "6",
            itemName: "BYD Atto 3",
            CarImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        },

        {
            id: "6",
            itemName: "BYD Atto 3",
            CarImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        }

    ])

    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)

    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }])
    }
    
//     const handleShow = (value) =>{
// setShowCart(value)
//     }

    return (
        <div>
              {/* <Navbar2 count={cart.length} handleShow={handleShow} /> */}
             
                
                  {/* <BookingCart  > </BookingCart>  */}
            <DynamicCard product={product} addToCart={addToCart}> </DynamicCard>
                   
        

        </div>
    )
}