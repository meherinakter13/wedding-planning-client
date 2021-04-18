import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ReviewDetails.css';

const ReviewDetails = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
 
        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1, 
          autoplay:true
        };
    return (
        <div>
        <Slider {...settings} className="container h-100 mt-5 ">
        {
            reviews.map(review =>
                <div className="text-center mt-3 mb-4">
                    
                    <div>
                    <h1 style={{ color:'#dd7140'}}>{review.name}</h1>
                    <p className=" text-secondary">{review.comment}</p>
                    </div>
                </div>
            )
        }
        </Slider>
      </div>
    );
};
export default ReviewDetails;