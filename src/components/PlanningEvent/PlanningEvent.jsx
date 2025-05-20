import React from 'react';
import './PlanningEvent.css';
import { FaRupeeSign, FaClipboardList, FaUserTie, FaClock, FaMagic } from 'react-icons/fa';

const featureData = [
  { icon: <FaRupeeSign />, title: 'Affordable Solutions' },
  { icon: <FaClipboardList />, title: 'Explore Planning & Events' },
  { icon: <FaUserTie />, title: 'Expertise & Experience' },
  { icon: <FaClock />, title: 'Time & Stress Saving' },
  { icon: <FaMagic />, title: 'Personalized Services' },
];

const PlanningEvent = () => {
  return (
    <section className="planning-event">
      <div className="container">
        <h1>
          The Best Companie For <span>Event Management</span> In Indore
        </h1>
        <p className='text-capitalize'>
          Planning an event, whether a corporate conference, trade fair, or a social gathering,
          is no child's play. The planning itself is long and tedious, requiring careful logistical details,
          coordination of vendors, and ensuring that things are just right. This is where Companies for Event
          Management fit in. With the help of the proper event management company, you can turn your dream into
          reality with less of the anxiety which normally accompanies planning.
        </p>

        <div className="features">
          {featureData.map((feature, index) => (
            <div className="feature" key={index}>
              <div className="icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningEvent;
