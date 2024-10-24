import './list.scss';
import Card from '../card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/listing/get');

        setListings(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="list">
      {listings.length > 0 ? (
        listings.map((item) => <Card key={item._id} item={item} />)
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  );
}

export default List;

