import React, { useRef } from "react";
import "./FilterRam.scss";

import { FILTER_RAM_LIST } from "../../../constant/StaticList";

function FilterRam({ handleFilterRam }) {
  const ramValueOnChange = useRef(null);
  const debouce = event => {
    if (ramValueOnChange.current) {
      clearTimeout(ramValueOnChange.current);
    }
    ramValueOnChange.current = setTimeout(() => {
      handleFilterRam(event.target.value);
    }, 500);
  };
  return (
    <form className="filter-ram" onChange={debouce}>
      <div style={{ fontWeight: "bold", marginLeft: 20 }}>RAM</div>
      {FILTER_RAM_LIST.map((item, index) => (
        <span className="filter-ram__item" key={index}>
          <input type="radio" id={item.value} value={item.search} name="ram"></input>
          <label htmlFor="4G">{item.value}</label>
        </span>
      ))}
    </form>
  );
}

export default FilterRam;
