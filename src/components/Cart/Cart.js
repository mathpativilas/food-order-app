import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
function Cart(props) {
  const cartCtx = React.useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)} `;
  const itemHas = cartCtx.items.length > 0;

  const cartItemAdd = (item) => {
    cartCtx.addItem(item);
  };
  const cartItemRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemove.bind(null, item.id)}
            onAdd={cartItemAdd.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal hidecart2={props.hidecart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hidecart}>
          Close
        </button>
        {itemHas && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
