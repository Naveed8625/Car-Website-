import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './home-page/Home';
import Navbar1 from './components/navbar/Navbar1'
import Navbar2 from './components/navbar/Navbar2';
import Footer from './components/Footer/Footer';
import AllCars from './components/cards/AllCars';
// import Booking from './components/cards/Booking';
import BookingCart from './components/cards/Booking-Cart';

function App() {
  return (
    <div className="App">
      
<Navbar1/>
<Navbar2/>

      {<Routes>

        <Route path="/" element={<Home/>} />

        <Route path="All Cars" element={<AllCars />} />

        <Route path="/about" element={<h1></h1>} />

        <Route path="Booking" element={<BookingCart/>} />
        

        {/* <Route path="error" element={<h1> Error </h1>} /> */}


      </Routes> }

 <Footer />       
 
</div>
  );
}

export default App;
