import React from "react";
import Slider from "react-slick";
import "./ClientFeedBack.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  {
    name: "Nithya Iyer",
    role: "Senior Manager BD",
    feedback:
      "Thank you, GNVIndia, for making our corporate conference a success! Everything went smoothly, and the team exceeded our expectations. Will definitely use them again!",
  },
  {
    name: "Akash Chauhan",
    role: "Project Manager",
    feedback:
      "I had a fabulous experience with this company. They shared valuable tips for planning successful events within my budget. I am happy to share my experience on Google 👍🏼👍🏼",
  },
  {
    name: "Subhash Tripathi",
    role: "Human Resource Management",
    feedback:
      "This team is excellent for corporate events. They provide practical solutions and deliver positive outcomes.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Executive",
    feedback:
      "The event was handled very professionally. GNV India ensured smooth coordination, creative setups, and timely execution. Loved it!",
  },
  {
    name: "Rohit Verma",
    role: "Operations Head",
    feedback:
      "Very reliable and innovative team. They delivered beyond expectations for our annual meet.",
  },
];

const ClientFeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="client-feedback-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-heading title">
            Client <span>FeedBack</span>
          </h6>
        </div>
        <Slider {...settings}>
          {feedbacks.map((item, index) => (
            <div key={index} className="p-3 h-100">
              <div
                className="card feedback-card h-100 p-3 d-flex flex-column justify-content-between"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feedback-image text-center mb-3">
                  {/* Optional: Add client image here */}
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.role}</h6>
                  <div className="feedback-stars mb-2">⭐️⭐️⭐️⭐️⭐️</div>
                  <p className="card-text">{item.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientFeedBack;
