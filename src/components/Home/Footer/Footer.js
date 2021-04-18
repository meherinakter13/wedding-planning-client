import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';



const Footer = () => {
        const ourService = [
            {name: "Engagement" , link: "/engagement"},
            {name: "Proposal" , link: "/proposal"},
            {name: "Marriage" , link: "/marriage"},
            {name: "Wedding" , link: "/wedding"},
        ]
        const ourAddress = [
            {name: "New York - 101010 Hudson" , link: "//google.com/map"},
            {name: "Yards" , link: "//google.com/map"},
           
        ]

        const services = [
            {name: "Engagement" , link: "/engagement"},
            {name: "Proposal" , link: "/proposal"},
            {name: "Marriage" , link: "/marriage"},
            {name: "Wedding" , link: "/wedding"},
        ]
    return (
        <footer className="footer-area clear-both">
            <div className=" text-center pt-5"style={{backgroundImage: "linear-gradient(90deg, #86ebe7, rgb(156, 48, 84))"}}>
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"ourService"} menuItems={ourService}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline text-white ">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button style={{backgroundImage: "linear-gradient(90deg, #86ebe7, #1CC7C1)"}}class="btn text-white">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;