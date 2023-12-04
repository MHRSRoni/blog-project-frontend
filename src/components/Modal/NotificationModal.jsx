"use client";

import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const NotificationModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const onClickOne = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="center"
      >
        <Modal.Header>
          Please set minimum one category in Your profile{" "}
        </Modal.Header>

        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickOne}>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={() => navigate("/user/dashboard/addCategory")}
          >
            select Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
