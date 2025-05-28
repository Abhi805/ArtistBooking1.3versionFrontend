import React from "react";
import Slider from "react-slick";
import "./BlogPosts.css";
import blog from "../../assets/Blog1.jpg";
import blog1 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";

const blogData = [
  {
    img: blog,
    title: "GNVIndia: Elevating Events with Artists, Venues, Equipment & Offsites.",
    desc:
      "Planning a successful event—whether a corporate conference, a wedding, a live concert, or a team-building offsite—can feel overwhelming...",
    link: "Learn more about GNVIndia – Indore’s Event Experts in Artists, Venues & Offsites.",
  },
  {
    img: blog1,
    title: "Top 25 Corporate Event Themes for Employees That Inspire Engagement",
    desc:
      "Corporate Event Themes play a crucial role in today’s dynamic corporate landscape, where cultivating an environment that is positive, engaging...",
    link: "Read more about \"Top 25 Corporate Event Themes for Employees That Inspire Engagement\"",
  },
  {
    img: blog3,
    title: "Top 10 Corporate Event Trends You Need to Know in 2025",
    desc:
      "In 2025, the world of corporate events is rapidly evolving, driven by technological advancements, shifting attendee expectations, and a greater...",
    link: "Read more about \"Top 10 Corporate Event Trends You Need to Know in 2025\"",
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
                <img src={blog.img} alt={`blog-${index}`} className="img-fluid mb-3" />
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
