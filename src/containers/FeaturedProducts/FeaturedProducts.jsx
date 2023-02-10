import React, { useState, useContext } from "react";
import { ProductItem } from "../../components";
import { MyContext } from "../../context";

import { Link } from "react-router-dom";

import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const { featuredProducts } = useContext(MyContext);
  const [sliderMovement] = useState(0);

  // const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <>
      <div className="container featuredProductsContainer">
        <div className="featured">
          {featuredProducts.map((product) => {
            // const {id, name, price, images, size, slug} = product;

            console.log(product);

            // if (index === sliderIndex) {
            //   position = "activeSlider"
            // } else {
            //   position = ""
            // }

            return (
              <ProductItem
                sliderMovement={sliderMovement}
                key={product.id}
                product={product}
              />
            );
          })}
        </div>
        {/* <button onClick={handleSlider}>Right</button> */}
        <Link to="/products">
          <button>See all products</button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedProducts;
