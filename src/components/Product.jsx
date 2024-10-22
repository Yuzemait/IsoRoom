import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

export default function Product({title = 'Product', price = 99.9, desc = 'Example Description', img  = '/img/default.jpg', link = '/Catalog'}) {
  return (
    <>
    <Link to={link} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <div className='product-container'>
      <div className='product-title'>
          {title}
      </div>
      <hr />
      <div className='product-image'>
        <img src={img} alt="" />
      </div>
      <div className='product-description'>
        {desc}
      </div>
      <div className='product-price'>
        Price: <span className='price-tag'>{price} $</span>
      </div>
    </div>
    </Link>
    </>
  )
}


