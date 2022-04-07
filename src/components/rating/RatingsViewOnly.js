import React from "react";
import "./style.scss";

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const RatingsViewOnly = ({ value }) => {
  const [rating, setRating] = React.useState(parseInt(value) || 0);

  return (
    <div>
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} key={`star_${i + 1}`} marked={rating >= i + 1} />
      ))}
    </div>
  );
};

export default RatingsViewOnly;
