import React, { useState } from 'react'
import products from '../../assets/fake-data/products'
import './ProductCard.css'
import {motion} from 'framer-motion'
import  {add} from '../../store/CartSlice'
import { useDispatch } from 'react-redux'
const ProductCard = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState(products)
    const filterItem = (cate) => {
        const filterProduct = products.filter((currElm) => {
            return currElm.category === cate
        })
        setData(filterProduct)
    }

const handleInput = (product)=>{
   //products
   dispatch(add(product))

}
    return (
        <div className='product__crad'>
            <div className="text__feild">
            <h1>Popular Foods</h1>
           <div className="btn__">
           <motion.button  style={{cursor:"pointer"}} whileTap={{scale:1.1}} className="order__btn"onClick={() => filterItem("Burger")}>Burger</motion.button>
            <motion.button style={{cursor:"pointer"}} whileTap={{scale:1.1}} className="order__btn" onClick={() => filterItem("Pizza")}>pizza</motion.button>
            <motion.button style={{cursor:"pointer"}} whileTap={{scale:1.1}} className="order__btn" onClick={() => filterItem("Bread")}>Bread</motion.button>
            <motion.button style={{cursor:"pointer"}} whileTap={{scale:1.1}} className="order__btn" onClick={() => setData(products)}>All</motion.button>
           </div>
            </div>
          <div className="dispaly__flex">
          {
                data.map((item) => {
                    const {  image01, title, price } = item
                    return (
                        
                            <motion.div whileHover={{scale:1.1}} className="container__prooduct">
                                <img src={image01} alt="" />
                                <h2>{title}</h2>
                                <div className="cart__add">
                                <p>${price}</p>
                                <i onClick={()=> handleInput(data)} style={{cursor: "pointer"}} class="ri-add-circle-line"></i>
                                </div>
                            </motion.div>
                    
                    )
                })
            }
          </div>

        </div>
    )
}

export default ProductCard