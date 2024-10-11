import { useState } from "react";
import "./Slider.scss"

import arrowleft from "./pajamas--arrow-left.png"
import arrowright from "./pajamas--long-arrow.png"

function Slider({ img }) {
    const [imageIndex, setImageIndex] = useState(null);

    const changeSlide = (disha) => {
        if (disha === "left") {
            if (imageIndex === 0) {
                setImageIndex(img.length - 1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === img.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }
    };

    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow">
                        <img src={arrowleft} alt="" onClick={() => changeSlide("left")} />
                    </div>
                    <div className="imgcontainer">
                        <img src={img[imageIndex]} alt="" />
                    </div>
                    <div className="arrow">
                        <img src={arrowright} alt="" onClick={() => changeSlide("right")} />
                    </div>
                    <div className="close" onClick={() => setImageIndex(null)}>
                        x
                    </div>
                </div>
            )}
            <div className="bigImage">
                <img src={img[0]} alt="" onClick={() => setImageIndex(0)} />
            </div>
            <div className="smallImages">
                <div className="smi">
                    {img.slice(1,5).map((image, index) => (
                        <img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;
