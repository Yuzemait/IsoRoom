import React, {useRef} from 'react'
import Render from '../components/Render'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import './Showroom.css'


function Showroom() {
  const titleRef = useRef(null); // Crear la referencia para el título

  const changeTitle = (newTitle) => {
    if (titleRef.current) {
      titleRef.current.textContent = newTitle;
    }
  };


  return (
    <>
    <Navbar/>
    <PageTitle title="SHOWROOM"/>
    <hr />
    <div className='showroom'>
      <div className='showroom-tab'>
        <div className='tab-title' id='tab-title' ref={titleRef}>
            PRODUCT
        </div>
        <hr />
        <div className='tab-image'>
          <img src="img/default.jpg" alt="" />
        </div>
        <div className='tab-description'>
          <span>Description: </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum alias iusto doloribus architecto aspernatur assumenda tempora, qui excepturi quo atque dolores hic deserunt aperiam dolore!
        </div>
        <div className='tab-category'>
          <span>Category: </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, qui!
        </div>
        <div className='tab-price'>
          Price: <span className='price-tag'>99.9 $</span>
        </div>
      </div>
      <div className='showroom-render'>
        <Render onTitleChanged={changeTitle}/>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Showroom