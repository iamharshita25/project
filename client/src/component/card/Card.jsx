import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item._id}`} className='imageContainer'>
        <img src={item.imageUrls[0]} alt={item.name} />
      </Link>
      <div className="textContainer">
        <h2 className='title'>
          <Link to={`/${item._id}`}>{item.name}</Link>
        </h2>
        <p className='address'>
          <img src="/src/component/card/gg--pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className='price'>₹{item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/src/component/card/material-symbols-light--bedroom-parent-outline-sharp.png" alt="" />
              <span>{item.bedrooms} Bedrooms</span>
            </div>
            <div className="feature">
              <img src="/src/component/card/cil--bathroom.png" alt="" />
              <span>{item.bathrooms} Bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/src/component/card/material-symbols--bookmark-outline.png" alt="" />
            </div>
            <div className="icon">
              <img src="/src/component/card/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


