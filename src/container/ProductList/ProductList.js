import React, { useState, useEffect } from "react";

import "./grid.css";

import FilterLaptop from "../../components/FilterLaptop/FilterLaptop";
import ProductItem from "../../components/ProductItem/ProductItem";
import LoadMore from "../../components/LoadMore/LoadMore";

import { LAPTOP_DATA_LENGTH, BASE_FILTER_VALUE } from "../../constant/StaticConst";
import ProductApi from "../../api/productApi";

function ProductList() {
  const [laptopData, setLaptopData] = useState([]);
  const [pageFetch, setPageFetch] = useState(1);
  const [isFilter, setIsFilter] = useState(false);
  const [isSorted, setIsSorted] = useState("");

  const handleSort = event => setIsSorted(event.target.value);

  useEffect(() => {
    try {
      const dataToSort = laptopData.sort((laptop1, laptop2) =>
        isSorted === "asc"
          ? laptop1.priceFilter - laptop2.priceFilter
          : laptop2.priceFilter - laptop1.priceFilter
      );
      setLaptopData([...dataToSort]);
    } catch (error) {
      console.error(`Failed to sort: ${error}`);
    }
  }, [isSorted]);

  const handleFilter = value => {
    const reFetchLapTopData = async () => {
      setIsFilter(true);
      const response = await ProductApi.getAll();
      const filterResponse = response.filter(laptop => {
        if (value === 30) {
          return laptop.priceFilter >= 26;
        }
        return laptop.priceFilter >= value - BASE_FILTER_VALUE && laptop.priceFilter <= value;
      });
      setLaptopData(filterResponse);
    };
    reFetchLapTopData();
  };

  const HandlePageFetch = () => pageFetch <= LAPTOP_DATA_LENGTH && setPageFetch(pageFetch + 1);

  useEffect(() => {
    const fetchLapTopData = async () => {
      try {
        const params = {
          _page: pageFetch,
          _limit: 10,
        };
        const response = await ProductApi.getAll(params);
        setLaptopData([...laptopData, ...response]);
      } catch (error) {
        console.error(`Failed to fetch: ${error}`);
      }
    };
    fetchLapTopData();
  }, [pageFetch]);

  const handleFilterRam = ram => {
    setIsFilter(true);
    const filterRam = laptopData.filter(laptop => laptop.ram === ram);
    setLaptopData(filterRam);
  };

  return (
    <div className="container">
      <FilterLaptop
        handleFilter={handleFilter}
        handleFilterRam={handleFilterRam}
        handleSort={handleSort}
      ></FilterLaptop>
      <div className="grid">
        {laptopData.map(item => (
          <ProductItem
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
