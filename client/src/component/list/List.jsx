import './list.scss';
import Card from '../card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch listings when component mounts
    useEffect(() => {
        const fetchListings = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/listing/get');
                setListings(res.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchListings();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="list">
            {listings.map(item => (
                <Card key={item._id} item={item} />
            ))}
        </div>
    );
}

export default List;
