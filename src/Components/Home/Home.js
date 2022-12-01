import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css"

const Home = ()=> {
    return(
        <div>
            <Navbar/>

            <div className="home-container">
                <div className="home-split">
                    
                    <div className="home-left">
                        <h1 className="home-title">Share your contact information<br></br>
                            <span>anywhere</span> &#x2022; <span>Safely</span> &#x2022; <span>quickly</span></h1>
                            
                        <p className="home-description"><span>HYDRA</span> Technologies  - BECAUSE THE <span>FUTURE</span> STARTS, TODAY. <br></br>
                        JOIN THE MOVEMENT. WE ARE ONLY A FEW CLICKS AWAY.</p>
                        <div className="button-container">
                            <button className="qbtn">get in touch </button>
                            <button className="qbtn">get in touch </button>
                        </div>
                       

                        
                    </div>
                    <div className="home-right">
                        <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1669828104/credit-card-rsr_p1pamj.png" alt="card"/>
                    </div>

                </div>
                
            </div>

        </div>
    )
}
export default Home;