import React from "react";
import { Link } from "react-router-dom";
import delivery from "./images/delivery.png";

export default function Delivery(){
    return(
        <React.Fragment>
            <h2 className="title" style={{marginTop : "20px"}}>Delivery</h2>
            <div className="delivery">
                <div className="content">
                    <p>
                        We produce Reliable, Fast, and Easy Delivery Solutions.
                    </p>
                    <button><Link to="/menu">Order Now</Link></button>
                </div>
                <img src={delivery} alt="" />
            </div>
        </React.Fragment>
    )
}