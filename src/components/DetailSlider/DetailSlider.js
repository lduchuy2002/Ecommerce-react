import React, { useState } from "react";
import "./DetailSlider.scss";
import LazyLoad from "../../UI/LazyLoad/LazyLoad";

function DetailSlider({ images }) {
  const [slide, setSlide] = useState(0);

  const onSetSlide = state => setSlide(state);
  return (
    <div className="detail-slider">
      {images ? <img src={images[slide]} alt="image" /> : <LazyLoad />}

      <div className="detail-slider__params">
        {images &&
          images.map((image, index) => (
            <img
              src={image}
              alt={image}
              onClick={() => onSetSlide(index)}
              className="detail-slider__params-image"
              key={index}
              style={{
                border: slide.toString() === `${index}` && "  2px solid #cb1c22",
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default DetailSlider;
