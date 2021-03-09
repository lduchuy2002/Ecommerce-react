import React, { useState, useEffect } from "react";

import "./grid.css";

import FilterProduct from "../../components/FilterProduct/FilterProduct";
import ProductItem from "../../components/ProductItem/ProductItem";
import LoadMore from "../../components/LoadMore/LoadMore";

import { BASE_FILTER_VALUE } from "../../constant/StaticConst";

function ProductList({ getAll, route, DATA_LENGTH }) {
  const [productData, setProductData] = useState([]);
  const [pageFetch, setPageFetch] = useState(1);
  const [isFilter, setIsFilter] = useState(false);
  const [isSorted, setIsSorted] = useState("");

  const handleSort = event => setIsSorted(event.target.value);

  useEffect(() => {
    try {
      const dataToSort = productData.sort((product1, product2) =>
        isSorted === "asc"
          ? product1.priceFilter - product2.priceFilter
          : product2.priceFilter - product1.priceFilter
      );
      setProductData([...dataToSort]);
    } catch (error) {
      console.error(`Failed to sort: ${error}`);
    }
  }, [isSorted]);

  const handleFilter = value => {
    const reFetchProductData = async () => {
      setIsFilter(true);
      const response = await getAll();
      const filterResponse = response.filter(laptop => {
        if (value === 30) {
          return laptop.priceFilter >= 26;
        }
        return laptop.priceFilter >= value - BASE_FILTER_VALUE && laptop.priceFilter <= value;
      });
      setProductData(filterResponse);
    };
    reFetchProductData();
  };

  const HandlePageFetch = () => pageFetch <= DATA_LENGTH && setPageFetch(pageFetch + 1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const params = {
          _page: pageFetch,
          _limit: 10,
        };
        const response = await getAll(params);
        setProductData([...productData, ...response]);
      } catch (error) {
        console.error(`Failed to fetch: ${error}`);
      }
    };
    fetchProductData();
  }, [pageFetch]);

  const handleFilterRam = ram => {
    console.log(ram);
    setIsFilter(true);
    const filterRam = productData.filter(product => product.ram === ram);
    setProductData(filterRam);
  };

  return (
    <div className="container">
      <FilterProduct
        handleFilter={handleFilter}
        handleFilterRam={handleFilterRam}
        handleSort={handleSort}
      ></FilterProduct>
      <div className="grid">
        {productData.map(item => (
          <ProductItem
            route={route}
            name={item.name}
            key={item.id}
            smallPicture={item.smallPicture}
            price={item.price}
            chip={item.chip}
            ram={item.ram}
            screenSize={item.screenSize}
            audio={item.audio}
            id={item.id}
          ></ProductItem>
        ))}
      </div>
      {!isFilter === true && <LoadMore HandleFunction={HandlePageFetch} Text={"Xem thêm"} />}
    </div>
  );
}

export default ProductList;
