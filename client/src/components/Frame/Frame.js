import React, { useState } from "react";
import classes from "./Frame.module.css";
import blankImage from "../../images/blank.jpg";
import img1 from "../../images/img1.jpg"
import { useSelector } from "react-redux";

const Frame = () => {
  const hasImage = useSelector(state=>state.data.hasImage)
  console.log(hasImage);
  const image = useSelector(state=>state.data.image)
  console.log(image);
  // const newImg= `data:image/jpg;base64,${image}`

  return (
    <div className={classes.frame}>
      <div className={classes.heading}>
        <h2>Real time monitoring</h2>
        <h2>Fluroscent Penetration Inspection</h2>
      </div>
      <div className={classes.frameContainer}>
        <div className={classes.imgFrame}>
          <img src={!hasImage ? blankImage : image} alt="imageframe" />
        </div>
        <div className={classes.imgFrame}>
          <img src={blankImage} alt="imageframe" />
        </div>
      </div>
    </div>
  );
};

export default Frame;
