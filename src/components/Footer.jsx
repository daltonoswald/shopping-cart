import { Link } from "react-router-dom";
import facebookIcon from "/src/assets/facebook.svg"
import instagramIcon from "/src/assets/instagram.svg"
import twitterIcon from "/src/assets/twitter.svg"
import youtubeIcon from "/src/assets/youtube.svg"
import githubIcon from "/src/assets/github.svg"

function Footer() {
    return (
        <>
            <div className="newsletter">
                <div className="newsletter-left">
                    <p className="member">SIGN UP TODAY</p>
                    <p className="newsletter-info">
                        Sign up for the newsletter today and receive early access to new products, 
                        monthly discount codes, and free shipping on your first order!</p>
                </div>
                <button className='sign-up'>Sign up for free</button>
            </div>
            <div className="footer">
                <div className="top">
                    <div className="footer-links">
                    <div className="list-title"> Help
                        <ul>
                            <li>Order Status</li>
                            <li>Shipping & Delivery</li>
                            <li>Order Cancellations</li>
                            <li>Returns</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="list-title"> About Us
                        <ul>
                            <li>Our Team</li>
                            <li>Our Story</li>
                            <li>News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    </div>
                    <div className="social-media">
                        <img className="facebook-icon" src={facebookIcon} alt="facebook" />
                        <img className="instagram-icon" src={instagramIcon} alt="instagram" />
                        <img className="twitter-icon" src={twitterIcon} alt="twitter" />
                        <img className="youtube-icon" src={youtubeIcon} alt="youtube" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="credit">
                        <p>Created by Dalton Oswald</p>
                        <a href="https://github.com/daltonoswald/shopping-cart">
                            <img className="github-link" src={githubIcon} alt="github link" />
                        </a>
                    </div>
                    <ul className="legal-links">
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Accessibilty Policy</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer