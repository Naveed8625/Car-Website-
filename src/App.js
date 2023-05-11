//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './home-page/Home';
import Navbar1 from './components/navbar/Navbar1'
import Navbar2 from './components/navbar/Navbar2';
import InHome from './components/navbar/InHome';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      
<Navbar1/>
<Navbar2/>

      {<Routes>

        <Route path="/" element={<Home/>} />
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={<>about</>} />
        <Route path="contact" element={<>contact</>} />
        <Route path="Booking" element={<InHome/>} />
        <Route path="Help" element={<h1> Help </h1>} />

      </Routes> }

 <Footer />       
 
</div>
  );
}

export default App;
