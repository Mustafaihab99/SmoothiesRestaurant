import React from "react";
import {useCart} from 'react-use-cart';

const NewCart =() =>{
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty)
        return <h1 className="empty">your Carts is Empty</h1>
    return(
        <section className="cartsection">
        <div className="cont">
            <div>
                <h5 style={{marginTop:"40px" , marginLeft:"10px"}}>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                <table className="table tanle-light table-hover m-0">
                    <tbody>
                    {items.map((item , index)=>{
                        return(
                        <tr key={index}>
                            <td>
                                <img src={item.img}  alt="" />
                            </td>
                            <td style={{display:"flex" , flexDirection:"column" , gap:"5px"}}>
                                <h4 style={{marginTop:"30px"}} className="t2">
                                {item.title}
                                </h4>
                                <h4 style={{color:"green"}} className="t2">
                                {item.price} $
                                </h4>
                            </td>
                            <td>
                                <h4 className="t2">Quantity ({item.quantity})</h4>
                            </td>
                            <td className="butns">
                                <button className="btn btn-info ms-2" onClick={()=> updateItemQuantity(item.id ,item.quantity - 1)}>-</button>
                                <button className="btn btn-info ms-2" onClick={()=> updateItemQuantity(item.id ,item.quantity + 1)}>+</button>
                                <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>
                                    <i className="material-icons">delete 
                                    </i>
                                </button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div style={{marginTop: "30px",textAlign: "center",color: "#c3c1c1"}}>
                <h2>Total Price : <span style={{color:"green"}}>{cartTotal} $</span></h2>
            </div>
            <div style={{textAlign: "center",marginTop: "30px"}} className="butns2">
                <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
                <button className="btn btn-primary m-2" onClick={() => window.location.pathname="/"}>Buy Now</button>
            </div>
        </div>
        </section>
    );
};
export default NewCart;