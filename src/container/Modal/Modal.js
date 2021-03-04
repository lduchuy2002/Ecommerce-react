import React, { useState } from "react";
import "./Modal.scss";

import Login from "../../components/Login/Login";
import Signin from "../../components/Signin/Signin";
function Modal({ display, handleDisplayModal }) {
  const [modalType, setModalType] = useState(0);

  const handleModalType = () => (modalType === 1 ? setModalType(0) : setModalType(1));

  return (
    <div className="modal">
      <i className="fas fa-times" onClick={() => handleDisplayModal(false)}></i>
      <img src="/assets/images/logo.png" className="modal-logo"></img>
      <span className="modal-label" onClick={handleModalType}>
        {modalType ? "Đã" : "Chưa"} có tài khoản?
      </span>
      <h1 className="modal-title" align="center">
        {modalType ? "Đăng Ký" : "Đăng Nhập"}
      </h1>
      <div className="modal__wrapper">
        <div
          className="modal__wrapper--login"
          style={{ transform: `translateX(-${modalType * 100}%)` }}
        >
          <Login />
        </div>
        <div
          className="modal__wrapper--signin"
          style={{ transform: `translateX(-${modalType * 100}%)` }}
        >
          <Signin />
        </div>
      </div>
    </div>
  );
}

export default Modal;
