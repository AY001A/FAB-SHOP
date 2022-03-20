import React from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss";

const Rating = (count) => {
  const starCount = [0, 1, 2, 3, 4];

  return (
    // <FaStar />
    <div class="star-rating">
      {starCount.map((val, index) => (
        <>
          <input
            type="radio"
            id="5-stars"
            name="rating"
            key={index}
            value={`${val}`}
          />
          <label for="5-stars" key={index} class="star">
            &#9733;
          </label>
        </>
      ))}
    </div>
  );
};

export default Rating;

{
  /* //   <input checked type="radio" id="4-stars" name="rating" value="4" />
    //   <label for="4-stars" class="star">
    //     &#9733;
    //   </label>
    //   <input type="radio" id="3-stars" name="rating" value="3" />
    //   <label for="3-stars" class="star">
    //     &#9733;
    //   </label>
    //   <input type="radio" id="2-stars" name="rating" value="2" />
    //   <label for="2-stars" class="star">
    //     &#9733;
    //   </label>
    //   <input type="radio" id="1-star" name="rating" value="1" />
    //   <label for="1-star" class="star">
    //     &#9733;
    //   </label>
    // </div>
     */
}
