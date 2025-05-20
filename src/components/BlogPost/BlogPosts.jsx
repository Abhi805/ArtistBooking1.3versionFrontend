import React from "react";
import "./BlogPosts.css";
import blog from '../../assets/Blog1.jpg';
import blog1 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';

const BlogPosts = () => {
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

        <div className="row g-4">  
          {/* Blog 1 */}
          <div className="col-md-4">
            <div className="blog-card">
              <img
                src={blog}
                alt="Blog 1"
                className="img-fluid mb-3"
              />
              <h5 className="blog-heading">"GNVIndia: Elevating Events with Artists, Venues, Equipment & Offsites."
              </h5>
              <p className="blog-text">
                Planning a successful event—whether a corporate conference, a wedding, a live concert, or a team-building offsite—can feel overwhelming...
              </p>
              <div className="read-more">
               Learn more about GNVIndia – Indore’s Event Experts in Artists, Venues & Offsites.
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-md-4">
            <div className="blog-card">
              <img                src={blog1}
                alt="Blog 2"
                className="img-fluid mb-3"
              />
              <h5 className="blog-heading">
                Top 25 Corporate Event Themes for Employees That Inspire Engagement
              </h5>
              <p className="blog-text">
                Corporate Event Themes play a crucial role in today’s dynamic corporate landscape, where cultivating an environment that is positive, engaging...
              </p>
              <div className="read-more">
                Read more about "Top 25 Corporate Event Themes for Employees That Inspire Engagement"
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-md-4">
            <div className="blog-card">
              <img
                src={blog3}
                alt="Blog 3"
                className="img-fluid mb-3"
              />
              <h5 className="blog-heading">
                Top 10 Corporate Event Trends You Need to Know in 2025
              </h5>
              <p className="blog-text">
                In 2025, the world of corporate events is rapidly evolving, driven by technological advancements, shifting attendee expectations, and a greater...
              </p>
              <div className="read-more">
                Read more about "Top 10 Corporate Event Trends You Need to Know in 2025"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
