import React from 'react';

const GalleryDetails = (props) => {
    const {title, img , date} = props.gallery;
    return (
       <div className="container mt-2 mb-5 col-md-4">
       <div class="card text-white" style={{ width: "23rem", height:"30rem" ,backgroundColor:" rgb(156, 48, 84)",borderRadius:'0px 20px 0px 20px'}}>
           <div>
           <img src={img} style={{ width: "100%", height:"20rem",borderRadius:'0px 20px 0px 20px' }} alt="..." />
               <h3 class="card-title p-3 ">{title}</h3>
               <p className="pl-3">{date}</p>
           </div>
       </div>
       </div>
    );
};

export default GalleryDetails;