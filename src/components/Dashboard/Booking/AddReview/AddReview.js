import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import HeaderNav from '../../../Home/HeaderNav/HeaderNav';
import Sidebar from '../../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = data => {
        const reviewDetails = {
            name: loggedInUser.name,
            comment: data.comment
        }
        fetch('https://gentle-fjord-82903.herokuapp.com/addReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('successfully done')
                }
            });
    };

    return (
        <section className="fluid-container  ">
        <HeaderNav></HeaderNav>
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Review</h5>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-success mt-5 p-5 rounded container shadow">
                        <div class="col-md-6 mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label text-white">Name</label>
                            <div class="col-sm-10">
                                <input name="name" defaultValue={loggedInUser.name} {...register('name')} className="form-control" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label text-white">Add Comment</label>
                            <div class="col-sm-10">
                                <textarea name="comment" placeholder="write your opinion....." {...register('comment')} id="" cols="100" rows="5" className="form-control" required ></textarea>
                                {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                        </div>
                        <div class="col-md-6 mb-3 d-flex content-justify-between">
                            <div className="col-md-6">
                            <button className="btn btn-danger" type="submit">Submit</button>
                            </div>
                        </div>

                    </form>
            </div>
            </div>
        </section>
    );
};

export default AddReview;