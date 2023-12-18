"use client";

import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

const ConfirmationModal = ({ show, handleShow, action }) => {
  const handleAction = () => {
    action();
    handleShow();
  };
  return (
    <>
      <Modal show={show} size="sm">
        <Modal.Body>
          <div className="flex items-center md:items-start gap-2">
            <div className="mt-2 rounded bg-primary-50  p-2  text-gray-400   ">
              <CloudArrowUp size={24} color="blue" />
            </div>
            <h3 className="text-body-4 md:text-body-2 font-semibold text-metal-900">
              Do you want to remove this list?
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className=" flex justify-start gap-4 ">
            <Button type="outlineGray" size="sm" onClick={() => handleShow()}>
              Cancel
            </Button>
            <Button
              type="primary"
              color="info"
              size="sm"
              onClick={handleAction}
            >
              Confirm
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
