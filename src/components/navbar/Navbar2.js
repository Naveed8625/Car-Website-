import "../navbar/Nav2.css"
import { useState } from "react"
import { NavLink } from "react-router-dom";




function Navbar2() {
  const [color, setColor] = useState("")
  const hover = () => {
    setColor("red")
  }
  const out = () => {
    setColor("")
}

  return (
    <div className="d2">

      <nav class="nav">
        <a onMouseOver={hover} onMouseOut={out} style={{ color: color }} href="#" class="logo">New Cars</a>

        <div class="nav__link hide">
          <NavLink to="/">home</NavLink>
          <NavLink to="All Cars">All Cars</NavLink>

          <NavLink to="about" >about</NavLink>

          <NavLink to="Booking" >Booking</NavLink>
          {/* <sup>{props.count}</sup> */}
          
        </div>
       
      </nav>


</div>)}
export default Navbar2