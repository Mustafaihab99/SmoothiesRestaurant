import React, { useState } from "react";
import "./nav.css";
import {useCart} from 'react-use-cart';

export default function Card(props) {
  const [color, setColor] = useState(false);
  const [rate, setRate] = useState(props.rate);

  function toogle() {
    setColor((v) => !v);
    if(color)
    setRate(rate - 0.1);
    else   
    setRate(rate + 0.1);
  }
  const {addItem} = useCart();

  return (
    
    <div
      className="card"
      style={{
        width: "250px",
        border: "3px solid pink",
        borderRadius: "8px",
        backgroundColor: "#ffc0cb17",
      }}>
      <img
        src={props.image}
        alt=""
        style={{ width: "250px", height: "250px" }}
      />
      <h2 style={{ marginLeft: "10px", fontSize: "25px" }}>{props.title}</h2>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginLeft: "10px",
          marginTop: "10px",
        }}>
        <h4 style={{ fontSize: "18px", color: "gray" }}>{rate.toFixed(1)}</h4>
        <i
          className="material-icons"
          style={{
            color: color ? "yellow" : "",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={toogle}>
          star
        </i>
      </span>
      <p
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          color: "#53415d",
          fontFamily: "cursive",
        }}>
        {props.desc}
      </p>
      <h4
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          fontSize: "20px",
          color: "darkgreen",
        }}>
        {props.price} $
      </h4>
      <button
        style={{
          width: "250px",
          height: "40px",
          marginTop: "10px",
          backgroundColor: "pink",
          fontWeight: "bold",
          fontSize: "16px",
          border: "none",
        }}
        onClick={(()=>addItem(props.item))}
        >
        Add To Cart
      </button>
    </div>
  );
}
