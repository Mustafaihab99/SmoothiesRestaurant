import React from "react";
import "./nav.css";

function NavBar(){
    return(
        <div className="nav">
            <div>
                <img src={require("../component/images/logo.png")} alt=""/>
            </div>
            <div className="items">
                <ul>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#contact">Contact us</a></li>
                    <li><a href="#review">Reviews</a></li>
                </ul>
            </div>
        </div>
    );
}
export default NavBar;