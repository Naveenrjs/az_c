import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" 
            src="https://img.freepik.com/premium-photo/amazon-prime-day-sale_1100041-2679.jpg?w=740" alt="messed up" />
       

        <div className="home_row">
          <Product title='the leann startup'
          price ={29.99} 
          image="./product1.jpg"
          rating={3} />   
          <Product /> 
          
        </div>

        <div className="home_row">
          <Product /> 
          <Product /> 
          <Product /> 
        </div>

        <div className="home_row">
        <Product /> 
        </div>


      </div>
    </div>
  )
}
export default Home;
