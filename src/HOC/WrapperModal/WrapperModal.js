import React, { useState, useEffect } from "react";
import "./WrapperModal.scss";
import Modal from "../../container/Modal/Modal";
import { useHistory } from "react-router-dom";
import getToken from "../../helpers/getToken";
import UserApi from "../../api/UserApi";
function WrapperModal() {
  const [isLogin, setLogin] = useState(false);
  const history = useHistory();
  const handleDisplayModal = () => {
    history.goBack();
  };
  useEffect(() => {
    const autoLogin = async () => {
      const token = getToken();
      if (token) {
        const response = await UserApi.get(token);
        if (response.isLogin === true) {
          setLogin(true);
        }
      }
    };

    autoLogin();
  }, []);
  return (
    <div className="wrapper-modal">
      <Modal handleDisplayModal={handleDisplayModal} isLogin={isLogin} setLogin={setLogin} />
    </div>
  );
}

export default WrapperModal;
