import React from 'react'
import DeviceCard from './DeviceCard'

const Devices = ({ devices, getDeviceByID }) => {
  if (devices === undefined) {
    return <div>Out of stock</div>;
  }

//const device = () => {
 //   console.log(devices);
//}

  return (
    <div className="device-container">
      {devices.map((device, index) => {
        return <DeviceCard key={index} device={device} getDeviceByID={getDeviceByID} />;
      })}
    </div>

  );

   

}

export default Devices;