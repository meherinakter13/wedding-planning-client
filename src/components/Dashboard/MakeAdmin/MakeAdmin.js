import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [info, setInfo] = useState({})
    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('email', info.email)

        fetch('https://gentle-fjord-82903.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                e.target.reset();
                alert("Admin added successfully");
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section className="container-fluid row " >
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Admin</h5>
                <form onSubmit ={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur ={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;