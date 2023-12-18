import React, { useEffect, useState } from 'react'
import "./Gallery.css"

function Gallery() {
  let [activeBtn,setActiveBtn] = useState('galBtn1');
  useEffect(()=>{
    let active = document.getElementsByClassName('activeGallBtn')[0];
    if(active!==null && active!==undefined){
      active.classList.remove('activeGallBtn');
    }
    active = document.getElementsByClassName(activeBtn)[0];
    if(active!==null && active!==undefined){
      active.classList.add('activeGallBtn');
    }
  },[activeBtn])

  return (
    <div className='imgGall'>
      <div className='heading-text imageGallHeading col-11 ms-auto mt-4'>Image <span className='blue-underline'>Gallery.</span></div>
      <div className='d-flex justify-content-center paragraph-text imgGallBtns'>
        <button className='btn imgGallBtn galBtn1 mx-3 py-2 activeGallBtn' onClick={()=>{setActiveBtn('galBtn1')}}>All</button>
        <button className='btn imgGallBtn galBtn2 mx-3 py-2' onClick={()=>{setActiveBtn('galBtn2')}}>Destinations</button>
        <button className='btn imgGallBtn galBtn3 mx-3 py-2' onClick={()=>{setActiveBtn('galBtn3')}}>Adventure</button>
        <button className='btn imgGallBtn galBtn4 mx-3 py-2' onClick={()=>{setActiveBtn('galBtn4')}}>Culture</button>
        <button className='btn imgGallBtn galBtn5 mx-3 py-2' onClick={()=>{setActiveBtn('galBtn5')}}>Cuisine</button>
      </div>
    </div>
  )
}

export default Gallery