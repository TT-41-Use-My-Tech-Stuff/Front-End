import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,a
  Label,
  Input
} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
  const usersID = localStorage.getItem("id");
  console.log(usersID);
  const [newDevice, setNewDevice] = useState({
    user_id: parseInt(usersID),
    item_name: "",
    item_description: "",
    category: "",
    rate: 0,
    img_url: ""
  });

  // on submit will call add device action and close modal
  const handleSubmit = (evt) => {
    // Add device to database
    evt.preventDefault();
    const { name, value, type } = evt.target;
    const valueToUse = type === "number" ? parseInt(value) : value;
    setNewDevice({ ...newDevice, [name]: valueToUse });
    axiosWithAuth()
      .post(`/api/rentals/add`, newDevice)
      .then((res) => {
        console.log(res.data);
      });
    //addDevice(newDevice, userID);
    toggle();

    // Reset newDevice data
    setNewDevice({
      user_id: usersID,
      item_name: "",
      item_description: "",
      category: "",
      rate: 0,
      img_url: ""
    });
  };

  // updates state
  const handleChange = (e) => {
    setNewDevice({
      ...newDevice,
      [e.target.name]: e.target.value
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
              <Col md={6}></Col>
              <Col md={6}></Col>
            </Row>

            <FormGroup>
              <Label for="name">Item Name</Label>
              <Input
                type="text"
                name="item_name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Item Description</Label>
              <Input
                type="text"
                name="item_description"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="text"
                name="category"
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rate">Rate</Label>
              <Input
                type="number"
                name="rate"
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageURL">Image URL</Label>
              <Input
                type="text"
                name="img_url"
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
