import React from 'react'
import "./ChargSta.css"


function ChargeStation() {
    return (
        <div className='chargStMain'>

            <div className='chargdiv'>
                <h3 className='chargH3'>Electric Charging Stations in India</h3>
            </div>

            <div className='imgdiv'>

                <div className='city1'>
                    <img className='charImg1' src='./ChargeSta-img/ahemadabad.png'></img>
                    <p>Ahemadabad</p>
                </div>

                <div className='city1'>
                    <img className='charImg1' src='./ChargeSta-img/chandigarh.png'></img>
                    <p>Chandigarh</p>
                </div>

                <div className='city1'>
                    <img className='charImg1' src='./ChargeSta-img/chennai.png'></img>
                    <p>Chennai</p>
                </div>

                <div className='city1'>
                    <img className='charImg1' src='./ChargeSta-img/gurgon.png'></img>
                    <p>Gurgaon</p>
                </div>

                <div className='city1'>
                    <img className='charImg1' src='./ChargeSta-img/hydrabad.png'></img>
                    <p>Hyderabad</p>
                </div>
                <div className='city1'>
                    <img className='charImgDelhi' src='./ChargeSta-img/Delhi.png'></img>
                    <p>Delhi</p>
                </div>

                <div className='city1'>
                    <img className='charImg1' src='./ChargeSta-img/jaipur.png'></img>
                    <p>Jaipur</p>
                </div>

                <div className='city1'>
                    <img className='charImg1' src='./ChargeSta-img/patna.png'></img>
                    <p>Patna</p>
                </div>

            </div>

        </div>
    )
}

export default ChargeStation