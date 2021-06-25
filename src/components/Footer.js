import React from 'react';
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe and take a look at the most Wonderful places
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" 
                        name="email"
                        placeholder="Your Email"
                        className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/services'>Testimonials</Link>
                        <Link>Careers</Link>
                        <Link>Investors</Link>
                        <Link>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Contact</Link>
                        <Link to='/services'>Support</Link>
                        <Link>Destinations</Link>
                        <Link>Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sign-up'>Submit Video</Link>
                        <Link to='/services'>Ambassadors</Link>
                        <Link>Agency</Link>
                        <Link>Influencer</Link>
                    </div>
                
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='/services'>Facebook</Link>
                        <Link>Youtube</Link>
                        <Link>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-log">
                        <Link to='/' className='social-logo'>
                        WONDER <i className='fas fa-photo-video'></i>
                        </Link>
                    </div>
                    <small className="website-rights">WONDER © 2021 | Coded by Angelyn T. Dequito</small>
                    <div className="social-icons">
                        <Link to='/' target='_blank' aria-label='facebook' className="social-icons-link facebook"><i className="fab fa-facebook-f"/></Link>

                        <Link to='/' target='_blank' aria-label='instgram' className="social-icons-link instagram"><i className="fab fa-instagram"/></Link>

                        <Link to='/' target='_blank' aria-label='youtube' className="social-icons-link youtube"><i className="fab fa-youtube"/></Link>

                        <Link to='/' target='_blank' aria-label='Twitter' className="social-icons-link Twitter"><i className="fab fa-twitter"/></Link>

                        <Link to='/' target='_blank' aria-label='Linkedin' className="social-icons-link Linkedin"><i className="fab fa-linkedin"/></Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer 