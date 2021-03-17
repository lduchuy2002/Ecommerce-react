import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";

import TopDetail from "../../components/TopDetail/TopDetail";
import BodyDetail from "../../container/BodyDetail/BodyDetail";

import ProductApi from "../../api/productApi";

function ProductDetail() {
  const [productData, setProductData] = useState(undefined);

  const { id } = useParams();

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
    <section className="container">
      <TopDetail
        name={productData ? productData.name : undefined}
        price={productData ? productData.price : undefined}
      />

      <BodyDetail data={productData} />
    </section>
  );
}

export default ProductDetail;
