import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const product = useSelector(state => state.cart)
  console.log(product)
  return (
    <div>{
      product.map((item) => {
        const { price } = item
        console.log(price)
        return (
          <div>
            <h1> price:{price}</h1>
          </div>
        )
      })
    }</div>
  )
}

export default Cart