import Card from '../../component/card/Card';
import Filter from '../../component/filter/Filter';
import Map from '../../component/map/Map';
import Ad from '../../component/Advertisement/Ad';
import { data } from '../../library/homedata';
import './listpage.scss';





function Listpage() {


    const datta = data;
    return(
        <div className="listpage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {datta.map(item=>(
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={datta}/>
                <Ad/>
            </div>
        </div>
    )
}

export default Listpage;
