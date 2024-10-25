import React, { useEffect, useState } from 'react';
import Card from '../../component/card/Card';
import Filter from '../../component/filter/Filter';
import Map from '../../component/map/Map';
import Ad from '../../component/Advertisement/Ad';
import axios from 'axios';
import './listpage.scss';

function Listpage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from backend
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:3000/api/listing/get');  // Adjust API URL based on your setup
              
              // Log the entire response to check its structure
              console.log('API Response:', response);
              
              // Assuming the correct structure is response.data.listing
              if (response.data && response.data.listing && response.data.listing.length > 0) {
                  setData(response.data.listing);
              } else {
                  setData([]);  // If the response is empty or not valid
              }
              setLoading(false);
          } catch (err) {
              console.error('Error fetching listings:', err);
              setError('Error fetching listings');
              setLoading(false);
          }
      };
      fetchData();
  }, []);
  

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                        <div>No listings found</div>
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