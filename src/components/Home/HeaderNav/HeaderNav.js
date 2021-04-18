import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { UserContext } from '../../../App';
import firebase from 'firebase/app';
import "firebase/auth";
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }
    return (
        <div>
            <Navbar style={{background:'rgb(196, 93, 127)'}} expand="lg">
            <Navbar.Brand href="/home"><h2><Link to="/home" className="nav-link text-white">Wedding BD</Link></h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end ">
                <Link to="/home" className="nav-link text-white">Home</Link>
                <Link to="/order" className="nav-link text-white">About Us</Link>
                <Link to="/order" className="nav-link text-white">Contact</Link>
                <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
                <Link to="/admin" className="nav-link text-white">Admin</Link>
                <Link to="/login" className="nav-link text-white"onClick={handleSignOut} >{loggedInUser.email?'Logout':'Login'}</Link>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;