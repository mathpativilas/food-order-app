import React from "react";

import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showcart, setShowCart] = React.useState(false);

  const showCartHandler = () => {
    return setShowCart(true);
  };

  const HideCartHandler = () => {
    return setShowCart(false);
  };

  return (
    <CartProvider>
      {showcart && <Cart hidecart={HideCartHandler} />}
      <Header showcart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
