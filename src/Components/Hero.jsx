import React from "react";

import room__01 from '../Images/room__01.jpg';



const Hero = () => {


    return(
        <div className="container">
            <div class="card text-bg-dark">
            <img src={room__01} class="card-img" alt="room" />
            <div class="card-img-overlay">
            <h5 class="card-title save_big_title">Save Big This Holiday</h5>
            <button class="btn btn_30_off">30% OFF NOW</button>
            <p class="card-text"><small></small></p>
            </div>
        </div>
        </div>
    )
}

export default Hero;