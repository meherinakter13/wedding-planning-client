import React from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';



const Review = () => {
    return (
       <div>

        <div className="review-container" style={{ paddingTop: '2%' }}>
        <h1 className="text-center text-secondary mb-5" style={{ fontStyle: 'italic'}}><b>RE<span style={{ color:'#dd7140'}}>VI</span>EW</b></h1>
         <p className=" border-bottom"></p>
            <div>
              <ReviewDetails></ReviewDetails>
            </div>
        </div>
       </div>
    );
};
export default Review;