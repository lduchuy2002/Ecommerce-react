import React from "react";
import "./AdjustItem.scss";

export default function AdjustItem({ quantity, handleFunction, style }) {
  return (
    <div className="adjust-item" style={style}>
      <span className="quantity">Số lượng</span>
      <span className="adjust-item__decrease" onClick={() => handleFunction("-")}>
        <i className="fas fa-minus"></i>
      </span>
      <span className="adjust-item__number">{quantity}</span>
      <span className="adjust-item__inscrease" onClick={() => handleFunction("+")}>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}
