import { useState, useEffect } from "react";

import "./BannerClock.scss";
import getTime from "../../helpers/getTime";

export default function BannerClock() {
  const [timer, setTimer] = useState({
    date: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const getTimer = setInterval(() => {
      const { date, hours, minutes, seconds } = getTime();
      setTimer({
        date: date,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
    return () => {
      clearInterval(getTimer);
    };
  }, []);

  return (
    <div className="sale-timer">
      <span style={{ marginRight: 5 }}>Đón chờ</span>
      <div className="sale-timer__box" style={{ marginLeft: 5 }}>
        <span className="sale-timer__box--date">{timer.date}</span>
        <span style={{ color: "#6e6c69", fontWeight: 100 }}>Ngày</span>
      </div>
      <div className="sale-timer__box" style={{ marginLeft: 20 }}>
        <span className="sale-timer__box--hours">{timer.hours}</span>
        <span style={{ color: "#6e6c69", fontWeight: 100 }}>Giờ</span>
      </div>
      <div className="sale-timer__box" style={{ marginLeft: 20 }}>
        <span className="sale-timer__box--minutes">{timer.minutes}</span>
        <span style={{ color: "#6e6c69", fontWeight: 100 }}>Phút</span>
      </div>
      <div className="sale-timer__box" style={{ marginLeft: 20 }}>
        <span className="sale-timer__box--seconds">{timer.seconds}</span>
        <span style={{ color: "#6e6c69", fontWeight: 100 }}>Giây</span>
      </div>
      <span style={{ marginLeft: 5 }}>Tết đến</span>
    </div>
  );
}
