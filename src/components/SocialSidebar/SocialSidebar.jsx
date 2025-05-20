



import React from 'react';
import './SocialSidebar.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { useScrollTrigger } from '../ScrollTriger/ScrollTrigger'; // 👈
import { Link } from "react-router-dom";

const SocialSidebar = () => {
  const showSidebar = useScrollTrigger(); // 👈

  return (
    <div className={`social-sidebar ${showSidebar ? 'visible' : ''}`}>
      <ul>
        <li className="facebook">
          <Link to="https://www.facebook.com/gnvindiaevents">
            <span className="icon"><FaFacebookF /></span>
            <span className="label">Facebook</span>
          </Link>
        </li>
        <li className="instagram">
          <Link to="https://www.instagram.com/gnvindiaevents/">
            <span className="icon"><FaInstagram /></span>
            <span className="label">Instagram</span>
          </Link>
        </li>
        <li className="youtube">
          <Link to="https://www.youtube.com/@gnvindia7">
            <span className="icon"><FaYoutube /></span>
            <span className="label">YouTube</span>
          </Link>
        </li>
        <li className="linkedin">
          <Link to="https://www.linkedin.com/company/gnv-india-entertainment/">
            <span className="icon"><FaLinkedinIn /></span>
            <span className="label">LinkedIn</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
