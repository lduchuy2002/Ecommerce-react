import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";

import TopDetail from "../../components/TopDetail/TopDetail";
import BodyDetail from "../../components/BodyDetail/BodyDetail";
import AdjustItem from "../../components/AdjustItem/AdjustItem";
import AddToCard from "../../components/AddToCart/AddToCart";

import ProductApi from "../../api/productApi";
import DetailSliderContext from "../../context/DetailContext";

function ProductDetail() {
  const [productData, setProductData] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const adjustQuantity = type => {
    if (type === "+") {
      setQuantity(quantity + 1);
    } else {
      if (quantity !== 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        const response = await ProductApi.getSingle(id);
        setProductData(response);
      } catch (error) {
        console.log(`Failed to fetch: ${error}`);
      }
    };
    fetchSingleData();
  }, []);

  return (
    <div className="container">
      <TopDetail
        name={productData ? productData.name : undefined}
        price={productData ? productData.price : undefined}
      />

      <BodyDetail data={productData} />

      <div className="wrapper-compo">
        <AdjustItem quantity={quantity} handleFunction={adjustQuantity}></AdjustItem>
        <AddToCard />
      </div>
    </div>
  );
}

export default ProductDetail;
