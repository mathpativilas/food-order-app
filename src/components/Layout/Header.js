import React from "react";

import Mealsimg from "../../assets/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartBtn onclick={props.showcart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={Mealsimg} alt="a table full of delicious food" />
      </div>
    </>
  );
}

export default Header;
