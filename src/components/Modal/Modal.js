import React from "react";
import "./Modal.scss";

import Login from "../Login/Login";

function LoggingModal() {
  return (
    <div className="modal">
      <h1 align="center">Đăng Nhập</h1>
      <Login />
    </div>
  );
}

export default LoggingModal;
