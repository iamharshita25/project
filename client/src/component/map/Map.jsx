import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';


import Pin from '../pin/Pin';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({ items }) {
    // console.log('Map items:', items); // Debug line
    return (
        <MapContainer center={[22.6708,  71.5724]} zoom={7} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <Pin item={item} key={item._id} />
            ))}
        </MapContainer>
    );
}

export default Map;

