import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './TrustCompany.css';

import image1 from '../../components/TrustCompany/images/accenture.jpeg';
import image2 from '../../components/TrustCompany/images/axsibank.jpeg';
import image3 from '../../components/TrustCompany/images/bankmaharastra.jpeg';
import image4 from '../../components/TrustCompany/images/cipla.jpeg';
import image5 from '../../components/TrustCompany/images/coii.jpeg';
import image6 from '../../components/TrustCompany/images/dabar.jpeg';
import image7 from '../../components/TrustCompany/images/dna.jpeg';
import image8 from '../../components/TrustCompany/images/eag.jpeg';
import image9 from '../../components/TrustCompany/images/hdfclife.jpeg';
import image10 from '../../components/TrustCompany/images/herballife.jpeg';
import image11 from '../../components/TrustCompany/images/hettich.jpeg';
import image12 from '../../components/TrustCompany/images/incridableindia.jpeg';
import image13 from '../../components/TrustCompany/images/johndeere.jpeg';
import image14 from '../../components/TrustCompany/images/lenskart.jpeg';
import image15 from '../../components/TrustCompany/images/lic.jpeg';
import image16 from '../../components/TrustCompany/images/safeshop.jpeg';
import image17 from '../../components/TrustCompany/images/samsung.jpeg';
import image18 from '../../components/TrustCompany/images/sbi.jpeg';
import image19 from '../../components/TrustCompany/images/sbigeneral.jpeg';
import image20 from '../../components/TrustCompany/images/sbilife.jpeg';
import image21 from '../../components/TrustCompany/images/seventy.jpeg';
import image22 from '../../components/TrustCompany/images/solidaridad.jpeg';
import image23 from '../../components/TrustCompany/images/sopa.jpeg';
import image24 from '../../components/TrustCompany/images/srf.jpeg';
import image25 from '../../components/TrustCompany/images/ultratrack.jpeg';
import image26 from '../../components/TrustCompany/images/unionbank.jpeg';
import image27 from '../../components/TrustCompany/images/WM.jpeg';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17,
  image18, image19, image20, image21, image22, image23, image24, image25,
  image26, image27
];

const half = Math.ceil(images.length / 2);
const rows = [images.slice(0, half), images.slice(half)];

const TrustCompany = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`trust-section container-fluid ${isVisible ? 'show' : ''}`}
      ref={sectionRef}
    >
      <h5 className="trust-title text-center mb-5">
        <span className="highlight">Brands</span> We’ve Worked With
      </h5>

      {rows.map((rowImages, rowIndex) => (
        <Swiper
          key={rowIndex}
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 3000 + rowIndex * 1000,
            disableOnInteraction: false,
          }}
          className="trust-swiper-row mb-4"
        >
          {rowImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="trust-image-card animate-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <img
                  src={img}
                  alt={`Company ${rowIndex}-${i}`}
                  className="trust-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </section>
  );
};

export default TrustCompany;
