import React, { useState } from "react";

import { NavItem, NavLink, Modal, ModalHeader, ModalBody } from "reactstrap";

import LoginForm from "./login-form"

const LoginModal = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <NavItem>
      <NavLink style={{ cursor: "pointer" }} onClick={toggleModal}>
        <i className="fas fa-user-alt mr-1 text-gray"></i>
        Login
      </NavLink>

      <Modal isOpen={modal} toggle={toggleModal} external={true}>
        <ModalHeader toggle={toggleModal} className="border-0 pb-0"></ModalHeader>
        <ModalBody className="px-5 pt-0">
            <img className="d-block mx-auto mb-3" src="icons/icons8-waving-hand-emoji-48.png" height={64} />
            <LoginForm />
        </ModalBody>
      </Modal>
    </NavItem>
  );
};

export default LoginModal;
