import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';

export default function Sidebar() {

    const signOut = () => {
        window.open('http://localhost:5000/auth/logout');
    }

    return (
        <>
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dev<span style={{ color: '#1D9BF0' }}>Hire</span></h3>
                    <ul className="sidebar-list">
                        <Link to="/" className='link'>
                        <li className="sidebar-list-item active">
                            <div className="icon-squar">
                                <div className="sidebar-icon">
                                    <i className="bi bi-house"></i>
                                </div>
                            </div>
                            Home
                        </li>
                        </Link>
                        <Link to="/favorites" className='link'>
                        <li className="sidebar-list-item">
                            <div className="sidebar-icon">
                                <i className="bi bi-heart"></i>
                            </div>
                            Favorites
                        </li>
                        </Link>
                        <Link to="/favorites" className='link'>
                        <li className="sidebar-list-item" onClick={signOut}>
                            <div className="sidebar-icon">
                                <i className="bi bi-power"></i>
                            </div>
                            Logout
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <hr className="line" />
        </div>
        </>
    )
}
