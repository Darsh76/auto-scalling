import React from 'react';
import '../styles/Customers.css'; // Import the CSS file for styling

const Customers = () => {
    return (
        <div className="customers-container">
            <h1 className="customers-header">CUSTOMERS</h1>
            <p className="customers-description">
                Our product solutions are supplied to Indian and International companies for Automotive, Farm Equipment, and several industrial applications.
            </p>
            <h2 className="customers-subheader">Some of our esteemed customers are</h2>
            <div className="customers-grid">
                <div className="customer-card">
                    <img src={require('../logo/car.webp')} alt="Automotive" className="customer-icon" />
                    <p>AUTOMOTIVE</p>
                </div>
                <div className="customer-card">
                    <img src={require('../logo/Agriculture (Farm).png')} alt="Agriculture" className="customer-icon" />
                    <p>AGRICULTURE (FARM)</p>
                </div>
                <div className="customer-card">
                    <img src={require('../logo/truck-thin-128.webp')} alt="Heavy Industries" className="customer-icon" />
                    <p>HEAVY INDUSTRIES </p>
                </div>
                <div className="customer-card">
                    <img src={require('../logo/jcb.webp')} alt="Earth Moving Equipments" className="customer-icon" />
                    <p>EARTH MOVING EQUIPMENTS </p>
                </div>
                
            </div>
 
            {/* <div className="customers-logos">
                <img src={require('../logo/customer-logos.jpg')} alt="Customer Logos" className="logos-image" />
            </div> */}

        </div>
    );
};

export default Customers;