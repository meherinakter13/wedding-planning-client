import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const AddServices = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('serviceName', info.serviceName)
        formData.append('price', info.price)
        formData.append('description', info.description)

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            e.target.reset();
            if(data){
                alert("service added successfully");
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
                <h5 className="text-brand">Add Services</h5>
                <form onSubmit ={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputName">Name</label>
                        <input onBlur ={handleBlur} type="text" class="form-control" name="serviceName" placeholder=" Service name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <input onBlur ={handleBlur} type="text" class="form-control" name="description" placeholder="Enter description" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Price</label>
                        <input onBlur ={handleBlur} type="text" class="form-control" name="price" placeholder="Enter price" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFile">Upload a image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputFile" placeholder="Picture" />
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddServices;