import './layout.scss';
import { Outlet } from 'react-router-dom';
// import Homepage from '../HomePage/homepage';
import Navbar from '../../component/Navbar/Navbar'



function Layout() {
    return (

        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout