import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="landing-page">

        {/* Hero Section */}
        <header className="hero-section">
          <h1>Discover A Place You'll Love To Live</h1>
          <img src="src\routes\About\photo.jpg" alt="House" className="hero-image" />
        </header>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2>We're On A Mission To Change The View Of Real Estate</h2>
            <p>Learn more about how we help people find their dream homes.</p>
          </div>
        </section>

        {/* Focus Section */}
        <section className="focus-section">
          <h2>Our Main Focus</h2>
          <div className="focus-cards">
            <div className="focus-card">
              <img src="src\routes\About\icon.png" alt="" />
              <h3>Find A Home</h3>
              <p>Discover homes based on your needs.</p>
            </div>
            <div className="focus-card">
              <img src="src\routes\About\icon.png" alt="" />
              <h3>Sell A Home</h3>
              <p>Get the best value for your property.</p>
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section className="agents-section">
          <h2>Our Growing Agents</h2>
          <div className="agents">
            <div className="agent">
              <img src="src\routes\About\agent01.jpg" alt="Agent 1" />
              <h3>Emir</h3>
            </div>
            <div className="agent">
              <img src="src\routes\About\agent02.jpg" alt="Agent 2" />
              <h3>Max Hoo</h3>
            </div>
            <div className="agent">
              <img src="src\routes\About\agent03.jpg" alt="Agent 3" />
              <h3>Rehyan</h3>
            </div>
            <div className="agent">
              <img src="src\routes\About\agent02.jpg" alt="Agent 2" />
              <h3>Max Hoo</h3>
            </div>
            <div className="agent">
              <img src="src\routes\About\agent03.jpg" alt="Agent 3" />
              <h3>Rehyan</h3>
            </div>
            <div className="agent">
              <img src="src\routes\About\agent01.jpg" alt="Agent 1" />
              <h3>Emir</h3>
            </div>
          </div>
        </section>

        {/* Property Listings */}
        <section className="property-listings">
          <h2>We Bring Dream Homes To Reality</h2>
          <div className="property-cards">
            <div className="property-card">
              <img src="src\routes\About\photo.jpg" alt="Property 1" />
              <h3>1935 Greenview Heights</h3>
              <p>$650,000</p>
            </div>
            <div className="property-card">
              <img src="src\routes\About\photo.jpg" alt="Property 1" />
              <h3>1935 Greenview Heights</h3>
              <p>$650,000</p>
            </div>
            <div className="property-card">
              <img src="src\routes\About\photo.jpg" alt="Property 1" />
              <h3>1935 Greenview Heights</h3>
              <p>$650,000</p>
            </div>
            <div className="property-card">
              <img src="src\routes\About\photo.jpg" alt="Property 1" />
              <h3>1935 Greenview Heights</h3>
              <p>$650,000</p>
            </div>
            <div className="property-card">
              <img src="src\routes\About\photo.jpg" alt="Property 2" />
              <h3>330 North Palm Drive</h3>
              <p>$720,000</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"Best real estate service ever!"</p>
              <p>- Chuck Hall</p>
            </div>
            <div className="testimonial">
              <p>"Found my dream home easily."</p>
              <p>- Connie Walker</p>
            </div>
            <div className="testimonial">
              <p>"Best real estate service ever!"</p>
              <p>- Chuck Hall</p>
            </div>
            <div className="testimonial">
              <p>"Found my dream home easily."</p>
              <p>- Connie Walker</p>
            </div>
            <div className="testimonial">
              <p>"Found my dream home easily."</p>
              <p>- Connie Walker</p>
            </div>
            <div className="testimonial">
              <p>"Found my dream home easily."</p>
              <p>- Connie Walker</p>
            </div>
          </div>
        </section>



      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <Link to="/" className=' '><div className="logo1"><img src="src\routes\About\1.png" alt="Property 1" /></div></Link>
          <ul className="footer-links">
            <Link to="/" className=' '><li>Home</li></Link>
            <Link to="/agent" className='agent'><li>Agents</li></Link>
            
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default About;

