import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import HeaderNav from '../../../Home/HeaderNav/HeaderNav';
import { UserContext } from '../../../../App';

const BookingList = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://gentle-fjord-82903.herokuapp.com/bookingList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])
    return (
        <div className="fluid-container">
            <HeaderNav></HeaderNav>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h3 className="m-5">Thank You, {loggedInUser.email} You have booked total {orders.length} services.</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        {
                            orders.map(order =>
                                <tbody>
                                    <tr>
                                        <td style={{ width: "20%" }}>{order.serviceName}</td>
                                        <td style={{ width: "20%" }}>{order.price}</td>
                                        <td style={{ width: "20%" }}> {
                                            order.image ? <img style={{ height: '100px', width: '100px', marginTop: '10px' }} src={`data:image/png;base64,${order.image.img}`} alt="" />
                                                :
                                                <img style={{ height: '120px', width: '120px' }} className="img-fluid mb-3" src={`https://gentle-fjord-82903.herokuapp.com/${order.img}`} alt="" />
                                        }</td>
                                        <td style={{ width: "20%",color: 'red'}}>{order.status}</td>
                                    </tr>
                                </tbody>

                            )
                        }

                    </table>

                </div>
            </div>
        </div>

    );
};


export default BookingList;