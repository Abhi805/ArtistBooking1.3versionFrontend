import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance.jsx";

const RatingForm = ({ artistId, onRatingSubmitted }) => {
  const { username } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post(`/api/ratings/volunteer/${username}`, {
        stars: rating,
        comment,
      });

      setMessage("✅ Rating submitted successfully!");
      if (onRatingSubmitted) onRatingSubmitted();
      setRating(0);
      setComment("");
    } catch (err) {
      setMessage("❌You have already given a rating before.");
      console.error("Rating error:", err);
    }
  };

  return (
    <div className="p-3 border rounded shadow">
      <h4>Rate this Volunteer</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                color: star <= rating ? "#ffc107" : "#e4e5e9",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Write a comment (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit Rating
        </button>

        {message && <p className="mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default RatingForm;
