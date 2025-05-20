import React, { useState } from 'react'
import "../css/footer.css"
import { Link } from 'react-router';
const Footer = () => {
    const [email, setEmail]=useState("")
    const submitData= (e)=>{
        e.preventDefault();
        alert("Subscribe with:" + email);
        setEmail("");
    }
    return (
        <div className="footer">
            <div className="foot-container">
                <div className="foot-data">
                    <img src="images/logo.png" alt="Logo" className="footer-logo" />
                    <p><span>ADDRESS:</span> 28 White tower, Street Name, New York City, USA</p>
                    <p><span>TELEPHONE:</span> +91 987 654 3210</p>
                    <p><span>EMAIL:</span> yourmain@gmail.com</p>
                </div>


                <div className="foot-data">
                    <h4>MENU</h4>
                    <p><Link to={"/"}>Home</Link></p>
                    <p><Link to={"About"}>About</Link></p>
                    <p><a href="#">Services</a></p>
                    <p><Link to={"Testimonial"}>Testimonial</Link></p>
                    <p><Link to={"Blog"}>Blog</Link></p>
                    <p><Link to={"Contect"}>contect</Link></p>
                </div>
                <div className="foot-data">
                    <h4>ACCOUNT</h4>
                    <p><a href="#">Account</a></p>
                    <p><a href="#">Checkout</a></p>
                    <p><a href="#">Login</a></p>
                    <p><a href="#">Register</a></p>
                    <p><a href="#">Shopping</a></p>
                    <p><a href="#">Widget</a></p>
                </div>

                <div className="foot-data newsletter">
                    <h4>NEWSLETTER</h4>
                    <p>Subscribe by our newsletter and get update protidin.</p>
                    <form action="" onSubmit={submitData}>
                        <input type="email" placeholder="Enter Your Mail"value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="submit" name="" id=""  className='submit'/>
                    </form>
                </div>
            </div>

            <div className="bottom-bar">
                © 2021 All Rights Reserved By <span>Free Html Templates</span><br />
                Distributed By <span>ThemeWagon</span>
            </div>
        </div>
    )
}
export default Footer;