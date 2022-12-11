import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <div>
<section className="banner">
        <div className="container main-banner">
            <div className="banner-text">
                <div className="banner-heading">
                    <h1>Building stellar </h1>
                    <h1>websites for early</h1>
                    <h1>startups</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </p>
                    <p>
                        eiusmod tempor incididunt.
                    </p>
                    <div className="btn">
                        <a className="view" href="#">View our work</a>
                        <a className="pricing" href="#">View Pricing</a>
                        <i className="fa-solid pricing-arrow fa-arrow-right"></i>
                    </div>
                </div>
                <div className="banner-logo">
                    <img src="images/banner-img.png" alt="banner-imag"/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Banner