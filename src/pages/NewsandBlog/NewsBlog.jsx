import React from "react";
import "./NewsBlog.css";

const blogData = [
  {
    title: "Emerging Artists Shine at The Heart of Art",
    desc: "The Art and Print to present its Premium Art event at World Trade Center, where some of the most talented emerging artists...",
    img: "/images/blog1.jpg",
  },
  {
    title: "Best Wall Paintings for Home Interiors",
    desc: "Wall paintings can transform any space, adding personality, style, and a touch of elegance to your interiors...",
    img: "/images/blog2.jpg",
  },
  {
    title: "The Indian Arts Festival: Celebrating Creativity",
    desc: "India has long been a cradle of artistic expression, with its rich history, diverse cultures, and vibrant traditions of creativity...",
    img: "/images/blog3.jpg",
  },
  // ...add 9 more objects to make 12 blogs
];

const NewsBlog = () => {
  return (
    <div className="blog-page">
      <div className="blog-banner">
        <h1 className="banner-title">Blogs</h1>
      </div>

      <div className="blog-heading text-center my-4">
        <h2>Blogs</h2>
        <hr className="blog-underline" />
      </div>

      <div className="container">
        <div className="row">
          {blogData.map((blog, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card blog-card h-100">
                <img
                  src={blog.img}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.desc}</p>
                  <a href="#" className="read-more-link">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination text-center mt-4">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;
