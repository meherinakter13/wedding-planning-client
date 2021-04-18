import React from 'react';
import HeaderNav from '../../Home/HeaderNav/HeaderNav';

import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height:"100%"
    }
    return (
       <section>
          <section>
            <div style={containerStyle} className="fluid-container">
               <HeaderNav></HeaderNav>
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
       </section>
    );
};

export default Dashboard;