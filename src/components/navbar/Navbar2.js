import "../navbar/Nav2.css"
import { useState } from "react"
import { NavLink } from "react-router-dom";
//import ReactSwitch from 'react-switch';




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
        <a onMouseOver={hover} onMouseOut={out} style={{ color: color }} href="/" class="logo">New Cars</a>

        <div class="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>

        <div class="nav__link hide">
          <NavLink to="home">home</NavLink>
          <NavLink to="about">about</NavLink>
          <NavLink to="contact">contact</NavLink>
          <NavLink to="Booking">Booking</NavLink>
        </div>

        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>


      </nav>




</div>)}
export default Navbar2