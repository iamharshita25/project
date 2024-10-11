import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../component/OAuth/OAuth";
import styles from './SignUp.module.scss'; 
export default function SignUp() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value
            }
        )
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            if (data.success === false) {
                setLoading(false)
                setError(data.message)
                return;
            }
            setLoading(false)
            setError(null)
            navigate('/signin')
            console.log(data);
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }


    }

    return (
        <div className={styles['sign-up-container']}>
            <div className={styles['sign-up-box']}>
                <h1>Create your account now</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        aria-label="First Name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        aria-label="Last Name"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        aria-label="Email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        aria-label="Password"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Phone Number"
                        id="phoneNumber"
                        aria-label="Phone Number"
                        onChange={handleChange}
                    />
                    <button type="submit">
                        {'SIGN UP'}
                    </button><br></br>

                <OAuth />
                </form>
                <div className={styles['sign-in-link']}>
                    <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}