import React from 'react';
import "./Testimonials.css";
import Testimonies from '../../../Components/Testimonies';

function Testimonials() {
  function createCarousel(props) {
    return (
      <Carousel 
        key={props.id} 
        id={props.id} 
        image={props.image} 
        name={props.name} 
        testimony={props.testimony} 
        date={props.date} 
      />
    );
  }

  function Carousel(props) {
    return (
      <div className={props.id === 1 ? "carousel-item active" : "carousel-item"}>
        <div>
          <div className='carousel-text my-5 subheading-text'>{props.testimony}</div>
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img src={props.image} className="d-block carousel-img mx-5" alt="Testimonial" />
            <div className='text-center my-auto'>
              <div className='user-details1 paragraph-text'>{props.name}</div>
              <div className='user-details2 paragraph-text'>{props.date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='testimonials'>
      <div className='testimonials-header p-0 heading-text'>
        Customer <span className='blue-underline'>Testimonials.</span>
      </div>
      <div id="Usercarousel" className="carousel carousel-dark slide userCarousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Testimonies.map(createCarousel)}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#Usercarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#Usercarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
