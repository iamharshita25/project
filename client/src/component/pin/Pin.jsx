import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
import { Link } from 'react-router-dom';

function Pin({ item }) {
    console.log('Rendering Marker:', item.latitude, item.longitude); // Debug line
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupcountainer">
                    <img src={item.image} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedrooms} Bedrooms </span>
                        <b>₹{item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;
