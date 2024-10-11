import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer-content">
                    <Link to="/" className=' '><div className="logo1"><img src="src\routes\About\1.png" alt="Property 1" /></div></Link>
                    <ul className="footer-links">
                        <Link to="/about" className='about'><li>About</li></Link>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </footer>
    )
}

export default Footer
