import React from "react"
import "./HomeImg.css"
import Carousel from 'react-bootstrap/Carousel';


function Homeimg1() {
    return (
        <div className="homeimgmain">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Home-img/electric4.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>Friendly With Environment</h4>
                        <p>Electric cars reduces air pollution</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Home-img/electric2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4>Easy to charge</h4>
                        <p>No fuel required so you save money on gas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Home-img/electric3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color:"black"}}>Low maintenance</h3>
                        <p style={{color:"red"}}>
                            Lower maintenance due to an efficient electric motor
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Home-img/electrc-chart.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Advantages Of Electric Cars</h3>
                        <p>
                            
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


        </div>
    )
}
export default Homeimg1