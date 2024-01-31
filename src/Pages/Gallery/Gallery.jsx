import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gallery() {
  let all = ["./Images/Gallery/All/1.jpeg", "./Images/Gallery/All/2.jpeg", "./Images/Gallery/All/3.jpeg", "./Images/Gallery/All/4.jpeg", "./Images/Gallery/All/5.jpeg", "./Images/Gallery/All/6.jpeg"]
  let destinations = ["/Images/Gallery/Destinations/1.jpeg", "./Images/Gallery/Destinations/2.jpeg", "./Images/Gallery/Destinations/3.jpeg", "/Images/Gallery/Destinations/4.jpeg", "./Images/Gallery/Destinations/5.jpeg", "/Images/Gallery/Destinations/6.jpeg"]
  let adventure = ["/Images/Gallery/Adventure/1.jpeg", "./Images/Gallery/Adventure/2.jpeg", "./Images/Gallery/Adventure/3.jpeg", "/Images/Gallery/Adventure/4.jpeg", "./Images/Gallery/Adventure/5.jpeg", "/Images/Gallery/Adventure/6.jpeg"]
  let culture = ["/Images/Gallery/Culture/1.jpeg", "./Images/Gallery/Culture/2.jpeg", "./Images/Gallery/Culture/3.jpeg", "/Images/Gallery/Culture/4.jpeg", "./Images/Gallery/Culture/5.jpeg", "/Images/Gallery/Culture/6.jpeg"]
  let cuisine = ["/Images/Gallery/Cuisine/1.jpeg", "./Images/Gallery/Cuisine/2.jpeg", "./Images/Gallery/Cuisine/3.jpeg", "/Images/Gallery/Cuisine/4.jpeg", "./Images/Gallery/Cuisine/5.jpeg", "/Images/Gallery/Cuisine/6.jpeg"]
  useEffect(() => {
    AOS.init();
  }, [])
  let [activeBtn, setActiveBtn] = useState('galBtn1');
  let [imgUrl, setimgUrl] = useState(all);
  useEffect(() => {
    let active = document.getElementsByClassName('activeGallBtn')[0];
    if (active !== null && active !== undefined) {
      active.classList.remove('activeGallBtn');
    }
    active = document.getElementsByClassName(activeBtn)[0];
    if (active !== null && active !== undefined) {
      active.classList.add('activeGallBtn');
    }
    switch (activeBtn) {
      case ('galBtn1'):
        setimgUrl(all);
        break;
      case ('galBtn2'):
        setimgUrl(destinations);
        break;
      case ('galBtn3'):
        setimgUrl(adventure);
        break;
      case ('galBtn4'):
        setimgUrl(culture);
        break;
      case ('galBtn5'):
        setimgUrl(cuisine);
        break;
    }
      AOS.refreshHard();
  }, [activeBtn])


  return (
    <div className='imgGall py-2'>
      <div className='heading-text imageGallHeading col-11 ms-auto mt-2'>Image <span className='blue-underline'>Gallery.</span></div>
      <div className='d-flex justify-content-center paragraph-text imgGallBtns'>
        <button className='btn imgGallBtn galBtn1 mx-3 py-2 activeGallBtn' onClick={() => { setActiveBtn('galBtn1') }}>All</button>
        <button className='btn imgGallBtn galBtn2 mx-3 py-2' onClick={() => { setActiveBtn('galBtn2') }}>Destinations</button>
        <button className='btn imgGallBtn galBtn3 mx-3 py-2' onClick={() => { setActiveBtn('galBtn3') }}>Adventure</button>
        <button className='btn imgGallBtn galBtn4 mx-3 py-2' onClick={() => { setActiveBtn('galBtn4') }}>Culture</button>
        <button className='btn imgGallBtn galBtn5 mx-3 py-2' onClick={() => { setActiveBtn('galBtn5') }}>Cuisine</button>
      </div>
      <div className='galImages mx-auto'>
        <div className='row text-center'>
          <div className='col-4 my-2' data-aos="fade-up"><img className="gallImg" src={imgUrl[0]} alt="" /></div>
          <div className='col-4 my-2' data-aos="fade-up"><img className="gallImg" src={imgUrl[1]} alt="" /></div>
          <div className='col-4 my-2' data-aos="fade-up"><img className="gallImg" src={imgUrl[2]} alt="" /></div>
          <div className='col-4 my-2' data-aos="fade-up"><img className="gallImg" src={imgUrl[3]} alt="" /></div>
          <div className='col-4 my-2' data-aos="fade-up"><img className="gallImg" src={imgUrl[4]} alt="" /></div>
          <div className='col-4 my-2' data-aos="fade-up"><img className="gallImg" src={imgUrl[5]} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Gallery