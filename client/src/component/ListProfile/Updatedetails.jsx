import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../routes/profilepage/addnewhouse.css';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import {app} from '../../firebase'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Updatedetails = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [files,setFiles] = useState([])
    const [formData, setFormData] = useState({
        imageUrls: [],
        name: '',
        description: '',
        address: '',
        bedrooms: 1,
        bathrooms: 1,
        nearbyPlaces: '',
        area: 0,
        options: 'renting',
        price: ''
    });
    
    // console.log(files)
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(formData);
    const handleImageSubmit = (e) => {
        if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
            setUploading(true);
            setImageUploadError(false);
            const promises = [];

            for (let i = 0; i < files.length; i++) {
                promises.push(storeImage(files[i]));
            }
            Promise.all(promises)
                .then((urls) => {
                    setFormData({
                        ...formData,
                        imageUrls: formData.imageUrls.concat(urls),
                    });
                    setImageUploadError(false);
                    setUploading(false);
                })
                .catch((err) => {
                    setImageUploadError('Image upload failed (2 mb max per image)');
                    setUploading(false);
                });
        } else {
            setImageUploadError('You can only upload 6 images per listing');
            setUploading(false);
        }
    };
    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };
    const handleChange = (e) => {
        if (e.target.id === 'selling' || e.target.id === 'renting') {
            setFormData({
                ...formData,
                options: e.target.id,
            });
        }
        if (
            e.target.type === 'number' ||
            e.target.type === 'text' ||
            e.target.type === 'textarea'
        ) {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value,
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.imageUrls.length < 1)
                return setError('You must upload at least one image'); setLoading(true);
            setError(false);
            const res = await fetch('/api/listing/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    userRef: currentUser._id,
                }),
            });
            const data = await res.json();
            setLoading(false);
            if (data.success === false) {
                setError(data.message);
            }
            navigate(`/listing/${data._id}`);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    return (
        <div className="property-form-container">
            <form onSubmit={handleSubmit} className="property-form" >
                <h2>Update Profile Details</h2>

                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            value={formData.name}
                            
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address" 
                            id="address"
                            onChange={handleChange}
                            value={formData.address}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Nearby Places</label>
                        <input
                            type="text"
                            name="nearbyPlaces" 
                            id='nearbyPlaces'
                            onChange={handleChange}
                            value={formData.nearbyPlaces}
                        />
                    </div>
                    <div className="form-group">
                        <label>Overall Area (sq ft)</label>
                        <input
                            type="number"
                            name="area" 
                            id="area" 
                            required
                            onChange={handleChange}
                            value={formData.area}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>No. of Bedrooms</label>
                        <input
                            type="number"
                            name="bedrooms" 
                            id="bedrooms" 
                            required
                            onChange={handleChange}
                            value={formData.bedrooms}
                        />
                    </div>
                    <div className="form-group">
                        <label>No. of Bathrooms</label>
                        <input
                            type="number"
                            name="bathrooms" 
                            id="bathrooms" 
                            required
                            onChange={handleChange}
                            value={formData.bathrooms}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description" 
                        id="description" 
                        required
                        onChange={handleChange}
                        value={formData.description}
                    />
                </div>

                <div className="form-row">
                    

                    <div className="form-group">
                        <label>Options</label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="selling"
                                    id="selling"
                                    onChange={handleChange}
                                    checked={formData.options === 'selling'}
                                />
                                Selling
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="renting"
                                    id="renting"
                                    onChange={handleChange}
                                    checked={formData.options === 'renting'}
                                />
                                Renting
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Price (₹)</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            onChange={handleChange}
                            value={formData.price}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Upload Images (Max 6)</label>
                        <input
                            type="file"
                            multiple
                            id="images"
                            accept="image/*"
                            onChange={(e)=>setFiles(e.target.files)}
                            
                        />
                    </div>
                </div>
                <div className="button-group">
                    {/* <button> <Link to="/Pricing" className='Pricing'>Pricing Calculator</Link></button> */}
                    <button disabled={uploading} type='button' onClick={handleImageSubmit}> {uploading ? 'Uploading...' : 'Upload images'}  </button>
                </div>
                <p>   {imageUploadError && imageUploadError}</p>
                <button disabled={loading || uploading} type="submit"> {loading ? 'Updating...' : 'Updating details '}</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Updatedetails;


