import React, { Fragment } from "react";
import classes from "./GraphCard.module.css";
const GraphCard = (props) => {
  return (
    <Fragment>
      <div className={classes.graphCard}>{props.children}</div>
    </Fragment>
  );
};

export default GraphCard;
