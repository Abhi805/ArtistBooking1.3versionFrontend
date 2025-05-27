import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./ArtistDetail2.css";
import { useParams } from "react-router-dom";

const ArtistDetail2 = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [imageSrc, setImageSrc] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchArtist();
  }, [id]);

  const convertToEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return "";
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu.be\/)([^\s&]+)/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  };

  const fetchArtist = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/artists/${id}`);
      const data = res.data;
      console.log("single idf",data)
      setArtist(data);

      // Use Cloudinary URLs directly
      if (data.images && data.images.length > 0) {
        setImageSrc(data.images);
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
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold" data-aos="fade-down">
          Artist <span>Profile</span>
        </h2>
        <p className="text-muted" data-aos="fade-up">
          <strong className="fs-5">
            {artist.firstName} {artist.lastName}
          </strong>
        </p>
      </div>

      <div className="container-fluid px-0">
        <div className="container" data-aos="fade-up">
          <div className="row g-4 align-items-start">
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              {imageSrc.length > 0 ? (
                <img
                  style={{ height: "480px", objectFit: "cover" }}
                  src={imageSrc[0]}
                  alt={`${artist.firstName} ${artist.lastName}`}
                  className="img-fluid rounded shadow-lg artist-main-img"
                />
              ) : (
                <div className="placeholder-img rounded shadow-lg d-flex align-items-center justify-content-center">
                  No Image
                </div>
              )}
            </div>

            <div className="col-lg-5 col-md-8 col-sm-12">
              <div className="booking-form p-4 bg-white rounded shadow">
                <h5 className="text-center mb-4 fw-bold">
                  🎤 Book {artist.firstName} {artist.lastName} for Your Event
                </h5>
                <form>
                  <div className="row g-3">
                    <input type="text" className="form-control" placeholder="Full Name" required />
                    <input type="tel" className="form-control" placeholder="Phone Number" required />
                    <input type="email" className="form-control" placeholder="Email Address" required />
                    <input type="text" className="form-control" placeholder="Event Type" />
                    <input type="date" className="form-control" placeholder="Event Date" />
                    <input type="text" className="form-control" placeholder="Budget" />
                    <input type="text" className="form-control" placeholder="City Name" />
                    <input type="text" className="form-control" placeholder="Type of Requirement" />
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-danger w-100 fw-semibold">
                      🚀 Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="row g-3">
                {[
                  { icon: "⏱", title: "Performance Duration", text: artist.duration || "N/A" },
                  { icon: "👥", title: "Team Members", text: artist.team || "N/A" },
                  { icon: "🌍", title: "Open to Travel", text: artist.location || "Worldwide" },
                  { icon: "🗣", title: "Language", text: artist.language || "English/Hindi" },
                  { icon: "🎵", title: "Music/Genre", text: artist.genre || "Music/Genre" },
                  { icon: "🎤", title: "Artist Type", text: artist.category || "Artist Type / City" },
                ].map((item, i) => (
                  <div className="col-6" key={i}>
                    <div className="info-card-glow text-center p-3 rounded h-100" data-aos="zoom-in-up">
                      <div className="display-5">{item.icon}</div>
                      <div className="fw-semibold mt-2 fs-6">{item.title}</div>
                      <div className="fw-semibold mt-2 fs-6 p-1 text-white rounded" style={{ background: "#0969DA" }}>
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h4 className="fw-bold mb-3">About {artist.firstName} {artist.lastName}</h4>
          <p>{artist.description || "Description not available."}</p>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Photo Gallery</h5>
          <p className="text-black">Make a list of your achievements toward your long-term goal</p>
          <div className="row g-4 justify-content-center">
            {imageSrc.length > 0 ? (
              imageSrc.map((src, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-3">
                  <div className="card border-0 shadow-sm overflow-hidden">
                    <img src={src} className="card-img-top img-fluid hover-zoom fixed-size" alt={`Artist Image ${i + 1}`} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No images available.</p>
            )}
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Video Gallery</h5>
          <p className="text-black">Make a list of your achievements toward your long-term goal</p>
          <div className="row g-3 justify-content-center">
            {artist.videoLink && artist.videoLink.length > 0 ? (
              artist.videoLink.map((link, i) => (
                <div className="col-6 col-md-4 col-lg-3" key={i}>
                  <div className="ratio fixed-size ratio-16x9 rounded" style={{ overflow: "hidden" }}>
                    <iframe
                      src={convertToEmbedUrl(link)}
                      title={`YouTube video ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">Review {artist.firstName} {artist.lastName}</h5>
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="rating">Rate Us:</label>
              <div id="rating" className="star-rating" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="star" role="radio" aria-checked="false" tabIndex={0}>
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <textarea className="form-control mb-3" rows="3" placeholder="Write your review..." aria-label="Write your review"></textarea>
            <button type="submit" className="btn btn-danger">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail2;
