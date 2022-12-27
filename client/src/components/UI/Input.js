import React from 'react'
import classes from "./Input.module.css"
const Input = (props) => {
  return (
    <div className={classes.input}>
        <input type="input" placeholder={props.name}></input>
    </div>
  )
}

export default Input