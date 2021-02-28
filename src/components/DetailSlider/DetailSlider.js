import React, { useContext, useState, useEffect } from "react";
import "./DetailSlider.scss";
// import LazyLoad from "../../UI/LazyLoad/LazyLoad";
import DetailContext from "../../context/DetailContext";

function DetailSlider() {
  const Detail = useContext(DetailContext);
  const [slide, setSlide] = useState(0);

  const onSetSlide = state => setSlide(state);

  return (
    <div className="detail-slider">
      <img src={Detail && Detail.largeImg[slide]} alt="image"></img>
      <div className="detail-slider__params">
        <img
          src={Detail && Detail.largeImg[0]}
          alt="image"
          onClick={() => onSetSlide(0)}
          className="detail-slider__params-param"
          style={{
            border: slide === 0 && "  2px solid #cb1c22",
          }}
        ></img>
        <img
          src={Detail && Detail.largeImg[1]}
          alt="image"
          onClick={() => onSetSlide(1)}
          className="detail-slider__params-param"
          style={{ border: slide === 1 && "  2px solid #cb1c22" }}
        ></img>
        <img
          src={Detail && Detail.largeImg[2]}
          alt="image"
          onClick={() => onSetSlide(2)}
          className="detail-slider__params-param"
          style={{ border: slide === 2 && "  2px solid #cb1c22" }}
        ></img>
        <img
          src={Detail && Detail.largeImg[3]}
          alt="image"
          onClick={() => onSetSlide(3)}
          className="detail-slider__params-param"
          style={{ border: slide === 3 && "  2px solid #cb1c22" }}
        ></img>
      </div>
    </div>
  );
}

export default DetailSlider;
