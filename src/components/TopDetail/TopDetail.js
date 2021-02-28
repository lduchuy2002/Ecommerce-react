import React from "react";
import "./TopDetail.scss";
import LazyLoad from "../../UI/LazyLoad/LazyLoad";

function TopDetail({ name, price }) {
  return (
    <div className="top-detail">
      <h3 className="top-detail__name">
        {name === undefined ? <LazyLoad /> : name}
      </h3>
      <span className="top-detail__price">
        {price === undefined ? <LazyLoad /> : price}
      </span>
    </div>
  );
}

export default TopDetail;
