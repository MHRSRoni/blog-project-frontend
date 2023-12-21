"use client";

import { Button, Modal } from "keep-react";
import { Trash } from "phosphor-react";

const ConfirmationModal = ({ show, handleShow, action }) => {
  const handleAction = () => {
    action();
    handleShow();
  };
  return (
    <>
      <Modal show={show} size="sm">
        <Modal.Body>
          <div className="flex items-center justify-items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="mt-2 rounded bg-primary-50  p-2  text-gray-400   ">
                <Trash size={24} color="blue" />
              </div>
              <h3 className="text-body-4 md:text-body-2 font-semibold text-metal-900">
              আপনি কি এই ব্লগটি তালিকা থেকে সরাতে চান?
              </h3>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className=" flex justify-start gap-4 ">
            <Button type="outlineGray" size="sm" onClick={() => handleShow()}>
            বাতিল করুন
            </Button>
            <Button
              type="primary"
              className=""
              color="info"
              size="sm"
              onClick={handleAction}
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              নিশ্চিত করুন
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
