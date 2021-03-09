import React, { useState } from "react";
import "./BodyDetail.css";

import AdjustItem from "../AdjustItem/AdjustItem";
import AddToCard from "../AddToCart/AddToCart";
import DetailSlider from "../DetailSlider/DetailSlider";
import Table from "../TableDetail/TableDetail";

function BodyDetail({ data }) {
  const [quantity, setQuantity] = useState(1);

  const adjustQuantity = type => {
    if (type === "+") {
      setQuantity(quantity + 1);
    } else {
      if (quantity !== 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="body-page">
        <DetailSlider images={data && data.largeImg} />
        <Table data={data} />
      </div>

      <div className="wrapper-compo">
        <AdjustItem quantity={quantity} handleFunction={adjustQuantity}></AdjustItem>
        <AddToCard />
      </div>
    </React.Fragment>
  );
}

export default BodyDetail;
