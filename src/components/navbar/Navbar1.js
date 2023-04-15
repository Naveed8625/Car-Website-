import { useState } from "react"
import "../navbar/Navbar1.css"


function Navbar1(){
const[color,setColor] = useState("")
const hover=()=>{
    setColor("red")
}
const out=()=>{
    setColor("")
}

    return(
<div className="d1">

<h1 className="h1" onMouseOver={hover} onMouseOut={out} style={{color:color}}>Electric Cars</h1>

<img className="img1" src="https://bl-i.thgim.com/public/incoming/y7482/article66190818.ece/alternates/FREE_1200/IMG_bl22_EV_charging_2_1_QJ9NSO5A.jpg" height="70" width="290" alt=""></img>
</div>


)
}

export default Navbar1