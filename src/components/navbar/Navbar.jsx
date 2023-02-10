import { React, useContext } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "../../context";

import "./navbar.css";

import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
  const { isCartOpen, showHideCart, cart, calcTotalItemsInCart } =
    useContext(MyContext);

  return (
    <div className="nav">
      <div className="container">
        <div className="nav-left">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Contact</li>
            <Link to="/products">
              <li>Shop</li>
            </Link>
          </ul>
        </div>
        <div className="nav-mid">
          <Link to="/">abc shop</Link>
        </div>
        <div onClick={showHideCart} className="nav-right">
          <ul>
            <li className="cart">
              <p className="totalPrice">Rs. 1,270</p>
              <div className="cartIconWrapper">
                <SlHandbag className="cartIcon" />
                <span className="itemCount">{calcTotalItemsInCart()}</span>
              </div>
            </li>
            <li>
              <button className="loginBtn">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
