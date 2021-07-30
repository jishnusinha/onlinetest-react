import { useState } from "react";
import Button from "./components/UI/Button";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Card from "./components/UI/Card";
import TestSection from "./components/Test/TestSection";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  {
    /* <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
 */
  }

  return (
    <CartProvider>
      <TestSection />
    </CartProvider>
  );
}

export default App;
