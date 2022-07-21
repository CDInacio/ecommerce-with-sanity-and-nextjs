import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

import classes from "./nav.module.scss";

const Navbar = () => {
  return (
    <nav className={classes["nav-wrapper"]}>
      <div className={classes["nav-container"]}>
        <div>LOGO</div>
        <div className={classes["nav-links"]}>
          <p>
            <Link href="#">Men</Link>
          </p>
          <p>
            <Link href="#">Woman</Link>
          </p>
          <p>
            <Link href="#">About Us</Link>
          </p>
          <p className={classes.auth}>
            <Link href="#">Register</Link> or <Link href="#">Enter</Link>
          </p>
          <button className={classes["cart-icon"]}>
            <FiShoppingCart size={25} />
            <span className={classes["cart-quantity"]}>0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
