import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "semantic-ui-react";
import { closeModal } from "../../Redux/actions/modal";

const ModalsContainer = () => {
  const { open, body } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal open={open} onClose={(e) => dispatch(closeModal())} size="tiny">
      <Modal.Content>{body}</Modal.Content>
    </Modal>
  );
};

export default ModalsContainer;
