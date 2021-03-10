import React from "react";
import "./AddToCart.scss";

function AddToCard({ onAddToCart }) {
  return (
    <div className="add-to-cart" onClick={onAddToCart}>
      <i className="fas fa-shopping-cart"></i>
      <span>Thêm vào giỏ hàng</span>
    </div>
  );
}

export default AddToCard;
