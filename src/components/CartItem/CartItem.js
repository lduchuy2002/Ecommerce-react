import React, { useState, useEffect } from "react";
import "./CartItem.scss";

import parseStringToNumber from "../../helpers/parceStringToPrice";
import SumCartItemPrice from "../../helpers/SumCartItemPrice";

function CartItem({ cartItem, apiCallFunc, style, quantity, onDelete }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    try {
      const getProduct = async () => {
        const response = await apiCallFunc(cartItem.item);
        setProduct(response);
      };
      getProduct();
    } catch (error) {
      console.log("Failed to fetch " + error);
    }
  }, []);
  return (
    <div className="cart-item" style={style}>
      <img className="cart-item__image" src={product.smallPicture} alt={product.name} />
      <div className="text-wrapper">
        <p className="cart-item__title">{product.name}</p>
        <span className="price-wrapper">
          <span className="cart-item__unit-price">{parseStringToNumber(product.price)}đ</span>
          <span className="cart-item__old-price">{product.price}</span>
        </span>
      </div>
      <div className="cart-item__quantity">
        Số lượng <font style={{ fontWeight: 700 }}>{quantity}</font>
      </div>
      <span className="cart-item__total-price">{SumCartItemPrice(product.price, quantity)}đ</span>
      <i className="fas fa-trash-alt" onClick={() => onDelete(cartItem.item)}></i>
    </div>
  );
}

export default CartItem;
