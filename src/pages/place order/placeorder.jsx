import React, { useContext } from 'react'
import { StoreContext } from '../../context/Storecontext'
import './placeorder.css'

const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    
    < form  className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery information</p>
        <div className="multi-fields">
          <input type="text"n placeholder='first name' />
          <input type=" "placeholder='last name' />
        </div>
        <input type="email" placeholder='email' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' /><input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zipcode' />
          <input type="text"  placeholder='country'/>
        </div>
        <input type="text" placeholder='phone' />

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>
      </div>
      
    </form>
  )
}

export default Placeorder
