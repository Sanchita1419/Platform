import React from 'react'
import classes from "./Card.module.css"

const Card = (props) => {
  return (
    <div className={classes.card}>
        <p><span>{props.icon}</span>{props.name}</p>
        <p>{props.value}</p>
    </div>
  )
}

export default Card