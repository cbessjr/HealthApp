import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';


const ModalAbout = (props) => {
  console.log(props);
  const {
    buttonLabel,
    className
  } = props;


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div class="centerModalAbout">
      <Button color="info" id="modalBtn" onClick={toggle}>About</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        Welcome to GetHealthy. GetHealthy is an online utility designed to manage 
        medication using scheduling and alerts. The application is not a medical 
        information resource. For medical advice and information, please contact 
        your Physician or Primary Care Provider (PCP).
        
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAbout;