import React, { useState } from "react";
import "./WrapperModal.scss";
import Modal from "../../container/Modal/Modal";
function WrapperModal() {
  const [isDisplayModal, setDisplayModal] = useState(true);

  return (
    <div
      className="wrapper-modal"
      style={{
        display: !isDisplayModal && "none",
      }}
    >
      <Modal handleDisplayModal={setDisplayModal} />
    </div>
  );
}

export default WrapperModal;
