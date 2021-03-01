import React from "react";

import "./BodyDetail.css";

import DetailSlider from "../DetailSlider/DetailSlider";
import Table from "../TableDetail/TableDetail";

function BodyDetail({ data }) {
  return (
    <div className="body-page">
      <DetailSlider images={data && data.largeImg} />
      {/* <Table data = {...data} /> */}
    </div>
  );
}

export default BodyDetail;
