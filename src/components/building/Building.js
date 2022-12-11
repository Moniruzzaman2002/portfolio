import React from 'react'
import "./building.css"

const Building = () => {
  return (
    <div>
        <div className="form">
        <div className="container">
            <div className="form-details">
                <div className="left">
                    <div clasName="overlay">
                        <div className="overlay-details">
                            <h1>Building stellar</h1>
                        <h1>websites for</h1>
                        <h1>early startups</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        </p>
                        <p>
                            sed do eiusmod tempor incididunt ut labore et dolore 
                        </p>
                        <p>
                            magna aliqua ut enim.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-form-details">
                        <h5>Send inquiry</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <div className="input-feild">
                            <input type="text" placeholder="Your Name"/> <br/><br/>
                            <input type="text" placeholder="Email"/><br/><br/>
                            <input type="text" placeholder="Paste your Figma design URL"/>  
                        </div>
                        <div className="inquari-details">
                            <a className="inquary" href="#">Send an Inquiry</a>
                            <div className="touch">
                                <a href="#">Get in touch with us</a>
                                <i className="fa-solid read fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Building