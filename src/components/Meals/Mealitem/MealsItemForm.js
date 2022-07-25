import React, { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealsItemForm.module.css";
function MealsItemForm(props) {
  const [amountISValid, setAmountisValid] = useState(true);
  const amountinputRef = React.useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountinputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountisValid(false);
      return {};
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountinputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountISValid && <p>Please enter valid amount (1-5) </p>}
    </form>
  );
}

export default MealsItemForm;
