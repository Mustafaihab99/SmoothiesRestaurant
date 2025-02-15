import React from "react";
import { products } from "./data";
import Card from "./Card";
import "./about.css";
let dataShow = products.map((item , index) =><Card 
key={index}
image ={item.img}
title = {item.title}
desc = {item.desc}
price = {item.price}
rate = {item.rate} 
item = {item}
/>);
export default function Products(){
    return(
    <div className="menu" id="product">
    <h3 className="title">Our Menu</h3>
    <div  style={{display:"grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" ,
    marginLeft:"20px" , marginTop:'50px' , gap:"20px"}}>
    {dataShow}
    </div>
    </div>
    )
}