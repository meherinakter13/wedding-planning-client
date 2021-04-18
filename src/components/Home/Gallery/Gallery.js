import React from 'react';
import peter from '../../../images/mr-mrs.jpg';
import religious from '../../../images/religious.jpg';
import couple from '../../../images/couple.jpg';
import GalleryDetails from '../GalleryDetails/GalleryDetails';

const Gallery = () => {
    const galleryData = [
    {
        title : "MR & MRs Peter's Wedding",
        img : peter,
        date : '23 April 2019'
    },
    {
        title : 'Religious Wedding',
        img : religious,
        date : '01 June 2019'
    },
    {
        title : 'Emily & Brand Wedding',
        img : couple,
        date : '13 November 2019'
    }
]
    return (
        <section className="blogs my-5 row justify-content-center">
           {/* <div className="container"> */}
               <div className="section-header text-center">
                    <h2 style={{color:"rgb(156, 48, 84)"}}>OUR GALLERY</h2>
               </div>
               <div className="card-deck mt-5 ">
                    {
                        galleryData.map(gallery => <GalleryDetails gallery={gallery} key={gallery.title}/>)
                    }
               </div>
           {/* </div> */}
       </section>
    );
};

export default Gallery;