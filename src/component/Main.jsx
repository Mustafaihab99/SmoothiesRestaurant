import "./main.css";
import React, { useState, useEffect } from "react";
import image1 from "./images/smothy.png"; 
import { Link } from "react-router-dom";

function Main(){
    const [gradientIndex, setGradientIndex] = useState(0);


    const gradients = [
    "rgb(255 114 139)",
    "rgb(61 156 162)",
    "rgb(54 196 16)",
    ];

    useEffect(() => {
    const interval = setInterval(() => {
        setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 5000);

    return () => clearInterval(interval); 
    }, [gradients.length]);

    return(
        <div id='main' className="main">
            <div className="left">
                <div className="head">
                    <h1>It's not just Coffee It's <span style={{color: gradients[gradientIndex]  , transition:'.5s linear'}}>Mochabucks</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolores aperiam, eligendi, delectus vero quas 
                        doloremque aliquid obcaecati omnis impedit amet quae porro.
                        Consectetur reiciendis ullam molestias culpa, architecto facilis?
                    </p>
                    <div className="button">
                    <Link to="/menu"
                    style={{backgroundColor: gradients[gradientIndex]  , transition:'.5s linear'}}>Show Menu</Link>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={image1} alt=""/>
                
            </div>
        </div>
    );
}

export default Main;