import React, { useState } from "react";
import axios from "axios";

const RatingForm = ({ artistId, onRatingSubmitted }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ artistId, stars: rating, comment });

    try {
      await axios.post(
        "http://localhost:5000/api/volunteers/create",
        {
          artistId,
          stars: rating,
          comment,
        },
        { withCredentials: true }
      );
      setMessage("Rating submitted successfully!");
      if (onRatingSubmitted) onRatingSubmitted();
      setRating(0);
      setComment("");
    } catch (err) {
      setMessage("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <div className="p-3 border rounded shadow">
      <h4>Rate this Artist</h4>
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
