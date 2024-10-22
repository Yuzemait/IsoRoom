import React from 'react'
import './PageTitle.css'

export default function PageTitle({title = 'Page Title'}) {
  return (
    <>
    <div className='title'>
                  <p>{title}</p>
               
    </div>
    </>
  )
}
