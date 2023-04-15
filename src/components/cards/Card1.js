import style from "./Card1.module.css"
import { Data } from "./Dynamic Cards/CardData"


function Card1(){
 return(
    
<div className={style.mainCard}>


<div className={style.Cardbig}> 
<h1 className={style.h1}>Electric Cars in India</h1>
         <Data/>
</div>

{/* small cards start */}
<div className={style.Cardsmall}>
<h4 className={style.h4}>Upcoming Electric Cars</h4>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/MgCometEv.png"></img>
<p className={style.p1} >MG Comet EV</p>
<h5 className={style.price1}>₹ 9 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Mercedes-Benz EQS SUV.png"></img>
<p className={style.p1} >Mercedes-Benz EQS</p>
<h5 className={style.price1}>₹ 2 Cr*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Volvo C40 Recharge.png"></img>
<p className={style.p1} >Volvo C40 Recharge</p>
<h5 className={style.price1}>₹ 60 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Fisker Ocean.png"></img>
<p className={style.p1} >Fisker Ocean</p>
<h5 className={style.price1}>₹ 80 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Jeep Renegade.png"></img>
<p className={style.p1} >Jeep Renegade</p>
<h5 className={style.price1}>₹ 10 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Jeep Grand Cherokee.png"></img>
<p className={style.p1} >Jeep Grand Cherokee</p>
<h5 className={style.price1}>₹ 78.50 Lakh*</h5>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className={style.sc1}>
<img className={style.sCimg1} src="./SmallCard-img/Honda WR-V.png"></img>
<p className={style.p1} >Honda WR-V</p>
<h5 className={style.price1}>₹ 8 Lakh*</h5>
</div>
</div>


</div>



)}
export default Card1