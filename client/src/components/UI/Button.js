import React from 'react'
import classes from "./Button.module.css"
const Button = (props) => {
  return (
    <button style={{backgroundColor: `${props.bgcolor}`, borderColor: `${props.bordercolor}`}} className={classes.button} onClick={props.onClick}>
        {props.name} 
    </button>
  )
}

export default Button