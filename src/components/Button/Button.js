import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.clickHere} className={props.class}>{props.name}<i class="ri-arrow-right-s-line"></i></button>
    </div>
  )
}

export default Button