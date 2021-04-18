import React from 'react';
import { useHistory } from 'react-router';
import'./ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const history = useHistory()
    const handleCheckOut =(_id)=>{
      history.push(`/booking/${_id}`)
    }
    return (
        <div className="container mt-2 mb-5 col-md-3 ml-3 ">
       <div class="card card-design text-white" style={{ width: "23rem", height:"25rem" ,backgroundColor:" rgb(156, 48, 84)",borderRadius:'0px 20px 0px 20px'}}>

           <div>
           {
            service.image ? <img className="content" style={{height:'120px',width:'120px',marginTop:'15px'}} src={`data:image/png;base64,${service.image.img}`}alt=""/>
            :
            <img style={{height:'120px',width:'120px'}} className="img-fluid mb-3 content" src={`http://localhost:5000/${service.img}`} alt=""/>
           }
           <h3 className="text-white p-2">{service.serviceName}</h3>
           <p className="text-white p-2">Description: {service.description}</p>
           <p className="text-white ">Price: {service.price}$</p>
           <button onClick={() =>handleCheckOut(service._id)} className="btn btn-danger">Book Now</button>
           </div>
       </div>
       </div>
    );
};

export default ServiceDetails;