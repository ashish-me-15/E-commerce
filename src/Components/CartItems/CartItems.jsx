import React, { useContext } from 'react'
import "./CartItems.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {

    const {all_product, CartItems, removeFromCart } = useContext(ShopContext);

    
    console.log("Cart Items:", CartItems);
    console.log("All Products:", all_product);

   

    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

            
        </div>
        <hr />

       

       {all_product.map((e) => {

        if(CartItems[e.id] > 0) {
            return  <div>
            <div className='cartitems-format'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                <p>{e.new_price * CartItems[e.id] }</p>
            
                <img src={remove_icon} alt='' onClick={() => {removeFromCart(e.id)}} />


            </div>
            <hr  />
            
        </div>
        }
        else {
            return null;
        }

       })}
    </div>



}

export default CartItems
