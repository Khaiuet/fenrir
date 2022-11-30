import React from "react";
import {
  Modal,

  Row,

  Text,
  Navbar,
} from "@nextui-org/react";

export const ModalLogin = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Navbar.Link onClick={handler}>Login</Navbar.Link>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              COMMING SOON
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row justify="center">
            <Text size={16}>THIS FEATURE WILL BE UPDATE</Text>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};
