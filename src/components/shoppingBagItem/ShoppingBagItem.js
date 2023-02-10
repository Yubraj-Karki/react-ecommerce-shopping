import { React, useContext, useState } from "react";
import "./shoppingBagItem.css";

import { ProductIncrementor } from "../../components/index";

import { MyContext } from "../../context";

const ShoppingBagItem = ({ product }) => {
  const {
    id,
    name,
    gender,
    size,
    price,
    description,
    images,
    inCart,
    count,
    total,
  } = product;

  const {
    counterValues,
    handleIncrementorChange,
    productIncrement,
    productDecrement,
  } = useContext(MyContext);

  return (
    <>
      <div key={id} className="shoppingBagItem">
        <div className="shoppingBagItemImg">
          <img src={images} alt="" />
        </div>
        <div className="shoppingBagItemFooter">
          <div className="nameAndPrice">
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <div className="shoppingBagItemCounter">
            <ProductIncrementor
              id={id}
              counterValue={counterValues[id] || 0}
              setCounterValue={(newValue) =>
                handleIncrementorChange(id, newValue)
              }
              productIncrement={productIncrement}
              productDecrement={productDecrement}
              className="shoppingBagItemContainer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBagItem;
