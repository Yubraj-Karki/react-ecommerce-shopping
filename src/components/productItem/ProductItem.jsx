import React, { useContext } from "react";
import "./productItem.css";
import { Link } from "react-router-dom";

import { MyContext } from "../../context";

const ProductItem = ({ product, sliderMovement }) => {
  const { id, name, price, images, size, slug } = product;

  const sliderStyle = {
    transform: `translateX(${sliderMovement}px)`,
    transition: "0.5s ease",
  };

  // console.log(images);

  // console.log(position);

  return (
    <div style={sliderStyle} className="productItem">
      <Link to={`/product/${id}`}>
        <div className="productItemImg">
          <img src={images} alt="Product image" />
        </div>
        <div className="container productItemFooter">
          <h3>{name}</h3>
          <h2>Rs.{price}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
