import { useEffect, useState } from "react";
//  import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./ArtistDetail2.css";
import img1 from "./assets1/Ankita2.jpg";

const ArtistDetail2 = () => {
  const id = "6831ce32df3d8c7a79774713";
  const [artist, setArtist] = useState(null);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchArtist();
  }, [id]);

  const fetchArtist = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/artists/${id}`);
      const data = res.data;
      setArtist(data);
      console.log("Fetched artist data:", data);

      // 🖼️ Convert all images to base64
      if (data.images && data.images.length > 0) {
        const base64Images = await Promise.all(
          data.images.map(async (image) => {
            const byteArray = new Uint8Array(image.data.data);
            const blob = new Blob([byteArray], { type: image.contentType });
            return await new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.readAsDataURL(blob);
            });
          })
        );
        setImageSrc(base64Images); // Save all converted images
      }
    } catch (err) {
      console.error("Error fetching artist data", err);
    }
  };

  if (!artist) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="artist-detail-page bg-light">
      {/* Header Section  */}
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold" data-aos="fade-down">
          Artist <span>Profile</span>
        </h2>
        <p className="text-muted " data-aos="fade-up">
          <strong className="fs-5">
            {artist.firstName} {artist.lastName}
          </strong>
        </p>
      </div>

      {/* Main Content  */}
      <div className="container-fluid px-0">
        {/* Top Section - Image, Form, Info Grid Together  */}
        <div className="container" data-aos="fade-up">
          <div className="row g-4 align-items-start">
            {/* Artist Image  */}
            <div className="col-lg-3 text-center">
              <img
                src={imageSrc}
                alt="artist"
                className="img-fluid rounded shadow-lg artist-main-img"
              />
            </div>
            {/*
             Booking Form  */}
            <div className="col-lg-5">
              <div className="booking-form p-4 bg-white rounded shadow">
                <h5 className="text-center mb-4 fw-bold">
                  🎤 Book {artist.firstName} {artist.lastName} for Your Event
                </h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Event Type"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Event Date"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Budget"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type of Requirement"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn btn-danger w-100 fw-semibold">
                      🚀 Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Grid  */}
            <div className="col-lg-4">
              <div className="row g-3">
                {[
                  { icon: "⏱", text: artist.duration || "N/A" },
                  { icon: "👥", text: artist.team || "N/A" }, // assuming 'team' means members
                  { icon: "🌍", text: artist.location || "Worldwide" },
                  { icon: "🗣", text: artist.language || "English/Hindi" }, // you can add language field if exists
                  { icon: "🎵", text: artist.genre || "Music/Genre" },
                  { icon: "🎤", text: artist.category || "Artist Type / City" },
                ].map((item, index) => (
                  <div className="col-6" key={index}>
                    <div
                      className="info-card-glow text-center p-3 rounded h-100"
                      data-aos="zoom-in-up"
                    >
                      <div className="display-5">{item.icon}</div>
                      <div className="fw-semibold mt-2 fs-6">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h4 className="fw-bold mb-3">
            About {artist.firstName} {artist.lastName}{" "}
          </h4>
          {artist.description || "Description not available."}
        </div>
        {/* gallery image */}
        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Photo Gallery</h5>
          <div className="row g-3">
            {imageSrc && imageSrc.length > 0 ? (
              imageSrc.map((src, i) => (
                <div key={i} className="col-6 col-md-3 kap">
                  <img
                    src={src}
                    className="img-fluid rounded h-100 w-100 shadow-sm hover-zoom"
                    alt={`Artist Image ${i + 1}`}
                  />
                </div>
              ))
            ) : (
              <p>No images available.</p>
            )}
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Video Gallery</h5>
          <div className="row g-3">
            {artist.videoLink ? (
              <div className="col-6 col-md-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={artist.videoLink}
                    title="Artist Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">
            Review {artist.firstName} {artist.lastName}
          </h5>

          {/* Rate Us Section */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Rate Us:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star">
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          {/* Review Textarea */}
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Write your review..."
          ></textarea>
          <button className="btn btn-danger">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail2;
