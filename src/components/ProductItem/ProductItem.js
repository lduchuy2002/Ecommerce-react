import React from "react";
import "./ProductItem.scss";
import { Link } from "react-router-dom";
function ProductItem({ name, smallPicture, price, chip, ram, screenSize, audio, id, route }) {
  return (
    <Link to={`/${route}/${id}`} style={{ textDecoration: "none" }}>
      <div className="product-item">
        <div className="product-item__top">
          <img className="product-item__top--image" src={smallPicture} alt={name}></img>
          <span className="product-item__top--badge">Lì xi 1.000.000đ</span>
        </div>
        <div className="product-item__bottom">
          <div className="product-item__bottom--name">{name}</div>
          <span className="product-item__bottom--price">{price}</span>
          <div className="product-item__bottom--params">
            <span className="screen param">
              <i className="fas fa-desktop"></i>
              {screenSize}
            </span>
            <span className="cpu param">
              <i className="fas fa-microchip"></i>
              {chip}
            </span>
            <span className="ram param">
              <i className="fas fa-memory"></i>
              {ram}
            </span>
            <span className="audio param">
              <i className="fas fa-headset"></i>
              {audio}
            </span>
          </div>
        </div>
        <div id="buy">MUA NGAY</div>
      </div>
    </Link>
  );
}

export default ProductItem;
