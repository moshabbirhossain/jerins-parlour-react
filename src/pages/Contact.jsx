import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <div>
            <div className=''>
                <body>
                    {/* <!-- Header section --> */}
                    {/* <header>
                        <button className="hamburger" id="hamburger-icon">
                            <span onclick="openNavbar()"> ☰</span>
                        </button>
                        <div className="logo">Your Logo</div>
                        <nav id="nav-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Enquiry</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                            </ul>
                        </nav>
                        <button className="reachUs-button">Call us</button>
                    </header> */}

                    {/* <!-- banner section  --> */}
                    <section className="banner">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230822131732/images.png" alt="Welcome to our Contact Us page"/>
                        <h1>Get in Touch With Us</h1>
                        <p>We're here to answer any questions you may have.</p>
                    </section>

                    {/* <!-- Contact form --> */}
                    <section>
                        <div className="form-container">
                            <h2>Your Details</h2>
                            <form action="#" method="POST">

                                <label for="name">Name: </label>
                                <input type="text" id="name" name="name" required/>
                
                                <label for="email">Email: </label>
                                <input type="email" id="email" name="email" required/>
                
                                <label for="phone">Phone: </label>
                                <input type="tel" id="phone" name="phone" required/>
                
                                <label for="message">Message: </label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </div>
                    </section>
                    {/* <!-- Company contact info --> */}
                    <section className="contact-info">
                        <h2>Contact Information</h2>
                        <address>
                            Your Company Name<br/>
                            123 Main Street<br/>
                            City, State Zip Code<br/>
                            Phone: <a href="tel:1234567890">123-456-7890</a><br/>
                            Email: <a href="mailto:info@example.com">info@example.com</a>
                        </address>
                    </section>
                    <script src="script.js"></script>
                </body>
            </div>
        </div>
    );
};

export default Contact;