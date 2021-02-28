import React from "react";

import "./BodyDetail.css";

import DetailSlider from "../DetailSlider/DetailSlider";
import Table from "../TableDetail/TableDetail";
function BodyDetail() {
  return (
    <div className="body-page">
      <DetailSlider />
      <Table />
    </div>
  );
}

export default BodyDetail;
