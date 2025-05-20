


import React from 'react';
import './ContactWidget.css';
import { FaWhatsapp, FaHeadset, FaPhoneAlt } from 'react-icons/fa';
import { useScrollTrigger } from '../ScrollTriger/ScrollTrigger'; // 👈
import { Link } from 'react-router-dom';

const ContactWidget = () => {
  const showWidget = useScrollTrigger(); // 👈

  return (
    <div className={`contact-widget ${showWidget ? 'visible' : ''}`}>
     <Link   to="https://wa.me/9691474449" className="widget-btn whatsapp" target="_blank" rel="noopener noreferrer">
       <FaWhatsapp />
     </Link>
     <Link to="/ContactUs" className="widget-btn support">
       <FaHeadset />
     </Link>
     <a href="tel:+919691474449" className="widget-btn call">
       <FaPhoneAlt />
     </a>
    </div>
  );
};

export default ContactWidget;
