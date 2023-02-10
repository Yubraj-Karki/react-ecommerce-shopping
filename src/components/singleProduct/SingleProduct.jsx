import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context";

import { ProductIncrementor } from "../index";

import "./singleProduct.css";

const SingleProduct = () => {
  const { getProduct, addToCart, counterValues, handleIncrementorChange } =
    useContext(MyContext);

  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(slug));
  }, [getProduct, slug]);

  const { id, name, gender, price, description, images } = product;

  const buttonStyleDisable = {
    opacity: 0.3,
    cursor: "not-allowed",
    // pointerEvents: "auto",
  };

  const buttonStyleEnable = {
    opacity: 1,
  };

  console.log(counterValues, "counterValues");

  return (
    <div className="singleProduct">
      <div className="container">
        <div className="productContent">
          <div className="left">
            <img src={images} alt="" />
          </div>
          <div className="right">
            <div className="singleProductHeader">
              <h1 className="singleProductName">{name}</h1>
              <p className="singleProductPrice">Rs. {price}</p>
            </div>
            <p className="singleProductGender">{gender}</p>
            <p className="singleProductDescription">{description}</p>
            <div className="singleProductDivider"></div>
            <div className="productAddAndQtty">
              <div className="quantityIncrementor">
                <label htmlFor="Quantity">Quantity:</label>
                <ProductIncrementor
                  id={id}
                  counterValue={counterValues[id] || 0}
                  setCounterValue={(newValue) =>
                    handleIncrementorChange(id, newValue)
                  }
                />
              </div>
              <button
                disabled={
                  Object.keys(counterValues).length === 0 ||
                  counterValues[id] <= 0 ||
                  counterValues[id] >= 11
                }
                style={
                  Object.keys(counterValues).length === 0 ||
                  counterValues[id] <= 0 ||
                  counterValues[id] >= 11
                    ? buttonStyleDisable
                    : buttonStyleEnable
                }
                onClick={() => addToCart(product, counterValues[id])}
                className="addToCartBtn"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
