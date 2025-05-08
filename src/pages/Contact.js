import React from 'react';
import '../styles/Contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-header">CONTACT US</h1>
            <p className="contact-description">
                If you have any business query, please provide your details and we will get in touch with you.
            </p>
            <div className="contact-details">
                <p className="contact-title">You can contact us at:</p>
                <p className="contact-company">SYNNOVA GEARS & TRANSMISSIONS PVT. LTD.</p>
                <p className="contact-address">
                    Survey No. 83/P1, Rajkot Gondal N.H. 27, Nr. Toll Plaza, Village Pipalia, Tal. Gondal, Dist. Rajkot - 360311. Gujarat, India. Mo.: 9099970254.
                </p>
                <p className="contact-links">
                    <a href="http://www.synnova.in" target="_blank" rel="noopener noreferrer">www.synnova.in</a> | 
                    <a href="mailto:info@synnova.in"> info@synnova.in</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;