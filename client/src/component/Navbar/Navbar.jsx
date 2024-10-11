import { useState } from 'react';
import './Navbar.scss'
import { userdata } from "../../library/homedata"
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { signOutUserFailure,signOutUserStart, signOutUserSuccess, } from '../../redux/user/userSlice';
function Navbar() {
    const { currentUser } = useSelector((state) => state.user);
    const [open, setOpen] = useState(false)
    // const user = true;
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            dispatch(signOutUserStart());
            const res = await fetch('/api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                dispatch(signOutUserFailure(data.message));
                return;
            }
            dispatch(signOutUserSuccess(data));
        } catch (error) {
            dispatch(signOutUserFailure(data.message));
        }
    };
    return (
        <nav>
            <div className="left">
                <a href='/' className='logo'>
                    <img src="src/component/Navbar/1.png" alt="" />

                </a>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/'>Services</a>
                <a href='/agent'>Agents</a>
            </div>
            <div className="right">
                {currentUser ? (
                    <div className='user'>
                        <Link to="/profile" >
                        <img src={currentUser.avatar} alt="" />
                        <span className='name'>{currentUser.firstName}</span>
                        </Link>
                           
                            <span onClick={handleSignOut} className='profile'>Sign out</span>

                    </div>) : (<>
                        <Link to="/signin" className='login'>Login</Link>
                        <Link to="/signup" className=' signup register'>Sign up</Link></>)}
                <div className="menuIcon">
                    <img src="src/component/Navbar/mage--dots-menu.png" alt="" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Services</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Login</a>
                    <a href='/'>Sign up</a>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;