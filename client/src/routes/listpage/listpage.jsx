import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL of the backend API
  const apiURL = 'http://localhost:3000/api/listing/get';
 // Change this to your backend URL

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(apiURL); // Fetch data from the backend
        setListings(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching listings:', err);
        setError('Failed to load listings. Please try again later.');
        setLoading(false);
      }
    };

    fetchListings();
  }, [apiURL]); // Fetches when apiURL changes

  if (loading) {
    return <div>Loading listings...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (listings.length === 0) {
    return <div>No listings found.</div>;
  }

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing._id}>{listing.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListingsPage;
