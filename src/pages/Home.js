import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import Project from '../components/project/Project'
import Feature from '../components/feature/Feature'
import Client from '../components/client/Client'
import Building from '../components/building/Building'
import Blog from '../components/blog/Blog'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Work/>
        <Project/>
        <Feature/>
        <Client/>
        <Building/>
        <Blog/>
        <Footer/>
       
    </div>
  )
}

export default Home