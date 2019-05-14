import React from 'react';
import './Footer.css'

const Footer = (props) => {
    return(
        <div className="footer">
            <p>Footer je funkcionalana komponenta {props.counter}</p>
        </div>
    ); 
}
export default Footer;