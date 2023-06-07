import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'



function Footer() {
// const 
const Navigate=useNavigate()

    return (
        <div className='mainfooter1'>       
             <div className='footermainD'>

              <div className='footerD1'>
                <h4>OVERVIEW</h4>
                <p onClick={()=>{Navigate(`/about`)}}>About us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions </p>
                <p>Corporate Policies</p>
                <p>Investors</p>
              </div>

            <div className='footerD1'>
                <h4>OTHERS</h4>
                <p>Scrap my car</p>
                <p>Advertise with Us</p>
                <p> Careers</p>
                <p>Customer Care </p>
            </div>

            <div className='footerD1'>
                <h4>CONNECT WITH US</h4>
                <p>support@cardekho.com</p>
                <p>Dealer solutions</p>
                <p>Used Cars Business</p>
                <p>Contact Us</p>
                <p>Feedback</p>
            </div>


        </div>
        </div>

    )
}

export default Footer