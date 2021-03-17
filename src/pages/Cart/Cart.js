import React, { useState, useEffect } from "react";

import CartItem from "../../components/CartItem/CartItem";

import getToken from "../../helpers/getToken";
import AuthenToken from "../../Authen/AuthenToken";
import ProductApi from "../../api/productApi";
import UserApi from "../../api/UserApi";
import { CART_ITEM_ANI_DURATION, ROUTE_LAPTOP } from "../../constant/StaticConst";

const token = getToken();

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getUser(setCart);
  }, []);

  const getUser = async () => {
    const response = await AuthenToken(token);
    if (response) {
      setCart(response.cart);
    }
  };

  const onDelete = async id => {
    const response = await AuthenToken(token);
    if (response) {
      const updateCart = response.cart.filter(product => product.item !== id);
      response.cart = updateCart;
      UserApi.updateUser(token, { ...response });
      setCart(updateCart);
    }
  };
  return (
    <section className="cart" style={{ overflow: "hidden" }}>
      {cart.map((cartItem, index) => (
        <CartItem
          cartItem={cartItem}
          key={`K${index}`}
          apiCallFunc={ProductApi.getSingle}
          quantity={cartItem.quantity}
          style={{
            animationDuration: `${CART_ITEM_ANI_DURATION + index * 0.1}s`,
            animationDelay: `${(CART_ITEM_ANI_DURATION + index * 0.1) * 2}s`,
          }}
          onDelete={onDelete}
          route={ROUTE_LAPTOP}
        />
      ))}
    </section>
  );
}

export default Cart;
