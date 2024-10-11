import React, { useEffect, useState } from 'react';
import Card from '../../component/card/Card';
import Filter from '../../component/filter/Filter';
import Map from '../../component/map/Map';
import Ad from '../../component/Advertisement/Ad';
import './listpage.scss';
import axios from 'axios';

function Listpage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/listing/get');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="listpage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {data.length > 0 ? (
                        data.map(item => (
                            <Card key={item._id} item={item} />
                        ))
                    ) : (
                        <div>No listi ngs found</div>
                    )}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data} />
                <Ad />
            </div>
        </div>
    );
}

export default Listpage;
