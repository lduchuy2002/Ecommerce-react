import { useState } from "react";

import "./filterLaptop.scss";
import FilterRam from "./FilterRam/FilterRam";

import { FILTER_PRICE_LIST } from "../../constant/StaticList";

function FilterLaptop({ handleFilter, handleSort, handleFilterRam }) {
  const [isDisplayFilterRam, setDisplayFilterRam] = useState(false);

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <div className="filter">
        <span>Chọn mức giá</span>
        <ul className="filter__list">
          {FILTER_PRICE_LIST.map((item, index) => (
            <li
              className="filter__list--option"
              onClick={() => {
                handleFilter(item.value);
              }}
              key={index}
            >
              {item.note}
            </li>
          ))}

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
              <option className="sort-item" value="des" selected>
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
