// ArtistApprovalDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ArtistApprovalDetail.css";
import axiosInstance from "../api/axiosInstance.jsx";

const ArtistApprovalDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await axiosInstance.get(`api/artists/${id}`);
        setArtist(res.data);
      } catch (err) {
        console.error("Failed to load artist", err);
      }
    };
    fetchArtist();
  }, [id]);

  const convertToEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return "";
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu.be\/)([^\s&]+)/;
    const match = url.match(youtubeRegex);
    return match && match[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const approveArtist = async (id) => {
    try {
      await axiosInstance.patch(`/artists/${id}/approve`);
      alert("Artist approved");
    } catch (err) {
      console.error("Approval error:", err);
    }
  };

const handleReject = async () => {
  const confirmDelete = window.confirm("Are you sure you want to reject/delete this artist?");
  if (!confirmDelete) return;

  try {
    await axiosInstance.delete(`api/artists/${id}`);
    alert("Artist rejected/deleted");
  } catch (err) {
    console.error("Rejection failed", err);
  }
};


  if (!artist) return <p className="loading">Loading...</p>;

  return (
    <div className="artist-card-container">
      <div className="artist-card">
        <div className="left-panel">
          <img
            src={artist.profileImage || "/placeholder.png"}
            alt="Profile"
            className="profile-image"
          />
        </div>

        <div className="right-panel">
          <h2>{artist.firstName} {artist.lastName}</h2>
          <p><strong>Email :</strong> {artist.email}</p>
          <p><strong>Artist Type :</strong> {artist.category}</p>
          <p><strong>Mobile:</strong> {artist.mobile}</p>
          <p><strong>City :</strong> {artist.city}</p>
          <p><strong>Duration :</strong> {artist.duration}</p>
          <p><strong>Travel :</strong> {artist.travel}</p>
          <p><strong>Genre :</strong> {artist.genre}</p>
          <p><strong>Team :</strong> {artist.team}</p>
          <p><strong>Location :</strong> {artist.location}</p>
          <p><strong>Profile Title :</strong> {artist.profileTitle}</p>
          <p><strong>Keywords :</strong> {artist.profileKeywords}</p>
          <p><strong>Description :</strong> {artist.description}</p>
          <p><strong>Profile Description :</strong> {artist.profileDescription}</p>

          {/* Photo Gallery */}
          <div className="gallery">
            <h4>Photo Gallery</h4>
            <div className="photo-gallery">
              {artist.images?.length > 0 ? (
                artist.images.map((img, i) => (
                  <img key={i} src={img} alt={`Gallery ${i}`} />
                ))
              ) : (
                <p className="text-muted">No images available.</p>
              )}
            </div>
          </div>

          {/* Video Gallery */}
          <div className="gallery">
            <h4>Video Gallery</h4>
            <div className="video-gallery">
              {artist.videoLink?.length > 0 ? (
                artist.videoLink.map((link, i) => (
                  <div key={i} className="video-wrapper">
                    <iframe
                      src={convertToEmbedUrl(link)}
                      title={`Video ${i}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
              ) : (
                <p className="text-muted">No videos available.</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              className="btn-approve"
              onClick={() =>
                window.confirm("Approve this artist?") && approveArtist(artist._id)
              }
            >
              Approve
            </button>
            <button className="btn-reject" onClick={handleReject}>
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistApprovalDetail;
