import { DynamicCard } from "./DynCards";


export const Data = () => {
    const menu = [
        {
            itemName: "Tata Tiago EV",
            foodImage: "./Dyn-Card-img/tataTiago.png",
            price: "₹ 8.69 - 11.99 Lakh*"
        },

        {
            itemName: "Kia EV6",
            foodImage: "./Dyn-Card-img/KiaEV6.png",
            price: "₹ Rs60.95 - 65.95 Lakh*"
        },

        {
            itemName: "Tata Tigor EV",
            foodImage: "./Dyn-Card-img/tataTigorEv.png",
            price: "₹ 12.49 - 13.75 Lakh*"
        },

        {
            itemName: "Citroen eC3",
            foodImage: "./Dyn-Card-img/citroenEc3.png",
            price: "₹ 11.50 - 12.13 Lakh*"
        },

        {
            itemName: "MG ZS EV",
            foodImage: "./Dyn-Card-img/BMW iX.png",
            price: "Rs1.21 Cr*"
        },

        {
            itemName: "BYD Atto 3",
            foodImage: "./Dyn-Card-img/bydAtto3.png",
            price: "₹ 33.99 - 34.49 Lakh*"
        }
    ];

   

    return (
        <div>
            <DynamicCard CardData={menu} />

        </div>
    )
}