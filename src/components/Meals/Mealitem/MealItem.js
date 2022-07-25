import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cart-context";
function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addTocartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.name}>{props.desc}</div>
        <div className={classes.price}> {price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={addTocartHandler} />
      </div>
    </li>
  );
}

export default MealItem;