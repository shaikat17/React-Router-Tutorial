import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {

  const { productID } = useParams()
  return (
    <>
    <h2>Single Products</h2>
    <h4>{productID}</h4>
    <Link to='/products' className='btn'>Back to Product</Link>
    </>
  )
}

export default SingleProduct