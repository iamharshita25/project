import React from 'react';
import './Agent.css';
import { Link } from 'react-router-dom';


const DeveloperCard = ({ name, location, role, profilePic, Experience, G_mail }) => {
    return (
        <div className="developer-card">
            <div className="card-image">
                <img src={profilePic} alt={`${name} profile`} />
            </div>
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-location">{location}</p>
                <p className="card-role">{role}</p>
                <p className="card-role">{Experience}</p>
                <button className="card-button">{G_mail}</button>
            </div>
        </div>
    );
};

const DevelopersSection = () => {
    const developers = [
        {
            name: 'Emir Khan',
            location: 'Vadodara,Gujarat',
            role: 'Property Dealer',
            profilePic: 'src/routes/About/agent01.jpg',
            Experience: '8+ years',
            G_mail: 'Emir@gmail.com',
        },
        {
            name: 'Max',
            location: 'surat,Gujarat',
            role: 'PropertyDealer',
            profilePic: 'src/routes/About/agent02.jpg',
            Experience: '10+ years',
            G_mail: 'Max@gmail.com',
        },
        {
            name: 'Rehyan Saikh',
            location: 'Ahemdabad,Gujarat',
            role: 'PropertyDealer',
            profilePic: 'src/routes/About/agent03.jpg',
            Experience: '7+ years',
            G_mail: 'rahulgami@gmail.com',
        },
        {
            name: 'Natasha singh',
            location: 'Vadodara,Gujarat',
            role: 'Agent',
            profilePic: 'src/routes/About/a1.jpg',
            Experience: '5+ years',
            G_mail: 'Natasha@gmail.com',
        },
        {
            name: 'Simran Patel',
            location: 'Ahmedabad,Gujarat',
            role: 'Agent',
            profilePic: 'src/routes/About/a2.jpg',
            Experience: '4+ years',
            G_mail: 'Simran@gmail.com',
        },
        {
            name: 'Pratap Rajput',
            location: 'Vadodara,Gujarat',
            role: 'Agent',
            profilePic: 'src/routes/About/images.jpg',
            Experience: '15+ years',
            G_mail: 'Pratal@gmail.com',
        },
        
    ];

    return (
        <>
            <div className="developers-section">
                <div className="section-header">
                    <h2>Check Our Website Agents </h2>
                    <h2>Their amazing experience</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do
                        eiusmod tempor incididunt ut labore et.
                    </p>
                </div>
                <div className="developer-grid">
                    {developers.map((developer, index) => (
                        <DeveloperCard
                            key={index}
                            name={developer.name}
                            location={developer.location}
                            role={developer.role}
                            Experience={developer.Experience}
                            profilePic={developer.profilePic}
                            G_mail={developer.G_mail}
                        />
                    ))}
                </div>


            </div>
            <footer className="footer">
                <div className="footer-content">
                    <Link to="/" className=' '><div className="logo1"><img src="src\routes\About\1.png" alt="Property 1" /></div></Link>
                    <ul className="footer-links">
                        <Link to="/" className=' '><li>Home</li></Link>
                        <Link to="/about" className='about'><li>About</li></Link>
                        
                        <li>Contact</li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default DevelopersSection;
