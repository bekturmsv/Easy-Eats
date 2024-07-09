import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart_items_title cart_items_item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    className="cross"
                  >
                    x
                  </p>
                </div>

                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_promocode">
          <div>
            <p>If you have a promo code, Enter it here!</p>
            <div className="cart_promocode_input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
