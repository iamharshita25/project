import { useSelector } from 'react-redux'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState, useEffect } from 'react'
import { app } from '../../firebase'
import './updateprofile.css'
import { useDispatch } from 'react-redux';
import {updateUserStart, updateUserSuccess, updateUserFailure, } from '../../redux/user/userSlice.js'

export default function UpdateProfile() {
    const fileRef = useRef(null);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const { currentUser,loading,error } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    console.log(file)
    console.log(fileUploadError)
    console.log(filePerc)
    console.log('Current User:', currentUser);
    console.log(formData)
    const dispatch = useDispatch();

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, avatar: downloadURL })
                );
            }
        );
    };

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data.message));
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);

            setTimeout(() => {
                setUpdateSuccess(false);
            }, 2000); 
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };
    return (
        <div className='profile-section'>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit} >
                <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type='file'
                    ref={fileRef}
                    hidden
                    accept='image/*'
                />
                <span> <img height="100px"
                    onClick={() => fileRef.current.click()}
                    src={formData.avatar || currentUser.avatar}
                    alt='profile'

                /></span>
                <p >
                    {fileUploadError ? (
                        <span  >
                            Error Image upload (image must be less than 2 mb)
                        </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                        <span  >{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                        <span >Image successfully uploaded!</span>
                    ) : (
                        ''
                    )}
                </p>
                <input
                    type='text'
                    placeholder='first name'
                    id='firstName'
                     defaultValue={currentUser.firstName}
                     onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='last name'
                    id='lastName'
                    defaultValue={currentUser.lastName}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    placeholder='email'
                    id='email'
                    defaultValue={currentUser.email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='password'
                    id='password'
                    onChange={handleChange}
                    
                />
                <input
                    type='number'
                    placeholder='phone number'
                    id='phoneNumber'
                    defaultValue={currentUser.phoneNumber}
                    onChange={handleChange}
                />
                <button disabled={loading} >
                    {loading ? 'Loading...' : 'Update'}
                </button>
            <p >{error ? error : ''}</p>
            <p >
                {updateSuccess ? 'User is updated successfully!' : ''}
            </p>
            </form>
        </div>
    );

}
