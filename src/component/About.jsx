import { useState, useEffect } from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default function About(){
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
    return (
        <div className="about" id="about">
            <h3 className="title">About Us</h3>
            <div className="aboutcontent">
                <div className="content">
                    <p>
                    Welcome to <span style={{color:gradients[gradientIndex]}}>MockaBucks</span>, where every sip is a story and every drink is crafted with passion!
                    At MockaBucks, we believe in creating unforgettable moments over extraordinary beverages. 
                    Whether you're here to unwind, celebrate, or simply quench your thirst, we've got the perfect drink for every occasion.
                    Our menu features a diverse selection of signature cocktails, refreshing mocktails, artisanal coffees,
                    and an array of exotic teas. We take pride in using the freshest ingredients, innovative recipes,
                    and unique flavor combinations to deliver a drink experience like no other.
                    But <span  style={{color:gradients[gradientIndex]}}>MockaBucks</span> is more than just drinks. It's a place where community comes together,
                    where smiles are shared, and where memories are made. With a cozy ambiance, attentive service,
                    and a commitment to excellence, we aim to make every visit special.
                    Join us for an extraordinary drink adventure and discover why <span style={{color:gradients[gradientIndex]}}>MockaBucks </span> 
                    is the ultimate destination for beverage lovers. Cheers to great taste and even better company!
                    </p>
                </div>
            </div>
            <Link to="/signup">
            <button>Sign Up</button> 
            </Link>
        </div>
    )
}