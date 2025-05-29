import React from "react";
import Slider from "react-slick";
import "./BlogPosts.css";
import blog from '../BlogPost/blog2.avif';
import blog1 from '../BlogPost/blog1.jpg';
import blog3 from '../BlogPost/blog3.webp';

const blogData = [
 
  {
    img: blog1,
    title: "India's Powerful Presence: ICC Called 'Event Management Company'",
    desc:
      "A recent article highlights ICC being described as an event management company, reflecting India's dominant role in global cricketing events...",
    link: (
      <a
        href="https://www.hindustantimes.com/cricket/indias-powerful-presence-a-complex-issue-icc-called-event-management-company-in-scathing-attack-told-to-101737868990170.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read full article on Hindustan Times
      </a>
    ),
  },
  {
    img: blog,
    title: "Fraud Worth Crores Found in Jaipur Wedding Planners During IT Raids",
    desc:
      "Income Tax raids on Jaipur-based wedding planners reveal fraudulent practices worth crores, raising serious concerns about the industry...",
    link: (
      <a
        href="https://www.news18.com/business/income-tax-raids-reveal-fraud-worth-crores-among-wedding-planners-in-jaipur-ws-ab-9163134.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read full article on News18
      </a>
    ),
  },
  {
    img: blog3,
    title: "From BYJU's AVP to Event Disruptor: Evaga Entertainment's Journey",
    desc:
      "A former AVP at BYJU'S transforms the event industry with Evaga Entertainment, redefining how corporate and social events are executed in India...",
    link: (
      <a
        href="https://www.zeebiz.com/india/news-from-byju-s-avp-to-revolutionising-events-evaga-entertainment-redefines-the-industry-341631"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read full article on ZeeBiz
      </a>
    ),
  },
];

const BlogPosts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="blog-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="blog-title">
            Latest <span>Blog</span> Posts
          </h2>
          <p className="blog-subtitle">
            Explore our latest blogs to stay updated with trends and tips in the industry.
          </p>
        </div>
        <Slider {...settings}>
          {blogData.map((blog, index) => (
            <div key={index} className="p-3 h-100">
              <div
                className="blog-card d-flex flex-column h-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={blog.img} alt={`blog-${index}`} className="img-fluid mb-3 blog-img" />
                <h5 className="blog-heading">{blog.title}</h5>
                <p className="blog-text">{blog.desc}</p>
                <div className="read-more mt-auto">{blog.link}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogPosts;
