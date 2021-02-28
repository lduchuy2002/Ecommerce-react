import React, { useRef } from "react";
import "./FilterRam.scss";
import LaptopRamContext from "../../../context/LaptopRamContext";
function FilterRam() {
  const RamContext = React.useContext(LaptopRamContext);
  const { handleFilterRam } = RamContext;
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
      <span className="filter-ram__item">
        <input type="radio" id="4G" value={"4 GB"} name="ram"></input>
        <label htmlFor="4G">4G</label>
      </span>
      <span className="filter-ram__item">
        <input type="radio" id="8G" value={"8 GB"} name="ram"></input>
        <label htmlFor="8G">8G</label>
      </span>
      <span className="filter-ram__item">
        <input type="radio" id="16G" value={"16 GB"} name="ram"></input>
        <label htmlFor="16G">16G</label>
      </span>
    </form>
  );
}

export default FilterRam;
