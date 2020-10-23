import React from 'react'
import { Link } from 'react-router-dom'

import {
//   Card,
  CardImg,
  CardText,
  CardBody,
  Button,
//   CardTitle,
//   CardSubtitle,
} from 'reactstrap'

const DeviceCard = ({ device, getDeviceByID }) => {
  // Code

  return (

    <div className='device-card'>
  

        {/* <CardBody>
          <CardTitle>{device.device_name}</CardTitle>
          <CardSubtitle>Return Date {device.next_return}</CardSubtitle>
        </CardBody> */}

        <CardImg width='100%' src={device.device_url} alt='Card image cap' />

        <CardText>
          <span>
            id: {device.getDeviceByID} <br />
            user_id: {device.user_id} <br />
            item_description: {device.item_description} <br />
            category: {device.category} <br />
            rate: {device.rate} <br />
            img_url: {device.img_url}
          </span>
        </CardText>

        <CardBody>
          <Button color='primary'>Rent</Button>
          <Link to={`/devices/${device.id}`}>
            <Button color='secondary' onClick={() => { getDeviceByID(device.id) }}>Edit</Button>
          </Link>
        </CardBody>
     
    {/* <div className="device-card">
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
    </div> */}
    </div>

  )
}

export default DeviceCard;



