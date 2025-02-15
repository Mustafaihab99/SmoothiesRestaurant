import React from "react";
import NavBar from "./component/NavBar";
import Main from "./component/Main";
import About from "./component/About"; 
import Delivery from "./component/Delivery";
import ContactUs from "./component/ContactUs";
import Reviews from "./component/Reviews";
import Footer from "./component/Footer";
export default function Home(){
    return(
        <React.Fragment>
            <NavBar />
            <Main />
            <About />
            <Delivery />
            <ContactUs />
            <Reviews />
            <Footer />
        </React.Fragment>
    )
}