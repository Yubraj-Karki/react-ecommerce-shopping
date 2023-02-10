/* eslint-disable eqeqeq */
import { React, useContext } from "react";
import "./productIncrementor.css";

import { MyContext } from "../../context";

const ProductIncrementor = ({
  id,
  counterValue,
  setCounterValue,
  productIncrement,
  productDecrement,
  className,
}) => {
  const { handleIncrementorChange } = useContext(MyContext);

  const handleIncrement = () => {
    if (counterValue <= 10) {
      setCounterValue(counterValue + 1);
      if (className == "shoppingBagItemContainer") {
        productIncrement(id);
        console.log("productIncrement");
      }
    }
  };

  const handleDecrement = () => {
    if (counterValue >= 1) {
      setCounterValue(counterValue - 1);
      if (className == "shoppingBagItemContainer") {
        productDecrement(id);
      }
    }
  };

  return (
    <div className="productIncrementor">
      <button onClick={handleDecrement} className="quantityIncrementorMinus">
        -
      </button>
      <input
        className="quantity-incrementor__input"
        type="number"
        id={id}
        name="quantity"
        value={counterValue}
        onChange={(e) => handleIncrementorChange(id, e.target.value)}
        min="1"
        max="10"
        required
      />

      <button onClick={handleIncrement} className="quantityIncrementorPlus">
        +
      </button>
    </div>
  );
};

export default ProductIncrementor;
