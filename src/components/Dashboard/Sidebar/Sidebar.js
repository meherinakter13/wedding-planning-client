import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })

        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            {
                    ! isAdmin && <div>
            <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
               
                        <li>
                            <Link to="/booking" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/bookingList" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addReview" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>
}
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/orderList" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Order list</span>
                            </Link>
                        </li>
                          <li>
                            <Link to="/addServices" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Add service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Manage service</span>
                            </Link>
                        </li>
                    </div>
                }

            </ul>
        </div>
    );
};

export default Sidebar;