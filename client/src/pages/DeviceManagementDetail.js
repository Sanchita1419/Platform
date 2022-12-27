import React from 'react'
import DeviceDetails from '../components/Device/DeviceDetails'
import DeviceHeader from '../components/Device/DeviceHeader'
import Header from '../components/Header/Header'

const DeviceManagementDetail = () => {
  return (
    <div>
      <Header/>
      <DeviceHeader/>
      <DeviceDetails/>
    </div>
  )
}

export default DeviceManagementDetail