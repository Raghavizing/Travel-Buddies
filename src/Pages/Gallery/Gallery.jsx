import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const all = ["./Images/Gallery/All/1.jpeg", "./Images/Gallery/All/2.jpeg", "./Images/Gallery/All/3.jpeg", "./Images/Gallery/All/4.jpeg", "./Images/Gallery/All/5.jpeg", "./Images/Gallery/All/6.jpeg"]
const destinations = ["/Images/Gallery/Destinations/1.jpeg", "./Images/Gallery/Destinations/2.jpeg", "./Images/Gallery/Destinations/3.jpeg", "/Images/Gallery/Destinations/4.jpeg", "./Images/Gallery/Destinations/5.jpeg", "/Images/Gallery/Destinations/6.jpeg"]
const adventure = ["/Images/Gallery/Adventure/1.jpeg", "./Images/Gallery/Adventure/2.jpeg", "./Images/Gallery/Adventure/3.jpeg", "/Images/Gallery/Adventure/4.jpeg", "./Images/Gallery/Adventure/5.jpeg", "/Images/Gallery/Adventure/6.jpeg"]
const culture = ["/Images/Gallery/Culture/1.jpeg", "./Images/Gallery/Culture/2.jpeg", "./Images/Gallery/Culture/3.jpeg", "/Images/Gallery/Culture/4.jpeg", "./Images/Gallery/Culture/5.jpeg", "/Images/Gallery/Culture/6.jpeg"]
const cuisine = ["/Images/Gallery/Cuisine/1.jpeg", "./Images/Gallery/Cuisine/2.jpeg", "./Images/Gallery/Cuisine/3.jpeg", "/Images/Gallery/Cuisine/4.jpeg", "./Images/Gallery/Cuisine/5.jpeg", "/Images/Gallery/Cuisine/6.jpeg"]
const categories = ["all","destinations","Adventure","culture","cuisine"]
function Gallery() {
  const [imgArray, setImageArray] = useState(all);
  let [activeBtn, setActiveBtn] = useState('all');
  useEffect(() => {
    AOS.init();
  }, [])

  function handleChange(event) {
    let name = event.target.name;
    document.getElementsByName(activeBtn)[0].classList.remove("activeGallBtn");
    document.getElementsByName(name)[0].classList.add("activeGallBtn");
    setActiveBtn(name);
    switch (name) {
      case "all":
        setImageArray(all);
        break;
      case "destinations":
        setImageArray(destinations);
        break;
      case "adventure":
        setImageArray(adventure);
        break;
      case "culture":
        setImageArray(culture);
        break;
      case "cuisine":
        setImageArray(cuisine);
        break;
    }
  }

  return (
    <div className='imgGall py-2'>
      <div className='heading-text imageGallHeading col-11 ms-auto mt-2'>Image <span className='blue-underline'>Gallery.</span></div>
      <div className='d-flex justify-content-center paragraph-text imgGallBtns'>
        {categories.map((item,index)=><button className={`btn imgGallBtn galBtn5 mx-3 py-2 text-capitalize ${index===0?"activeGallBtn":""}`} name={item} onClick={handleChange}>{item}</button>)}
      </div>
      <div className='galImages mx-auto'>
        <div className='row text-center'>
          {imgArray.map((item,index) => <div className='col-4 my-2' data-aos="fade-up" key={index}><img className="gallImg" src={item} alt="" /></div>)}

        </div>
      </div>
    </div>
  )
}

export default Gallery