import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BodyDetail.css";

import AdjustItem from "../AdjustItem/AdjustItem";
import AddToCard from "../AddToCart/AddToCart";
import DetailSlider from "../DetailSlider/DetailSlider";
import Table from "../TableDetail/TableDetail";

import AuthenToken from "../../Authen/AuthenToken";
import getToken from "../../helpers/getToken";
import UserApi from "../../api/UserApi";

function BodyDetail({ data }) {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const adjustQuantity = type => {
    if (type === "+") {
      setQuantity(quantity + 1);
    } else {
      if (quantity !== 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const onAddToCart = async () => {
    const token = getToken();
    //Đoạn này code ơi củ chuối
    if (token) {
      const user = await AuthenToken(token);
      if (user) {
        const alreadyInCart = user.cart.find(product => product.item === id);
        if (alreadyInCart) {
          alreadyInCart.quantity += quantity;
        } else {
          user.cart.push({ item: id, quantity: quantity });
        }
        UserApi.updateUser(token, user);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="body-page">
        <DetailSlider images={data && data.largeImg} />
        <Table data={data} />
      </div>

      <div className="wrapper-compo">
        <AdjustItem quantity={quantity} handleFunction={adjustQuantity}></AdjustItem>
        <AddToCard onAddToCart={onAddToCart} />
      </div>
    </React.Fragment>
  );
}

export default BodyDetail;
