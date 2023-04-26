import React from 'react'
import "./KeyComp.css"


function KeyCompo() {
    return (
        <div className='KeyCompmainDi'>
            
            <div style={{textAlign:"left",margin:"20px 0px 0px 60px"}}>
                <h3>Key Components</h3>
            </div>

{/* ///////////////cards div start///////////////// */}
            <div className='keycardDmain'>

<div className='cardD1'>
<img className='imgkey1' src='./KeyComp-img/car-battery.png'></img>
<h4>Battery</h4>
<p className='pKey'>The rechargeable battery is the power source of the EV, and provides the fuel (electricity) 
to the electric motor. Any EV typically uses more than one battery, collectively referred to 
as a battery pack. Most EVs have these installed under the floor of the cabin. Their power
 capacity is measured in kilowatt-hours (kWh).</p>
</div>

<div className='cardD1'>
<img className='imgkey1' src='./KeyComp-img/electric-car.png'></img>
<h4>Motors</h4>
<p className='pKey'>Electric motors replace the complex powertrains of conventional cars. 
There is typically one, but we have also seen dual motors and rarely three or four individual
 motors for each wheel. The motors are relatively compact and liberate more space in EVs.
  The electric motors’ advantage is immediate peak torque delivery, and noiseless,
   pollution-free operation.</p>
</div>

<div className='cardD1'>
<img className='imgkey1' src='./KeyComp-img/charging.png'></img>
<h4>Controller</h4>
<p className='pKey'>All that immediate torque may not always be needed, so an EV has a 
controller to regulate the flow of power from the battery pack to its motor. It computes 
your usage with respect to the available battery charge and delivers power accordingly.
 This also opens the EV up to various driving modes.</p>
</div>

</div>
{/* //////////////////sold Div start/////////////// */}

<div className='carSoldDiv'>

<img className='soldimg1' src='./SoldLogo/award.png'></img>
<div className='soldD1'>
<h4>India’s #1</h4>
<p>Largest Auto portal</p>
</div>

<img className='soldimg1' src='./SoldLogo/car.png'></img>
<div className='soldD1'>
<h4>Car Sold</h4>
<p>Every 4 minute</p>
</div>

<img className='soldimg1' src='./SoldLogo/price-tag.png'></img>
<div className='soldD1'>
<h4>Offers</h4>
<p>Stay updated pay less</p>
</div>

<img className='soldimg1' src='./SoldLogo/compare.png'></img>
<div className='soldD1'>
<h4>Compare</h4>
<p>Decode the right car</p>
</div>


</div>

 </div>)
}

export default KeyCompo