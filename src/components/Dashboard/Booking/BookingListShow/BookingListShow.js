import React from 'react';

const BookingListShow = ({booking}) => {
    return (
        <div>
            <div className="mt-3 mb-5 col-md-4">
                <div className="card mb-4 mt-3 border-light shadow" style={{ width: "20rem", height: "22rem" }}>
                    <div className="card-header border-light d-flex justify-content-between">
                        <img src={booking.img} className="card-img-top" style={{ width: "6rem", height: "6rem" }} alt="" />
                        <small className="mt-2"><span class="label label-small p-2 text-white" style={{background:"#C9616E",}}>Pending</span></small>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-primary">{booking.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingListShow;