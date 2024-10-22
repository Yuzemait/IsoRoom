import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Product from '../components/Product'
import './Catalog.css'
import Footer from '../components/Footer'
import { IoSearch } from "react-icons/io5";
import Select from "react-dropdown-select";

function Catalog() {
  const productsList = [];
  for (let i = 0; i < 20; i++) {
    productsList.push(
      <li key={i}>
        <Product title={`Product ${i + 1}`} />
      </li>
    );
  }

  const categories = [
    {
      value: 1,
      label: 'All Categories'
    },
    {
      value: 2,
      label: 'Tables'
    },
    {
      value: 3,
      label: 'Lamps'
    }
  ];


  return (
    <>
    <Navbar />
    <PageTitle title='CATALOG' />
    <div className='catalog'>
      <div className='catalog-searchbar'>
        <div className='search-bar'>
          <input type='text' placeholder='Search products...' />
          <button><IoSearch /></button>
        </div>
        <div className='categories'>
          <Select placeholder='All Categories' options={categories} style={{
            border: "none",
            background: "white",
            height: "5px",
            width: "200px",
            padding: "5px",
            margin: "0px",
            fontSize: "14px",
            color: "#333",
          }}/>
        </div>
      </div>
      <div className='catalog-items'>
        <ul>
          {productsList}
        </ul>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Catalog