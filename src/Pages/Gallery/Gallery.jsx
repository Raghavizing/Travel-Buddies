import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const all = ["https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600"]
const destinations = ["https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/4058530/pexels-photo-4058530.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/461936/pexels-photo-461936.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=600"]
const adventure = ["https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/564096/pexels-photo-564096.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/887828/pexels-photo-887828.jpeg?auto=compress&cs=tinysrgb&w=600"]
const culture = ["https://images.pexels.com/photos/2354073/pexels-photo-2354073.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2635390/pexels-photo-2635390.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/774282/pexels-photo-774282.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3810971/pexels-photo-3810971.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/776469/pexels-photo-776469.jpeg?auto=compress&cs=tinysrgb&w=600"]
const cuisine = ["https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"]
const categories = ["all", "destinations", "adventure", "culture", "cuisine"]
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
      default:
        setImageArray(all);
    }
  }

  return (
    <div className='imgGall blueBackground'>
      <div className='heading-text imageGallHeading col-11 ms-auto mt-2'>Image <span className='blue-underline'>Gallery.</span></div>
      <div className='d-flex justify-content-center row mx-auto paragraph-text imgGallBtns w-75'>
        {categories.map((item, index) => <button className={`btn imgGallBtn galBtn5 mx-2 text-capitalize col-lg-2 col-3 my-lg-0 my-2 ${index === 0 ? "activeGallBtn" : ""}`} name={item} onClick={handleChange}>{item}</button>)}
      </div>
      <div className='galImages mx-auto'>
        <div className='row text-center d-flex justify-content-around'>
          {imgArray.map((item, index) => (
            <div className='col-lg-4 col-md-6 col-12 my-2' data-aos="fade-up" key={index}>
              <div className='gallImgContainer'>
                <img className="gallImg" src={item} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Gallery