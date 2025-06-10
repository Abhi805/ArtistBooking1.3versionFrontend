// src/pages/ArtistApprovalDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArtistApprovalDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/artists/${id}`);
        setArtist(res.data);
      } catch (err) {
        console.error("Failed to load artist", err);
      }
    };

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


  const approveArtist = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/artists/${id}/approve`);
      setArtist((prev) => prev.filter((artist) => artist._id !== id));
    } catch (err) {
      console.error("Approval error:", err);
    }
  };

  const handleReject = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/artists/${id}`);
      alert("Artist rejected/deleted");
    } catch (err) {
      console.error("Rejection failed", err);
    }
  };

  if (!artist) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container my-5">
      <h2>
        {artist.firstName} {artist.lastName}
      </h2>
      <p className="mb-1">
        <strong>Email:</strong> {artist.email}
      </p>
      <p className="mb-1">
        <strong>Category:</strong> {artist.category}
      </p>
      <p className="mb-1">
        <strong>Mobile:</strong> {artist.mobile}
      </p>
      <p className="mb-1">
        <strong>City:</strong> {artist.city}
      </p>
      <p className="mb-1">
        <strong>Duration:</strong> {artist.duration}
      </p>
      <p className="mb-1">
        <strong>Travel:</strong> {artist.travel}
      </p>
      <p className="mb-1">
        <strong>Genre:</strong> {artist.genre}
      </p>
      <p className="mb-1">
        <strong>Team:</strong> {artist.team}
      </p>
      <p className="mb-1">
        <strong>Location:</strong> {artist.location}
      </p>
      <p className="mb-3">
        <strong>Description:</strong> {artist.description}
      </p>
      <p className="mb-1">
        <strong>Profile Title:</strong> {artist.profileTitle}
      </p>
      <p className="mb-1">
        <strong>Keywords:</strong> {artist.profileKeywords}
      </p>
      <p className="mb-3">
        <strong>Description:</strong> {artist.profileDescription}
      </p>

      {/* Image Gallery */}
      <h6 className="fw-semibold mb-2">Photo Gallery</h6>
      <div className="row g-2 mb-3">
        {artist.images?.length > 0 ? (
          artist.images.map((img, i) => (
            <div key={i} className="col-4">
              <img
                src={img}
                className="img-fluid rounded shadow-sm"
                style={{ height: "200px", objectFit: "cover" }}
                alt={`Gallery ${i}`}
              />
            </div>
          ))
        ) : (
          <p className="text-muted">No images available.</p>
        )}
      </div>

      {/* Video Gallery */}
      <h6 className="fw-semibold mb-2">Video Gallery</h6>
      <div className="row g-2 mb-3">
        {artist.videoLink && artist.videoLink.length > 0 ? (
          artist.videoLink.map((link, i) => (
            <div key={i} className="col-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src={convertToEmbedUrl(link)}
                  title={`Video ${i}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No videos available.</p>
        )}
      </div>

      <div className="mt-4">
        <button
          className="btn btn-success me-5"
          onClick={() => {
            if (window.confirm("Approve this artist?")) {
              approveArtist(artist._id);
            }
          }}
        >
          Approve
        </button>
        <button onClick={handleReject} className="btn btn-danger">
          Reject
        </button>
      </div>
    </div>
  );
};

export default ArtistApprovalDetail;
