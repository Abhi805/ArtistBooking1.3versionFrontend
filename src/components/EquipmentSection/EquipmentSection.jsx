import React, { useEffect, useRef, useState } from 'react';
import './EquipmentSection.css';

import eq1 from './eqimage/rtr.avif';
import eq2 from './eqimage/rtr2.jpg';
import eq3 from './eqimage/rtr3.avif';
import eq4 from './eqimage/rtr4.avif';
import eq5 from './eqimage/rtr5.avif';

const EquipmentSection = () => {
  const equipmentImages = [eq1, eq2, eq3, eq4, eq5];
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    cardRefs.current.forEach((ref, i) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="equipment-section">
      <div className="container">  
        <h2 className="subheading">Equipment</h2>
        <h2 className="main-heading">
          Event <span>Equipment</span> At Your Fingertips
        </h2>
        <p className="description text-capitalize">
          Explore a wide selection of event equipment and services, from audio-visual rentals to seating.
          We provide everything you need, including DJ sound equipment rental, to create a seamless,
          memorable event experience. <span className="highlight">Find Your Equipment</span>
        </p>

        <div className="slider-container">
          {equipmentImages.map((image, index) => (
            <div
              className={`slide ${visibleCards[index] ? 'visible' : ''}`}
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              style={{
                animationDelay: visibleCards[index] ? `${index * 0.2}s` : '0s',
              }}
            >
              <img src={image} alt={`Equipment ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
