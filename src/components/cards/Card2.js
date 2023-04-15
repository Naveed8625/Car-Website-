import React from 'react'
import style from "./Card1.module.css"
import Data2 from './Dynamic Cards/Carddata2'


function Card2() {
  return (
    <div className={style.maincard2}>

      <div className={style.cardbig2}>
        <Data2 />
      </div>
      
      <div className={style.cardsmall2}>
      <h4 className={style.h4}>Popular Hybrid Cars
      </h4>

      <div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Toyota Urban Cruiser.png"></img>
<p className={style.p1} >Toyota Urban Cruiser</p>
<h5 className={style.price1}>₹ 10-19 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Volvo XC90.png"></img>
<p className={style.p1} >Volvo XC90</p>
<h5 className={style.price1}>₹ 98.50 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Toyota Vellfire.png"></img>
<p className={style.p1} >Toyota Vellfire</p>
<h5 className={style.price1}>₹ 96.55 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Toyota Camry.png"></img>
<p className={style.p1} >Toyota Camry</p>
<h5 className={style.price1}>₹ 45.25 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Porsche Cayenne.png"></img>
<p className={style.p1} >Porsche Cayenne</p>
<h5 className={style.price1}>₹ 1.27-2.57 Cr*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Honda City Hybrid.png"></img>
<p className={style.p1} >Honda City Hybrid</p>
<h5 className={style.price1}>₹ 18 - 20 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}




      </div>

    </div>)
}

export default Card2