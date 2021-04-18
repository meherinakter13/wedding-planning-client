import React from 'react';
import'./../Header/Header.css';


const MainHeader = () => {
    return (
            <div className="m-5 p-5 row">
                <div className="col-md-8">
                <h1 style={{color:'purple'}}>Let us plan<br/> Your perfect wedding</h1>
                <p style={{color:'purple'}} class="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, minima inventore unde facilis dolor ab eligendi eaque similique odio ad repellendus debitis saepe quia nisi?</p>
                <button style={{backgroundImage: "linear-gradient(90deg, #86ebe7, purple)"}}class="btn text-white mt-3">GET APPOINTMENT</button>
                </div>
            </div>
    );
};

export default MainHeader;