import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import HeaderNav from '../../../Home/HeaderNav/HeaderNav';
import PaymentProcess from '../../PaymentProcess/PaymentProcess/PaymentProcess';
import Sidebar from '../../Sidebar/Sidebar';

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://gentle-fjord-82903.herokuapp.com/booking/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [id])

    const { serviceName,price,image } = booking;

    const handlePaymentSuccess = paymentId => {
        const bookingDetails = {
            ...loggedInUser,
            serviceName:serviceName,
            image:image,
            price:price,
            paymentId
        }

        fetch('https://gentle-fjord-82903.herokuapp.com/addAllBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully.');
                }
            })
    }
    return (
        <div className="fluid-container  ">
            <HeaderNav></HeaderNav>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2">Booking</h1>
                    <div className="container">
                        <form>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">User Name</label>
                                <div class="col-sm-10">
                                    <input type="text" defaultValue={loggedInUser.name} class="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">User Email</label>
                                <div class="col-sm-10">
                                    <input type="email" defaultValue={loggedInUser.email}  class="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Service</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword3" value={serviceName} />
                                </div>
                            </div>
                        </form>
                        <h2 className="pt-5">Book with your credit card</h2>
                        <div className="col-md-8 bg-light shadow mt-5 pt-5">
                            <PaymentProcess handlePaymentSuccess={handlePaymentSuccess}></PaymentProcess>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Booking;