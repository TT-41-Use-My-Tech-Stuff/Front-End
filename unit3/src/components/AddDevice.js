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
    device_name: "",
    description: "",
    increment: 1,
    maker: "",
    device_url: "",
    date_created: "",
  });

  // on submit will call add device action and close modal
  const handleSubmit = () => {
    // Add device to database
    console.log(newDevice);
    //addDevice(newDevice, userID);
    toggle();

    // Reset newDevice data
    setNewDevice({
      device_name: "",
      description: "",
      increment: 1,
      maker: "",
      device_url: "",
      date_created: "",
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
                  <Label for="name">Name of device</Label>
                  <Input
                    type="text"
                    name="device_name"
                    placeholder="camera"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="device">Device</Label>
                  <Input
                    type="text"
                    name="device_name"
                    placeholder="laptop"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="manufacture date">Manufacture Date</Label>
              <Input
                type="date"
                name="date_last_watered"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="available date">Available Date</Label>
              <Input
                type="date"
                name="next_availability"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageURL">Device Image URL</Label>
              <Input
                type="text"
                name="device_url"
                placeholder="e.g https://myimageurl.jpg"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="Sony"
                name="description"
                placeholder="Playstation"
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

