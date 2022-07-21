import Link from "next/link";
import React from "react";

import classes from "./segments.module.scss";

const Segments = () => {
  return (
    <div>
      <div className={classes.segments_wrapper}>
        <div className={`${classes.segments_item} ${classes.jewelery}`}>
          <img className={classes.zoom} src="/images/1.jpg" />
          <Link href="/Jewelery">
            <p className={classes["tracking-in-expand"]}>Jewelery</p>
          </Link>
        </div>
        <div className={`${classes.segments_item} ${classes.electronics}`}>
          <img className={classes.zoom} src="/images/2.jpg" />
          <Link href="/Electronics">
            <p className={classes["tracking-in-expand"]}>Electronics</p>
          </Link>
        </div>
        <div className={`${classes.segments_item} ${classes.clothing}`}>
          <img className={classes.zoom} src="/images/3.jpg" />
          <Link href="/Clothing">
            <p className={classes["tracking-in-expand"]}>Clothing</p>
          </Link>
        </div>
      </div>
      <div className={classes.introduction}>
        <h1>Welcome to Claudio´s</h1>
        <p>Please, choose one segment above so you can shop</p>
      </div>
    </div>
  );
};

export default Segments;
