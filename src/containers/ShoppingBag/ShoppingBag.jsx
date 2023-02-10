import { React, useContext } from "react";
import "./shoppingBag.css";

import { MyContext } from "../../context";

import { ShoppingBagItem } from "../../components/index";

const ShoppingBag = () => {
  const {
    isCartOpen,
    showHideCart,
    cart,
    calcTotalItemsInCart,
    calcTotalAmount,
  } = useContext(MyContext);

  const cartState = isCartOpen ? "showShoppingCart" : "hideShoppingCart";

  const overlayState = isCartOpen ? "showOverlay" : "hideOverlay";

  return (
    <>
      <div className={"shoppingBagWrapper " + overlayState}></div>
      <div className={"shoppingBag " + cartState}>
        <div className="container">
          <div className="shoppingBagHeader">
            <h3>Shopping Bag</h3>
            <button onClick={showHideCart} className="shoppingCloseBtn">
              X
            </button>
          </div>
          <div className="shoppingBagItems">
            {cart.length > 0 ? (
              cart.map((product) => {
                const { id } = product;

                return <ShoppingBagItem key={id} product={product} />;
              })
            ) : (
              <h3>Your cart is empty</h3>
            )}
          </div>
          <div className="shoppingBagFooter">
            <div className="container">
              <span></span>
              <div className="shoppingBagTotal">
                <div>
                  <h3>Total ({calcTotalItemsInCart()}) items</h3>
                </div>
                <div className="totalAmount">Rs.{calcTotalAmount()}</div>
              </div>
              <span></span>
              <button className="checkOutBtn">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
