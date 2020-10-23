import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
} fraom 'reactstrap'

const DeviceCard = ({ device, getDeviceByID }) => {
  // Code

  return (
<<<<<<< HEAD
   <h1>Hi i'm a device card</h1>
  )
}
=======
    <div className="device-card">
      <Card body inverse color="info">
        <CardBody>
          <CardTitle>{device.device_name}</CardTitle>
          <CardSubtitle>Return Date {device.next_return}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={device.device_url} alt="Card image cap" />
        <CardText>
          <span>
            Description: {device.description} <br />
            Type: {device.type} <br />
            Date Created: {device.date_created}
          </span>
        </CardText>
        <CardBody>
          <Button color="primary">Rent</Button>
          <Link to={`/devices/${device.id}`}>
            <Button color="secondary" onClick={() => { getDeviceByID(device.id) }}>Edit</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default DeviceCard;

>>>>>>> c6123c60db951374668b39aede522df7dec74716

