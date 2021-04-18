import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPaperPlane, faRuler, faCertificate } from '@fortawesome/free-solid-svg-icons';
import event1 from "../../../images/event1.jpg";
import event2 from "../../../images/event2.jpg";
import'./HireUs.css';
const HireUs = () => {
    return (
        <section className="fluid-container mt-5 mb-5" >
            <div className=" text-center border-bottom">
                <h1 className="fw-bolder mt-5 text-brand" style={{color:"rgb(156, 48, 84)"}}>Why We Are Best</h1>
            </div>
            <div className="container mt-5 d-flex align-items-center">
                <div className=" row">
                    <div className="col-md-4 col-sm-12">
                        <h2 className=" fw-bold" style={{color:"rgb(156, 48, 84)"}}>WE WANT TO GIVE YOU THE BEST EXPERIENCE</h2>
                        <p className="underline mt-2"></p>

                        <p className="mt-5 text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi ducimus aliquid sapiente sunt accusamus blanditiis perspiciatis veniam dicta sint! In quos tempora ipsam maxime.</p>

                        <p className=" fw-4"><FontAwesomeIcon icon={faLightbulb} className="text-brand  mx-2" />   Organization of engagement</p>
                        <p className=" fw-4"><FontAwesomeIcon icon={faPaperPlane} className="text-brand mx-2" /> Organization of Food</p>
                        <p className=" fw-4"><FontAwesomeIcon icon={faRuler} className="text-brand  mx-2" /> Organization of special event</p>
                        <p className=" fw-4"><FontAwesomeIcon icon={faCertificate} className="text-brand mx-2" /> Organization of marriage</p>
                    </div>

                    <div className="col-md-8  d-flex align-items-center px-5 mt-5 mb-4">
                        <div className="col-md-6 ">
                                <img src={event1} alt="" className="w-100 rounded img-shadow " style={{height:'350px'}} />
                            </div>
                            <div className="col-md-6 ">
                                <img src={event2} alt="" className="w-100 mt-5 rounded img-shadow" style={{height:'350px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireUs;