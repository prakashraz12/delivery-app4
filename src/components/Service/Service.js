import React from 'react'
import service from '../../assets/images/service-01.png'
import superdine from '../../assets/images/service-02.png'
import esaypickup from '../../assets/images/service-03.png'
import './Service.css'


const Service = () => {
    const details = [
        {
            img_url: service,
            name: "Quick Delivery" 
        },
        {
            img_url: superdine,
            name: "Super Dine "
        },
        {img_url: esaypickup,
        name: "Esay Pick Up"}
    ]
  return (
    <div>
        <div className="conainer__3">
          {
            details.map((e, index)=>(
                <div className='dabba' key={index}>
            <img src={e.img_url} alt="" />
            <h3>{e.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Service