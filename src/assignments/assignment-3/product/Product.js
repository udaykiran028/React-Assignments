import React from 'react'

function Product(props) {
  return (
      <div className="card p-4 m-2 w-25 shadow-lg" style={{background:'linear-gradient(to right, #E6E6FA, #F0FFFF)'}}>
          <img src={props.productData.image} alt="" className='d-block mx-auto w-50 rounded'/>
          <div className="card-body">
              <p className="lead "><b>Title: </b>{props.productData.title}</p>
              <p className="lead"><b>Price: </b>₹{props.productData.price}</p>
              <p className="lead"><b>Description: </b>{props.productData.description}</p>
              <p className="lead"><b>Category: </b>{props.productData.category}</p>
              <p className="lead"><b>Rating: </b>{props.productData.rating.rate}</p>
              <p className="lead"><b>Count: </b>{props.productData.rating.count}</p>
          </div>
      </div>
  )
}

export default Product
