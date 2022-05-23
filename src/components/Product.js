import React from 'react'
import '../styling/Product.css'

const Product = () => {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>One plus10 pro </p>
            <p className="product__price">
                <small>Rs.</small>
                <strong>72000</strong>
            </p>
            <div className="product__rating">
                <p>🌟</p><p>🌟</p><p>🌟</p>
            </div>
        </div>

            <img src="https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg" alt="" className="product__image" />
            <button>Add to Cart</button>
    </div>
  )
}

export default Product