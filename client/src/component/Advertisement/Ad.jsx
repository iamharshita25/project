import React, { useState, useEffect, useRef } from 'react';
import './Ad.scss';
import img1 from './ad01.png';
import img2 from './ad02.png';
import img3 from './ad03.png';
import img4 from './ad04.png';
import img5 from './ad05.png';

function Ad() {
    const images = [img1, img2, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef();

    const startSlideShow = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    };

    const stopSlideShow = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startSlideShow();
        return () => stopSlideShow(); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="ad">
            <div className="ad__container">
                <div
                    className="image-container"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            className="images"
                            key={index}
                            onMouseEnter={stopSlideShow}
                            onMouseLeave={startSlideShow}
                        >
                            <img src={image} alt={`Ad ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ad;
