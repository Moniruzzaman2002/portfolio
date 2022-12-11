import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Aboutgroup from '../components/aboutgroup/Aboutgroup'
import Goal from '../components/goal/Goal'
import Fllow from '../components/follw/Fllow'
import Vision from '../components/vision/Vision'
import Benifit from '../components/benifits/Benifit'
import Meet from '../components/meet/Meet'
import Footer from '../components/footer/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Aboutgroup/>
        <Goal/>
        <Fllow/>
        <Vision/>
        <Benifit/>
        <Meet/>
        <Footer/>
    </div>
  )
}

export default About