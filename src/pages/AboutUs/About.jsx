import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

// Import all logo images from assets
import accenture from '../../assets/accenture.jpeg';
import bankmaharastra from '../../assets/bankmaharastra.jpeg';
import axsibank from '../../assets/axsibank.jpeg';
import cipla from '../../assets/cipla.jpeg';
import coii from '../../assets/coii.jpeg';
import dabar from '../../assets/dabar.jpeg';
import dna from '../../assets/dna.jpeg';
import eag from '../../assets/eag.jpeg';
import hdfclife from '../../assets/hdfclife.jpeg';
import hettich from '../../assets/hettich.jpeg';  
import incridableindia from '../../assets/incridableindia.jpeg';
import johndeere from '../../assets/johndeere.jpeg';
import unionbank from '../../assets/unionbank.jpeg';
import ultratrack from '../../assets/ultratrack.jpeg';
import srf from '../../assets/srf.jpeg';
import sopa from '../../assets/sopa.jpeg';
import solidaridad from '../../assets/solidaridad.jpeg';
import seventy from '../../assets/seventy.jpeg';
import sbilife from '../../assets/sbilife.jpeg';
import WM from '../../assets/WM.jpeg';
import sbigeneral from '../../assets/sbigeneral.jpeg';
import sbi from '../../assets/sbi.jpeg';
import samsung from '../../assets/samsung.jpeg';
import nationalinstitude from '../../assets/nationalinstitude.jpeg';
import lic from '../../assets/lic.jpeg';
import lenskart from '../../assets/lenskart.jpeg';
import { Link } from "react-router-dom";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    accenture, bankmaharastra, axsibank, cipla, coii, dabar, dna, eag, hdfclife,
    hettich, incridableindia, johndeere, unionbank, ultratrack, srf, sopa,
    solidaridad, seventy, sbilife, WM, sbigeneral, sbi, samsung, nationalinstitude,
    lic, lenskart
  ];

  const renderCardRow = (cards, direction, delayStart = 0) => (
    <div className="row g-4 mb-4 justify-content-center">
      {cards.map((image, index) => (
        <div
          className="col-lg-2 col-md-3 col-sm-4 col-6"
          key={index}
          data-aos={direction}
          data-aos-delay={delayStart + index * 50}
        >
          <div className="logo-card shadow-sm">
            <img
              src={image}
              alt="logo"
              className="logo-img"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section className="hero-section text-white d-flex align-items-center justify-content-center">
        <div className="container text-center" data-aos="zoom-in">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            Welcome To <br /> GNV India Entertainment
          </h1>
        </div>
      </section>

      <section className="about-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <h2 className="about-title">
                About <span className="highlight">GNV India Entertainment</span>
              </h2>
              <p className="about-text mt-3 text-capitalize text-black">
                GNV India Event Pvt. Ltd. is a visionary event management and entertainment company,
                dedicated to designing immersive experiences across India. With expertise in celebrity
                appearances, international acts, and large-scale event execution, we turn ideas into
                captivating realities.
              </p>
              <Link
                to="/contactUs"
                className="btn btn-danger mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
            Our <span className="highlight">Clients</span>
          </h2>

          {/* Line 1 */}
          {renderCardRow(services.slice(0, 9), "fade-right", 100)}

          {/* Line 2 */}
          {renderCardRow(services.slice(9, 18), "fade-left", 100)}

          {/* Line 3 */}  
          {renderCardRow(services.slice(18, 27), "fade-right", 100)}
        </div>
      </section>
    </>
  );
}
  

