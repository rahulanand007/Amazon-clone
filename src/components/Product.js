import React from 'react'
import '../styling/Product.css'

const Product = ({id,title,image,price,rating}) => {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title} </p>
            <p className="product__price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i)=>(
                  <p>🌟</p>
                ))}
            </div>
        </div>

            <img src={image} alt="" className="product__image" />
            <button>Add to Cart</button>
    </div>
  )
}

export default Product