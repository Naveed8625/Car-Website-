import style from "./Info.module.css";
import Table from 'react-bootstrap/Table';





function TheoryInfo(){
return(
<div className={style.D1}>

<div  className={style.theoryinfo}>
 <h2 className={style.h2}>Electric Cars in India</h2>

 <h5 className={style.h5}>Currently, there are 12 electric cars on sale in India. Of these, the Tata Tiago <br/>EV is the cheapest EV while BMW i7 is the most expensive electric in India..<br/> Upcoming electric cars in India includ Citroen eC3 Mercedes-Benz EQA and<br/> Hyundai Ioniq among others.Locate a charging station in your city.</h5>

<h2 className={style.h21}>Electric Cars Price List 2023</h2>

<Table striped bordered hover className={style.t1}>
      <thead>
        <tr>
          <th>MODEL</th>
          <th>EX-SHOWROOM PRICE</th>
        </tr>
      </thead>
      <tbody className={style.tbody}>
        <tr>
          <td>Kia EV6</td>
          <td>₹ 60.95 - 65.95 Lakh*</td>
        </tr>
        <tr>
          <td>Tata Tiago EV</td>
          <td>₹ 8.69 - 11.99 Lakh*</td>
        </tr>
        <tr>
          <td>Tata Tigor EV</td>
          <td>₹ 12.49 - 13.75 Lakh*</td>
        </tr>
        <tr>
          <td>Hyundai Kona Electric</td>
          <td>₹ 83 - 24.75 Lakh*</td>
        </tr>
        <tr>
          <td>BYD Atto 3</td>
          <td>₹ 33.99 - 34.15 Lakh*</td>
        </tr>
      </tbody>
    </Table>
</div>

<div className={style.fuelTypes}>
<img  className={style.img1} src="https://cdn-icons-png.flaticon.com/512/78/78130.png" height="50" width="50" alt=""></img>
<a href="" className={style.diesel}>Diesel</a>

<img  className={style.img2} src="https://cdn-icons-png.flaticon.com/512/78/78130.png" height="50" width="50" alt=""></img>
<a href="" className={style.petrol}>Petrol</a>

<img  className={style.img3} src="https://cdn-icons-png.flaticon.com/512/78/78130.png" height="50" width="50" alt=""></img>
<a href="" className={style.cng}>CNG</a>
</div>


</div>
)
}

export default TheoryInfo