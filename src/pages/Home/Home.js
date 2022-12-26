import React from 'react'
import './Home.css'
import Button from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'
import hero from '../../assets/images/hero.png'
import Sutter from '../../components/sutter/Sutter'
import burgur from '../../assets/images/category-01.png'
import pizza from '../../assets/images/category-02.png'
import asianfood from '../../assets/images/category-03.png'
import rawmeat from '../../assets/images/category-04.png'
import Service from '../../components/Service/Service'
import ProductCard from '../../components/productscard/ProductCard'

const Home = () => {
  const category__product = [
    {
      imgurl: burgur,
      name: 'Burgur'
    },
    {
      imgurl: pizza,
      name: "Pizza"
    },
    {
      imgurl: asianfood,
      name: "Asian Food"
    },
    {
      imgurl: rawmeat,
      name: "Raw Meat"
    }
  ]
  return (
    <div>
      <div className="container">
        <div className="right">
          <div className="text__hero">
            <h5>Esay way to make an order</h5>
            <h1><span style={{ color: "crimson" }} className='__1'>HUNGRY? <span style={{ color: "black" }} className="__2">Just wait food at <span style={{ color: "crimson" }} className='__1'>your door.</span></span></span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nisi optio culpa eaque excepturi?</p>
            <div className="btn__hero">
              <NavLink to='/shop'><Button name="Order now" class='btn__' /></NavLink>
              <NavLink to='/shop'><Button name="See Menu" class='btn__menu' /></NavLink>
            </div>
            <div className="services__">
              <span className="shipping">

                <i class="ri-truck-line"></i>
                <p>No shipping charges</p>
              </span>
              <span className="fastdelivery">

                <i class="ri-refund-2-line"></i>
                <p>Refund policy</p>
              </span>
            </div>
          </div>
        </div>
        <div className="left">
          <img src={hero} alt="" />
        </div>
      </div>
      {/* hero sutter */}
      <div className="sutter">
        {category__product.map((items, index) => (
          <Sutter img={items.imgurl} name={items.name} key={index} />
        ))}
      </div>
      <div className="container__2">
        <div className="text__area">
          <h2>What we serve</h2>
          <h1>Just sit back at home we will take <span style={{ color: "crimson" }}>take care</span></h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quisquam recusandae error asperiores accusamus, nobis tenetur! Et harum nam tenetur exercitationem architecto magnam repudiandae voluptatibus omnis pariatur quis enim, quos eos ut vero beatae cum explicabo minima, modi iure debitis.</p>
        </div>
        <div className="services">
          <Service/>
        </div>
        {/* popular foods  */}
        <div className="popular__foods">
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default Home