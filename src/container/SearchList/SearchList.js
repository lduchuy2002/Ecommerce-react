import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./SearchList.scss";

import ProductApi from "../../api/productApi";

function SearchList() {
  const searchValueOnChange = useRef(null);
  const [searchList, setSearchList] = useState([]);
  const onSearch = e => {
    if (searchValueOnChange.current) {
      clearTimeout(searchValueOnChange.current);
    }
    searchValueOnChange.current = setTimeout(async () => {
      const response = await ProductApi.getAll();
      const matchSearchValue = response.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const limitResult = matchSearchValue.slice(0, 5);
      if (e.target.value === "") setSearchList([]);
      else setSearchList(limitResult);
    }, 500);
  };
  console.log(searchList);
  return (
    <div className="search-wrapper">
      <i
        className="fas fa-search"
        style={{
          borderRight: "1px solid black",
          paddingRight: "5px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      ></i>
      <input className="search" onChange={onSearch} />
      <ul className="search-list" style={{ display: searchList.length === 0 && "none" }}>
        {searchList.map(item => (
          <Link
            to={`laptops/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="search-list__item" onClick={() => setSearchList([])}>
              <img className="search-list__item--img" src={item.smallPicture} />
              <p className="search-list__item-title">{item.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
