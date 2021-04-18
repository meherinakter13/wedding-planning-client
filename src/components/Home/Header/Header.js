import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import MainHeader from '../MainHeader/MainHeader';
import'./Header.css';

const Header = () => {
    return (
        <div className="header-container mb-5">
            <HeaderNav></HeaderNav>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;