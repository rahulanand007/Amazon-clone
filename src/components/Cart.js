import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../styling/Cart.css'

const Cart = () => {
  return (
    <div className='cart'>
        <div className="cart__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" className="cart__ad" />
            <div>
                <h2 className='cart__title'>Your Shopping Basket</h2>
            </div>
        </div>
        <div className="cart__right subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>Subtotal (0 items):<strong>0</strong></p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Cart