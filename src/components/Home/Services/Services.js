import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://gentle-fjord-82903.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
            <section className="mb-4 mt-md-0  row justify-content-center">
            <div className="text-center mt-5 ">
                <h2 style={{color:'rgb(156, 48, 84)'}}>OUR SERVICES</h2>
                <h4>Services We Provide </h4>
            <div className="card-deck mt-5">
                    {
                     services.map(service =><ServiceDetails key={service._id} service={service} />)
                    }
                    
                </div>
        </div>
    </section>
    );
};

export default Services;