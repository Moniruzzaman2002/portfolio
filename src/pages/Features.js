import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Need from '../components/need/Need'
import User from '../components/user/User'
import With from '../components/with/With'
import Arround from '../components/arround/Arround'
import Group from '../components/group/Group'
import Footer from '../components/footer/Footer'

const Features = () => {
  return (
    <div>
      <Navbar/>
      <Need/>
      <User/>
      <With/>
      <Arround/>
      <Group/>
      <Footer/>
    </div>
  )
}

export default Features