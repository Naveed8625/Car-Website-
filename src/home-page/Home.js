//import Navbar1 from "../components/navbar/Navbar1"
//import Navbar2 from "../components/navbar/Navbar2"
import Homeimg1 from "../components/home-image/HomeImg1"
import TheoryInfo from "../components/theoryInfoPg/TheoryInfo"
import Card1 from "../components/cards/Card1"
import AddPage from "../components/Add-Page/AddPage"
import Card2 from "../components/cards/Card2"




function Home() {
    return (
        <div>

            {/* <Navbar1/>
            <Navbar2/> */}
            <Homeimg1 />
            <TheoryInfo />
            <Card1 />
            <AddPage/>
            <Card2/>



        </div>
    )
}

export default Home