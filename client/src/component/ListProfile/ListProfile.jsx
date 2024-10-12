import { Link } from 'react-router-dom'
import './1.scss'

function Card({ item }){
    return(
        <div className="card">
            <Link to={`/${item.id}`} className='imageContainer'>
            <Link to="/spa" className='spa'><img src={item.image} alt={item.title} /></Link>
            </Link>
             <div className="textContainer">
             <Link to="/spa" className='spa'><h2 className='tittle'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className='address'>
                    <img src="src/component/card/gg--pin.png" alt="" />
                    <span>{item.location}</span>
                </p></Link>
                <p className='price'>₹{item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="src/component/card/material-symbols-light--bedroom-parent-outline-sharp.png" alt="" />
                            <span>{item.bedrooms} Bedrooms</span>
                        </div>
                        <div className="feature">
                            <img src="src/component/card/cil--bathroom.png" alt="" />
                            <span>{item.bathrooms} Bathrooms</span>
                        </div>
                    </div>
                    <div className="icons">
                        <Link to="/updatedetails" className='updatedetails'><button>Update details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
