import { React, useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../../context";

import { ProductIncrementor } from "../index";
import { IoIosArrowRoundBack } from "react-icons/io";

import "./singleProduct.css";

const SingleProduct = () => {
  const { getProduct, addToCart, counterValues, handleIncrementorChange } =
    useContext(MyContext);

  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
      const product = getProduct(slug);
      setProduct(product);
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  console.log(product, "product");

  const { id, name, gender, price, description, images } = product;

  const buttonStyleDisable = {
    opacity: 0.3,
    cursor: "not-allowed",
    // pointerEvents: "auto",
  };

  const buttonStyleEnable = {
    opacity: 1,
  };

  const isButtonDisabled =
    !counterValues.hasOwnProperty(id) ||
    counterValues[id] <= 0 ||
    counterValues[id] >= 11;

  const buttonStyle = isButtonDisabled ? buttonStyleDisable : buttonStyleEnable;

  console.log(counterValues, "counterValues");

  const addToCartWithReset = (product, count) => {
    addToCart(product, count);
    handleIncrementorChange(id, 0);
  };

  return (
    <div className="singleProduct">
      <div className="container">
        <Link to="/products">
          <div className="goBack">
            <IoIosArrowRoundBack className="icon" />

            <h3>Back To Products</h3>
          </div>
        </Link>

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
                disabled={isButtonDisabled}
                style={buttonStyle}
                onClick={() => addToCartWithReset(product, counterValues[id])}
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
