import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import { faMedal, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../css/Home.css'
import '../css/contact.css'
const About = () => {
  return (
    <div>
      <div className="introcontect  ">
        <h2>About Us</h2>
      </div>
      <div className="info">
        <h2>
          Why Sh<span>op  </span>With Us</h2>
        <div className="infoContain">
          <div className="infocontent">
            <FontAwesomeIcon icon={faTruck} fontSize={"50px"} />
            <h5>Fast Delivery</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
          <div className="infocontent">
            <FontAwesomeIcon icon={faFreeCodeCamp} fontSize={"50px"} />
            <h5>Free Shiping</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
          <div className="infocontent">
            <FontAwesomeIcon icon={faMedal} fontSize={"50px"} />
            <h5>Best Quality</h5>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
      </div>
      <div className="introsecond">
        <div className="intoimg">
          <img src="images/arrival-bg.jpg" alt="" />
        </div>
        <div className="introsec-detail">
          <h1>
            #NewArrivals
          </h1>
          <p>Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About