import React, { useEffect } from "react";
import "./NewsBlog.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/pastevent2.jpeg"


const blogData = [
  {
    id: 1,
    title: "Top 10 Event Trends of 2025",
    date: "May 10, 2025",
    image: img1,
    excerpt: "Discover the latest trends shaping the event industry in 2025...",
  },
  {
    id: 2,
    title: "How to Choose the Right Venue",
    date: "April 28, 2025",
    image: img1,
    excerpt: "Choosing the right venue can make or break your event...",
  },
  {
    id: 3,
    title: "Lighting Tips for Grand Events",
    date: "April 15, 2025",
    image: img1,
    excerpt: "Proper lighting enhances event ambiance and guest experience...",
  },
];

const NewsBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="news-blog py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">News & Blogs</h2>
          <p className="section-subtitle">Stay updated with the latest event news</p>
        </div>
        <div className="row">
          {blogData.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <div className="card blog-card h-100 shadow-sm">
                <img src={blog.image} className="card-img-top" alt={blog.title} />
                <div className="card-body">
                  <small className="text-muted">{blog.date}</small>
                  <h5 className="card-title mt-2">{blog.title}</h5>
                  <p className="card-text">{blog.excerpt}</p>
                  <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;
