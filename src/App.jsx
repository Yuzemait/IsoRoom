import { useState } from 'react'
import Render from './components/Render'
import Navbar from './components/Navbar.jsx'
import './App.css' 
import Product from './components/Product.jsx'
import Footer from './components/Footer.jsx'
import PageTitle from './components/PageTitle.jsx'


function App() {
  const [count, setCount] = useState(0)

  const productsList = [];
  for (let i = 0; i < 4; i++) {
    productsList.push(
      <li key={i}>
        <Product title={`Product ${i + 1}`} />
      </li>
    );
  }

  return (
    <>
      <Navbar/>
      <div className='body-container'> 
          <div className='wallpaper-container'>
            <img src="/img/wallpaper2.jpg" alt="" />
          </div>

          <div className='featured-container'>
              <PageTitle title="FEATURED PRODUCTS"/>
              <div className='featured-items'>
                  <ul className='items'>
                    {productsList}
                  </ul>
              </div>
          </div>
          
      </div>
      <Footer />
    </>
  )
}

export default App
