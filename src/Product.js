import React from 'react'
import './Product.css'

function Product({ title, image, price, rating }) {
  return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                 {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟</p>))}
                    
            </div>
        </div>
                
        <img src="./product1.jpg" alt="hello"/>
        <button>add to basket</button>
        </div>
  );
}
export default Product