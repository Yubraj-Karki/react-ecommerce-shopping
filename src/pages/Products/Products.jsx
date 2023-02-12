import React, { useContext } from "react";
import { ProductItem } from "../../components";

import { MyContext } from "../../context";

import "./products.css";

const Products = () => {
  const {
    products,
    size,
    filteredProducts,
    maxPrice,
    gender,
    name,
    handleChange,
    handleSearchInput,
  } = useContext(MyContext);

  const getUniqueValues = (items, value) => {
    return [
      "all",
      ...new Set(
        items.map((item) => {
          return item[value];
        })
      ),
    ];
  };

  console.log(filteredProducts);

  return (
    <div className="products">
      <div className="container">
        <div className="filter">
          <h3>Filter Products</h3>
          <span className="line"></span>
          <label htmlFor="gender">Select a gender: </label>

          <select name="gender" value={gender} onChange={handleChange}>
            {getUniqueValues(products, "gender").map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </select>

          <label htmlFor="size">Select size: </label>

          <select name="size" value={size} onChange={handleChange}>
            {getUniqueValues(products, "size").map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </select>

          <label htmlFor="price">Select price range: </label>

          <span>
            <input
              name="price"
              onChange={handleChange}
              type="range"
              min="1"
              max="2000"
              className="rangeSlider"
              value={maxPrice}
            />

            <p className="price">0 - Rs. {maxPrice}</p>
          </span>
        </div>

        <main>
          <h4>Search Products</h4>
          <input
            className="productSearchInput"
            onChange={handleSearchInput}
            value={name}
            type="text"
            focus="true"
            placeholder="Type product name here..."
          />
          {filteredProducts.length <= 0 ? (
            <h3 className="noItemFoundMsg">Oops! No such item found :(</h3>
          ) : (
            <>
              <h3>
                {filteredProducts.length} items found{" "}
                <span className="divider"></span>{" "}
              </h3>
              <div className="filteredProducts">
                {filteredProducts.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
                })}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
