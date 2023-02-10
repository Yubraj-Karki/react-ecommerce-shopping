import React, { useState, useEffect } from "react";
import data from "./data";

export const MyContext = React.createContext();

// const initialState = {
//   products: [],
//   sortedProducts:[],
//   featuredProducts:[]
// };

export const ContextProvider = ({ children }) => {
  const [products] = useState(data);
  const [sortedProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // filters
  const [size, setSize] = useState("all");
  const [maxPrice, setMaxPrice] = useState(4000);
  const [gender, setGender] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // slider
  const [sliderItems] = useState([]);
  const [sliderIndex] = useState(0);

  // shopping cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cart, setCart] = useState([]);

  // const [counterValue, setCounterValue] = useState(0);

  const [counterValues, setCounterValues] = useState({});

  // toast notification
  const [showNotification, setShowNotification] = useState({
    display: false,
    message: "",
    subMessage: "",
    type: "",
  });

  const handleToastNotification = (type, message, show) => {
    if (type === "error") {
      console.log("error");
    } else if (type === "success") {
      console.log("success");
    } else if (type === "info") {
      console.log("info");
    } else {
      console.log("null");
    }
    setShowNotification(show);
  };

  useEffect(() => {
    setFeaturedProducts(
      products.filter((product) => product.featured === true)
    );
    setFilteredProducts(filterProducts(size, maxPrice, gender));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, maxPrice, gender]);

  const getProduct = (id) => {
    let tempProducts = [...products];
    let product = tempProducts.find((product) => product.id === id);

    return product;
  };

  const handleChange = (product) => {
    product.preventDefault();

    const name = product.target.name;
    const value = product.target.value;

    if (name === "size") {
      setSize(value);
    } else if (name === "gender") {
      setGender(value);
    } else {
      setMaxPrice(value);
    }
  };

  const filterProducts = (size, maxPrice, gender) => {
    let tempProducts = [...products];

    if (gender !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.gender === gender
      );
    }

    tempProducts = tempProducts.filter((product) => product.price <= maxPrice);

    if (size !== "all") {
      tempProducts = tempProducts.filter((product) => product.size === size);
    }

    return tempProducts;
  };

  const handleSlider = () => {};

  const showHideCart = () => {
    const showHideCart = isCartOpen === true ? false : true;

    setIsCartOpen(showHideCart);
  };

  // const addToCart = (product, count) => {
  //   console.log(count, "count from add to cart");
  //   if (product.inCart) {
  //     const cartItems = [...cart];
  //     const indexOfCartItem = cartItems.indexOf(product);
  //     let existingProduct = cartItems[indexOfCartItem];

  //     let updatedProduct = {
  //       ...existingProduct,
  //       count: existingProduct.count + count,
  //     };

  //     cartItems.splice(indexOfCartItem, 1, updatedProduct);

  //     console.log(updatedProduct, "updatedProduct");
  //     setCart(cartItems);
  //   } else {
  //     let tempProducts = [...products];
  //     const index = tempProducts.indexOf(product);
  //     const updatedProduct = tempProducts[index];
  //     updatedProduct.inCart = true;
  //     updatedProduct.count = count;
  //     setCart([...cart, updatedProduct]);
  //   }
  // };

  const addToCart = (product, count) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    if (existingProductIndex > -1) {
      if (count + cart[existingProductIndex].count > 10) {
        count = 10 - cart[existingProductIndex].count;
      }

      const updatedCart = [...cart];
      updatedCart[existingProductIndex].count += count;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, count, inCart: true }]);
    }

    const notification = {
      display: true,
      message: `Yay! ${count} items added to your cart`,
      subMessage: "",
      type: "success",
    };

    if (count <= 0) {
      notification.message = `We adjusted your item count for this product to 10.`;
      notification.subMessage =
        "Can't add more than 10 items of the same type.";
      notification.type = "info";
    }

    setShowNotification(notification);

    // const toast = setShowNotification(true);
  };

  const calcTotalItemsInCart = () => {
    let totalItems = cart
      .map((cartItem) => {
        return cartItem.count;
      })
      .reduce((prevCount, currentCount) => prevCount + currentCount, 0);

    return totalItems;
  };

  const calcTotalAmount = () => {
    let cost = cart
      .map((item) => {
        item.total = item.count * item.price;
        return item.total;
      })
      .reduce((prev, current) => prev + current, 0);

    return cost;
  };

  const handleIncrementorChange = (id, newValue) => {
    // if(newValue !=11){}
    if (newValue < 11) {
      setCounterValues({ ...counterValues, [id]: newValue });
    }
  };

  const productIncrement = (id) => {
    let tempCart = [...cart];
    let product = tempCart.find((item) => item.id === id);
    let productIndexInCart = cart.indexOf(product);
    if (counterValues[id] < 10) {
      const updatedProduct = { ...product, count: product.count + 1 };
      tempCart[productIndexInCart] = updatedProduct;
      setCart(tempCart);
    }
  };

  const productDecrement = (id) => {
    let tempCart = [...cart];
    let product = tempCart.find((item) => item.id === id);
    let productIndexInCart = cart.indexOf(product);
    const updatedProduct = { ...product, count: product.count - 1 };

    if (product.count <= 1) {
      tempCart = tempCart.filter((item) => item.id !== id);
      const notification = {
        display: true,
        message: `Item successfully removed from your cart`,
        subMessage: "",
        type: "success",
      };

      setShowNotification(notification);
    } else {
      tempCart[productIndexInCart] = updatedProduct;
    }
    setCart(tempCart);
  };

  console.log(cart);

  return (
    <MyContext.Provider
      value={{
        products,
        sortedProducts,
        featuredProducts,
        getProduct,
        filterProducts,
        filteredProducts,
        size,
        maxPrice,
        gender,
        handleChange,
        handleSlider,
        sliderItems,
        sliderIndex,
        showHideCart,
        isCartOpen,
        addToCart,
        cart,
        calcTotalItemsInCart,
        calcTotalAmount,
        handleIncrementorChange,
        counterValues,
        setCounterValues,
        productIncrement,
        productDecrement,
        showNotification,
        setShowNotification,
        handleToastNotification,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
