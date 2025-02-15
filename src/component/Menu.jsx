import { useEffect, useState } from "react";
import Footer from "./Footer";
import Products from "./Products";
import { CartProvider } from "react-use-cart";
import { Link } from "react-router-dom";
import NewCart from "./NewCart";
import "./cart.css";

export default function Menu() {
  
  const [change, setChange] = useState(false);

  function toggle() {
    setChange((v) => !v);
  }

  useEffect(() => {
    if (change) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [change]);

  return (
    <CartProvider>
    
    <div style={{ position: "relative" }}>
      {/* Navbar */}
      <div className="nav">
        <div>
          <img src={require("../component/images/logo.png")} alt="" />
        </div>
        <div className="items">
          <ul>
            <li className="gohome">
              <Link to="/">GO To Home</Link>
            </li>
            <li>
              <Link>
                <i className="material-icons" onClick={toggle}>
                  shopping_cart
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu */}
      <Products />

      {/* Cart Modal */}
      {change && (
        <div className="father">
          <div className="cartmenu">
            <div className="top">
            <button onClick={toggle}>X</button>
            <h2>Your Cart</h2>
            </div>
            <NewCart />
          </div>
        </div>
      )}
      <Footer />
    </div>
    </CartProvider>
  );
}
