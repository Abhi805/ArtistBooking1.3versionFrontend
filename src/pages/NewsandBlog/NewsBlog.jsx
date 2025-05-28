import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./NewsBlog.css";

import img1 from "../NewsandBlog/blog1.jpg";
import img2 from "../NewsandBlog/blog2.avif";
import img3 from "../NewsandBlog/blog3.webp";
import img4 from "../NewsandBlog/blog4.webp";
import img5 from "../NewsandBlog/blog5.jpg";

const blogData = [
  {
    title: "India's Powerful Presence in ICC: A Complex Issue",
    desc: "ICC called an event management company in a scathing attack related to India’s dominance in global events...",
    img: img1,
    link: "https://www.hindustantimes.com/cricket/indias-powerful-presence-a-complex-issue-icc-called-event-management-company-in-scathing-attack-told-to-101737868990170.html",
  },
  {
    title: "Wedding Planners in Jaipur Under IT Raids",
    desc: "Income tax raids revealed massive fraud among wedding planners in Jaipur, involving crores of unaccounted money...",
    img: img2,
    link: "https://www.news18.com/business/income-tax-raids-reveal-fraud-worth-crores-among-wedding-planners-in-jaipur-ws-ab-9163134.html",
  },
  {
    title: "From BYJU's AVP to Redefining Events",
    desc: "Evaga Entertainment’s founder left a corporate job to revolutionize the Indian event industry with creativity and tech...",
    img: img3,
    link: "https://www.zeebiz.com/india/news-from-byju-s-avp-to-revolutionising-events-evaga-entertainment-redefines-the-industry-341631",
  },
  {
    title: "Lavish Weddings Under IT Scanner in India",
    desc: "Business Standard reports show cash-heavy transactions in India’s wedding industry caught in IT investigations...",
    img: img4,
    link: "https://www.business-standard.com/industry/news/india-income-tax-investigation-lavish-weddings-jaipur-cash-transactions-124122000345_1.html",
  },
  {
    title: "New Event Ventures: Lusso Hospitality & NexFEC",
    desc: "Abante Group has launched new premium event management ventures focused on weddings, MICE, and luxury events...",
    img: img5,
    link: "https://www.eventfaqs.com/news/ef-21402/abante-launches-lusso-hospitality-nexfec-new-event-management-ventures",
  },
];

const NewsBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="blog-page">
      

      <div className="venue-header text-white">
        <div className="container">
          <h1>Blogs & News</h1>
          <p className="text-capitalize text-white">
           Stay updated with the latest trends and insights in events, weddings, and entertainment.
            Explore expert tips, behind-the-scenes stories, and industry news that matter.
           Discover how innovation is transforming experiences across India and beyond.
          </p>
        </div>
      </div>

  <div className="blog-heading text-center my-4">
        <h2>Latest Industry News</h2>
        <hr className="blog-underline" />
      </div> 

      <div className="container">
        <div className="row">
          {blogData.map((blog, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="fade-up">
              <div className="card blog-card h-100 shadow-sm">
                <img
                  src={blog.img}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text flex-grow-1">{blog.desc}</p>
                  <a
                    href={blog.link}
                    className="read-more-link mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;
