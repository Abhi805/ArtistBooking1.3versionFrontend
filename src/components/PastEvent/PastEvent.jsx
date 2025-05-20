import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PastEvent.css';

import event1 from '../PastEvent/assets11/event1.jpg';
import event2 from '../PastEvent/assets11/event2.jpg';
import event3 from '../PastEvent/assets11/event3.jpeg';
import event4 from '../PastEvent/assets11/event4.jpg';
import event5 from '../PastEvent/assets11/event5.jpg';
import event6 from '../PastEvent/assets11/event6.webp';
import event7 from '../PastEvent/assets11/event7.jpeg';

const events = [
  {
    id: 1,
    image: event1,
    title: 'Corporate Night',
  
  },
  {
    id: 2,
    image: event2,
    title: 'Product Launch Event',
 
  },
  {
    id: 3,
    image: event3,
    title: 'Annual Sports Meet',
   
  },
  {
    id: 4,
    image: event4,
    title: 'Cultural Fest',
   
  },
  {
    id: 5,
    image: event5,
    title: 'Tech Conference',
   
  },
  {
    id: 6,
    image: event6,
    title: 'Meetings',
  
  },
  {
    id: 7,
    image: event7,
    title: 'Past Collaborations',
   
  },
];

const PastEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

const settings = {
  dots: true,
  infinite: true,
  speed: 1500, // Slide transition speed (increased from 900 to 1500)
  autoplaySpeed: 1000, // Time between each slide (increase to slow down autoplay)
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {  
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
};


  return (
    <section className="pe-section">
      <div className="pe-container">
        <h5 className="pe-subtitle" data-aos="fade-up">
          <p className='fs-3' style={{color:"red"}} >Past Defines The Future</p>
        </h5>
        <h2 className="pe-title" data-aos="fade-up">
          <span className="pe-title-highlight">The Best</span> of What Just Happened
        </h2>
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} data-aos="fade-up">
              <div className="pe-card">
                <div className="pe-image-wrapper">
                  <img src={event.image} alt={event.title} className="pe-image" />
                </div>
                <div className="pe-content">
                  <h5 className="pe-card-title">{event.title}</h5>
                  <p className="pe-card-text">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PastEvent;
