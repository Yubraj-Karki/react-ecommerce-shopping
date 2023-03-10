import React from "react";
import LazyLoad from "react-lazyload";

import "./productItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product, sliderMovement }) => {
  const { id, name, price, images } = product;

  const sliderStyle = {
    transform: `translateX(${sliderMovement}px)`,
    transition: "0.5s ease",
  };

  return (
    <div style={sliderStyle} className="productItem">
      <Link to={`/product/${id}`}>
        <LazyLoad height={200}>
          <div className="productItemImg">
            <img src={images} alt="" />
          </div>
        </LazyLoad>
        <div className="container productItemFooter">
          <h3>{name}</h3>
          <h2>Rs.{price}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
