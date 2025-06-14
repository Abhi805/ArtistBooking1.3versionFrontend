import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ArtistDetail2.css";

const ArtistDetail2 = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [imageSrc, setImageSrc] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    budget: "",
    city: "",
    requirement: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchArtist();
  }, [id]);

  const convertToEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return "";
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu.be\/)([^\s&]+)/;
    const match = url.match(youtubeRegex);
    return match && match[1]
      ? `https://www.youtube.com/embed/${match[1]}`
      : url;
  };

  const fetchArtist = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/artists/${id}`);
      const data = res.data;
      setArtist(data);
      if (data.images && data.images.length > 0) {
        setImageSrc(data.images);
      }
    } catch (err) {
      console.error("Error fetching artist data", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...formData,
        artistId: id,
        artistName: `${artist.firstName} ${artist.lastName}`,
      };
      await axios.post(
        "http://localhost:5000/api/artists/booking/form",
        payload
      );
      toast.success("🎉 Booking submitted successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        budget: "",
        city: "",
        requirement: "",
      });
    } catch (err) {
      console.error("Booking error:", err);
      toast.error("❌ Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!artist) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="artist-detail-page">
      <ToastContainer />

      {/* Artist Info Section */}

      <div className="container-fluid px-0 pt-3">
        <div className="container" data-aos="fade-up">
          <div className="row g-4 align-items-start">

            <div className="container py-5">
              <div className="row g-4 align-items-start">

                {/* Left Image */}
                <div className="col-lg-4 text-center">
                  <img
                    style={{ height: "480px", objectFit: "cover" }}
                    src={imageSrc[0]}
                    alt={`${artist.firstName} ${artist.lastName}`}
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                {/* Booking Form */}
                <div className="col-lg-8">
                  <div className="booking-form p-4 bg-white rounded shadow">
                    <h5 className="fw-bold text-danger mb-3">
                      Book <span className="text-dark">{artist.firstName} {artist.lastName}</span>, Now !!
                    </h5>
                    <p className="text-muted mb-4">
                      Book {artist.firstName} for corporate event, wedding & college fest. Contact details, booking & charges are available on GNVIndia.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        {[
                          { name: "fullName", placeholder: "YOUR NAME*", type: "text", required: true },
                          { name: "email", placeholder: "EMAIL ADDRESS*", type: "email", required: true },
                          { name: "phone", placeholder: "PHONE NUMBER*", type: "tel", required: true },
                          { name: "eventType", placeholder: "EVENT TYPE*", type: "text", required: true },
                          { name: "eventDate", placeholder: "DD–MM–YYYY", type: "date", required: true },
                          { name: "budget", placeholder: "BUDGET", type: "text" },
                          { name: "city", placeholder: "CITY NAME", type: "text" },
                          { name: "requirement", placeholder: "Type here your requirement.", type: "text" },
                        ].map((field, i) => (
                          <div className="col-md-6" key={i}>
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              className="form-control"
                              placeholder={field.placeholder}
                              required={field.required || false}
                            />
                          </div>
                        ))}
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-danger w-100 fw-semibold"
                            disabled={loading}
                          >
                            {loading ? (
                              <span className="spinner-border spinner-border-sm me-2" role="status" />
                            ) : (
                              "Book Now"
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>

            <div className="info-card-container">
              {[
                { icon: "⏱", title: "Performance Duration", text: artist.duration || "N/A" },
                { icon: "👥", title: "Team Members", text: artist.team || "N/A" },
                { icon: "🌍", title: "Open to Travel", text: artist.location || "Worldwide" },
                { icon: "🗣", title: "Language", text: artist.language || "English/Hindi" },
                { icon: "🎵", title: "Music/Genre", text: artist.genre || "Music/Genre" },
                { icon: "🎤", title: "Artist Type", text: artist.category || "Artist Type / City" },
              ].map((item, i) => (
                <div className="info-card-glow" key={i}>
                  <div className="display-5">{item.icon}</div>
                  <div className="info-card-title">{item.title}</div>
                  <div className="info-card-value">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h4 className="fw-bold mb-3">
            About {artist.firstName} {artist.lastName}
          </h4>
          <p>{artist.description || "Description not available."}</p>
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h4 className="fw-bold text-center mb-2">Artist Gallery</h4>
          <p className="text-center text-muted">
            Welcome to our gallery! Explore a curated collection of stunning visuals,
            capturing creativity, beauty, and inspiration.
          </p>

          {/* Tabs */}
          <div className="text-center my-4">
            <button
              className={`btn tab-btn ${activeTab === "photos" ? "active" : ""}`}
              onClick={() => setActiveTab("photos")}
            >
              PHOTOS
            </button>
            <button
              className={`btn tab-btn ${activeTab === "videos" ? "active" : ""}`}
              onClick={() => setActiveTab("videos")}
            >
              VIDEOS
            </button>
          </div>

          {/* Photos */}
          {activeTab === "photos" && (
            <div className="row g-4 justify-content-center">
              {imageSrc.length > 0 ? (
                imageSrc.map((src, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <div className="card border-0 shadow-sm overflow-hidden">
                      <img
                        src={src}
                        className="card-img-top img-fluid hover-zoom fixed-size"
                        alt={`Artist Image ${i + 1}`}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No images available.</p>
              )}
            </div>
          )}

          {/* Videos */}
          {activeTab === "videos" && (
            <div className="row g-4 justify-content-center">
              {artist.videoLink && artist.videoLink.length > 0 ? (
                artist.videoLink.map((link, i) => (
                  <div key={i} className="col-12 col-md-6 col-lg-4">
                    <div className="ratio ratio-16x9 rounded shadow">
                      <iframe
                        src={convertToEmbedUrl(link)}
                        title={`YouTube Video ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No videos available.</p>
              )}
            </div>
          )}
        </div>

        <div className="container py-4" data-aos="fade-up">
          <h5 className="fw-bold mb-3">
            Review {artist.firstName} {artist.lastName}
          </h5>
          <h6 className="text-capitalize">City: {artist.city}</h6>
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="rating">
                Rate Us:
              </label>
              <div id="rating" className="star-rating" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="star" role="radio" aria-checked="false" tabIndex={0}>
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Write your review..."
              aria-label="Write your review"
            ></textarea>
            <button type="submit" className="btn btn-danger">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail2;
