import React from "react";


const Schedule = () => {




    return(
        <div>
        <div className="container">
        <div className="row">

        <div className="input-group mb-3 where_city_input">
        <input type="text" 
        className="form-control " 
        placeholder="Where to..." 
        aria-label="Recipient's username" 
        aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">GO</button>
        </div>

        <div className="input-group mb-3 where_city_input">
        <input type="text" 
        className="form-control " 
        placeholder="Search Dates" 
        aria-label="Recipient's username" 
        aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">FIND</button>
        </div>


        <div className="input-group mb-3 where_city_input">
        <input type="text" 
        className="form-control " 
        placeholder="1 Person" 
        aria-label="Recipient's username" 
        aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Traveler</button>
        </div>


        </div>
        </div>
        </div>
    )
}
export default Schedule;