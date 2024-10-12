import Slider from '../../component/slider/Slider'
import Map from '../../component/map/Map'
import { spa_data, userdata } from "../../library/homedata"
import tag from "./lets-icons--pin-alt-duotone (1).png"
import chat from "../../routes/SPA/chat.png"
import house from "../../routes/SPA/pepicons-pop--house-circle.png"
import save from "../../routes/SPA/material-symbols--bookmark-outline.png"
import './SPA.scss'
import { Link } from 'react-router-dom';



function SPA() {
    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider img={spa_data.image} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{spa_data.title}</h1>
                                <div className="address">
                                    <img src={tag} alt="" />
                                    <span>{spa_data.address}</span>
                                    <div className="buttons">
                                    {/* <button><img src={chat} alt="" />Send the message</button>
                                    <button><img src={save} alt="" />Save the place</button> */}
                                        <Link to='/3dmodel' ><button><img src={house} alt="" />3D Model</button></Link>
                                </div>
                                </div>
                                <div className="price">
                                    ₹{spa_data.price}
                                    
                                </div>
                                
                            </div>
                            <div className="user">
                                <img src={userdata.image} alt="" />
                                <span>{userdata.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {spa_data.description}

                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <div className="title">General</div>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="src/routes/SPA/game-icons--auto-repair.png" alt="" />
                            <div className="featuretext">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="src/routes/SPA/streamline--pet-paw-solid.png" alt="" />
                            <div className="featuretext">
                                <span>Pet policy</span>
                                <p>not allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="src/routes/SPA/uil--bill.png" alt="" />
                            <div className="featuretext">
                                <span>Water Tax and Light Bill</span>
                                <p>Renter is responsible to pay</p>
                            </div>
                        </div>
                    </div>
                    <div className="title">Sizes</div>
                    <div className="sizes">
                        <div className="size">
                            <img src="src/routes/SPA/fluent--resize-large-24-regular.png" alt="" />
                            <span>900sqft</span>
                        </div>
                        <div className="size">
                            <img src="src/routes/SPA/streamline-emojis--bathtub.png" alt="" />
                            <span>1bathroom</span>
                        </div>
                        <div className="size">
                            <img src="src/routes/SPA/cbi--bedroom.png" alt="" />
                            <span>2bedroom</span>
                        </div>
                    </div>
                    <div className="title">Nearby Places</div>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="src/routes/SPA/noto--school.png" alt="" />
                            <div className="featuretext">
                                <span>School</span>
                                <p>{spa_data.school}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="src/routes/SPA/noto--bus.png" alt="" />
                            <div className="featuretext">
                                <span>Bus stand</span>
                                <p>{spa_data.bus_stand}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="src/routes/SPA/noto--hospital.png" alt="" />
                            <div className="featuretext">
                                <span>Hospital</span>
                                <p>{spa_data.hospital}</p>
                            </div>
                        </div>
                    </div>
                    <div className="title">Location</div>
                    <div className="mapContainer spaMap">
                        <Map items={[spa_data]} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SPA