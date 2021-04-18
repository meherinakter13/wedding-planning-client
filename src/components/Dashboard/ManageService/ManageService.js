import React, { useEffect, useState } from 'react';
import HeaderNav from '../../Home/HeaderNav/HeaderNav';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services ,setServices] = useState([])
    useEffect(()=>{
        fetch('https://gentle-fjord-82903.herokuapp.com/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])

    const deleteProduct  = () =>{
        fetch(`https://gentle-fjord-82903.herokuapp.com/services`)
        .then(res =>res.json())
        .then(data => setServices(data))
       }
        
        const handleDelete = (id) => {
          fetch(`https://gentle-fjord-82903.herokuapp.com/deleteService/${id}`, {
              method : "DELETE"
          })
          .then(res => res.json())
          .then(data=>{
              if(data){
                  alert('Product Deleted successfully')
                  deleteProduct();
              }
          })
      }
    return (
        <div className="fluid-container">
        <HeaderNav></HeaderNav>
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 mx-auto">
           <table class="table table-primary col-md-12 col-sm-12">
            <thead>
                <tr>
                <th className="w-25" scope="col">Service Name</th>
                <th className="w-25" scope="col">Description</th>
                <th className="w-25" scope="col">Price</th>
                <th className="w-25" scope="col">Image</th>
                <th className="w-25" scope="col">Action</th>
                </tr>
            </thead>
        </table>
     <div className="row">
        {
            services.map(service=><div className="col-md-12 col-sm-12">
                <table class="table table-primary">
                    <tbody>
                        <tr>
                        <td className="w-25">{service.serviceName}</td>
                        <td className="w-25">{service.description}</td>
                        <td className="w-25">{service.price}</td>
                        <td className="w-25"> {
                            service.image ? <img style={{ height: '100px', width: '100px', marginTop: '10px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                                :
                                <img style={{ height: '120px', width: '120px' }} className="img-fluid mb-3" src={`https://gentle-fjord-82903.herokuapp.com/${service.img}`} alt="" />
                            }</td>
                        <td className="w-25"><button className ="btn btn-danger mt-3" onClick = {()=>handleDelete(service._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>)
        }
    </div>
    </div>
    </div>
    </div>

    );
};

export default ManageService;