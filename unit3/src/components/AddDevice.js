import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const AddDevice = ({ addDevice, userID }) => {
  // logic for modal open/close
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // custom close button for modal
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  // State for adding
  const [newDevice, setNewDevice] = useState({
    id: "",
    user_id: "",
    item_name: "",
    item_description: "",
    category: "",
    rate: "",
    img_url: ""
  });

  // on submit will call add device action and close modal
  const handleSubmit = () => {
    // Add device to database
    console.log(newDevice);
    //addDevice(newDevice, userID);
    toggle();

    // Reset newDevice data
    setNewDevice({
    id: "",
    user_id: "",
    item_name: "",
    item_description: "",
    category: "",
    rate: "",
    img_url: ""
    });
  };

  // updates state
  const handleChange = (e) => {
    setNewDevice({
      ...newDevice,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Button id="add-device-btn" color="success" onClick={toggle}>
        Add Device
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add a Device
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">ID</Label>
                  <Input
                    type="text"
                    name=""
                    placeholder=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="user">User ID</Label>
                  <Input
                    type="text"
                    name=""
                    placeholder=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="name">Item Name</Label>
              <Input
                type=""
                name=""
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Item Description</Label>
              <Input
                type=""
                name=""
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type=""
                name=""
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rate">Rate</Label>
              <Input
                type=""
                name=""
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageURL">Image URL</Label>
              <Input
                type=""
                name=""
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Add Device
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddDevice;

/*device_name: "",
    description: "",
    increment: 1,
    maker: "",
    device_url: "",
    date_created: "", */