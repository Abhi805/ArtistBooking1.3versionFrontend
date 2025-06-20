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
      "I’m a volunteer, and ever since I created my profile on gnvindia.com, I’ve been getting great event projects. This platform is genuine, trustworthy, and has really helped me grow in the event industry. Thank you, gnvindia.com!",
  },
  {
    name: "Akash Chauhan",
    role: "Project Manager",
    feedback:
      "I’m a regular user of gnvindia.com, and I often need event planners, volunteers, artists, and venues for my events. This platform is really helpful — it provides all event-related services with great suggestions in one place. It's easy to use and has made managing my events much simpler. Highly recommended!",
  },

  {
    name: "Priya Sharma",
    role: "Marketing Executive",
    feedback:
      "I used gnvindia.com to search for hotels and event vendors for a conference, and it turned out to be a great experience. This is a very useful search engine that helped me find the right services and vendors in my city. The platform is reliable and makes the entire planning process much easier.",
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
