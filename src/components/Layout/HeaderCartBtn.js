import React from "react";

import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
function HeaderCartBtn(props) {
  const [btnIsHighlighted, setbtnisHighlighted] = React.useState(false);

  const cartCtx = React.useContext(CartContext);

  const { items } = cartCtx;
  const noOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnisHighlighted(true);

    const timer = setTimeout(() => {
      setbtnisHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
}

export default HeaderCartBtn;
