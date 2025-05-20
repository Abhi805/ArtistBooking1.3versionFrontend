import React, { useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ArtistSlider.css';

import event1 from '../../components/ArtistSlider/assets5/ankita-lokhande.webp';
import event2 from '../../components/ArtistSlider/assets5/ShreyaGhoshal.jpeg';
import event3 from '../../components/ArtistSlider/assets5/AdnanSami.jpeg';
import event4 from '../../components/ArtistSlider/assets5/zakirkhan.jpeg';
import event5 from  '../../components/ArtistSlider/assets5/KanikaKapoor.jpeg';
import event6 from  '../../components/ArtistSlider/assets5/Paridhi-sharma.jpeg';
// import event7 from  '../../components/ArtistSlider/assets5/ddd.jpg';

const events = [  
  { id: 1, image: event1, title: 'Ankita Lokhande', description: '' },
  { id: 2, image: event2, title: 'Shreya Ghoshal', description: '' },
  { id: 3, image: event3, title: 'Adnan Sami', description: '' },
  { id: 4, image: event4, title: 'Zakir Khan', description: '' },
  { id: 5, image: event5, title: 'Kanika Kapoor', description: '' },
  { id: 6, image: event6, title: 'Paridhi Sharma', description: '' },
  // { id: 7, image: event7, title: 'boby chorasiya', description: '' },
];

const PastEvent = () => {  
  useEffect(() => {   
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="pe-section">
      <div className="pe-container">
        <h5 className="pe-subtitle" data-aos="fade-down">
         Best artist management companie
        </h5>
        <h2 className="pe-title" data-aos="zoom-in">
          <span className="pe-title-highlight">The Best</span>Making Events Shine with Top Artists
        </h2>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={event.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="pe-card">
                <div className="pe-image-wrapper">
                  <img src={event.image} className="pe-image" alt={event.title} />
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
