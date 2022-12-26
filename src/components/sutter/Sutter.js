import React from 'react' 

import './Sutter.css'

const Sutter = (props) => {
  return (
    <div>
        <div className="conatiner__sutter">
            <img src={props.img} alt="" />
        <p>{props.name}</p>
        </div>
    </div>
  )
}

export default Sutter