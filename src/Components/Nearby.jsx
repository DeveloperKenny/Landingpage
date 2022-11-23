import React from "react";
import apple from '../Images/apple.jpg';
import sf from '../Images/sf_bridge.jpg';
import sanjose from '../Images/san_jose.jpg';
import sc from '../Images/santa_cruz.jpg';



const Nearby = () => {


    return(

            <div>
                <div className="container">
                    <div className="row row_nearby">
                        <div className="card-body">
                            <div className="card-title nearby-title">Nearby Destionations</div>
                    <div class="card nearby_card">
                    <img src={sf} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-title">San Francisco</p>
                    </div>
                    </div>

                    <div class="card nearby_card">
                    <img src={sanjose} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-text">San Jose</p>
                    </div>
                    </div>

                    <div class="card nearby_card">
                    <img src={apple} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-text">Apple</p>
                    </div>
                    </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Nearby;