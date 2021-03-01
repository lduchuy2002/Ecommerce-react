import { useState } from "react";

import "./filterLaptop.scss";
import FilterRam from "./FilterRam/FilterRam";

function FilterLaptop({ handleFilter, handleSort, handleFilterRam }) {
  const [isDisplayFilterRam, setDisplayFilterRam] = useState(false);

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <div className="filter">
        <span>Chọn mức giá</span>
        <ul className="filter__list">
          <li
            className="filter__list--option"
            onClick={() => {
              handleFilter(10);
            }}
          >
            Dưới 10 triệu
          </li>
          <li
            className="filter__list--option"
            onClick={() => {
              handleFilter(15);
            }}
          >
            10 đến 15 triệu
          </li>
          <li
            className="filter__list--option"
            onClick={() => {
              handleFilter(20);
            }}
          >
            15 đến 20 triệu
          </li>
          <li
            className="filter__list--option"
            onClick={() => {
              handleFilter(25);
            }}
          >
            20 đến 25 triệu
          </li>
          <li
            className="filter__list--option"
            onClick={() => {
              handleFilter(30);
            }}
          >
            Trên 25 triệu
          </li>
          <li className="filter__list--option dropdown">
            <span onClick={() => setDisplayFilterRam(!isDisplayFilterRam)}>Bộ lọc</span>{" "}
            <i className="fas fa-caret-down"></i>
            {isDisplayFilterRam && (
              <span className="ram" style={{ zIndex: 2 }}>
                <FilterRam handleFilterRam={handleFilterRam} />
              </span>
            )}
          </li>
          <li className="filter__list--option">
            <select
              className="filter__list--option-sort"
              style={{ border: "none" }}
              onChange={handleSort}
            >
              <option className="sort-item" value="asc">
                Giá thấp đến cao
              </option>
              <option className="sort-item" value="des">
                Giá cao đến thấp
              </option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterLaptop;
