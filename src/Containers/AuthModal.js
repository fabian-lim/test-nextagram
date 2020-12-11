import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from './Login';
import SignUp from './SignUp';

const AuthModal = ({isOpen, toggle, modalTitle, primaryBtnText, primaryBtnAction, isLogin, toggleIsLogin}) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} >
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          {
              isLogin
              ? <Login toggleIsLogin={toggleIsLogin} />
              : <SignUp toggleIsLogin={toggleIsLogin}/> 
          }
        </ModalBody>

      </Modal>
    </div>
  );
}

export default AuthModal;