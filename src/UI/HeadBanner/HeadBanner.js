import { useState } from "react";

import "./HeadBanner.scss";

export default function HeadBanner({ SliderList, BannerClock }) {
  const [ordinate, setOrdinate] = useState(0);

  const handleNext = () =>
    ordinate === SliderList.length - 1 ? setOrdinate(0) : setOrdinate(ordinate + 1);

  const handlePrev = () => (ordinate === 0 ? setOrdinate(0) : setOrdinate(ordinate - 1));

  return (
    <div className="container">
      {BannerClock && <BannerClock />}
      <div className="carousel">
        {SliderList.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="slide"
            style={{ transform: `translateX(-${ordinate}00%)` }}
          ></img>
        ))}
        <button onClick={handleNext} className="carousel--next">
          <i className="fas fa-chevron-right" style={{ margin: "auto", fontSize: 25 }}></i>
        </button>
        <button onClick={handlePrev} className="carousel--prev">
          <i className="fas fa-chevron-left" style={{ margin: "auto", fontSize: 25 }}></i>
        </button>
      </div>
    </div>
  );
}
