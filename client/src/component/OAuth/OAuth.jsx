import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase'; // Ensure this is the correct path to your Firebase configuration
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom'
import './OAuth.css'
export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      // Split displayName to get first and last name
      const fullName = result.user.displayName.split(' ');
      const firstName = fullName[0];
      const lastName = fullName.slice(1).join(' ');

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/')
      console.log(result);
    } catch (error) {
      console.log('Could not sign in with Google', error);
    }
  };

  return (
    <button className='continuewithgoogle' onClick={handleGoogleClick} type="button">
      CONTINUE WITH GOOGLE
    </button>
  );
}
