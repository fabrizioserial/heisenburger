import React from 'react'
import behance from '../../svg/behance.svg'
import linkedin from '../../svg/linkedin.svg'
import './FooterComponent.css'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBehance,faLinkedinIn} from  '@fortawesome/free-brands-svg-icons'


export const FooterComponent = () =>{
    return(
        <React.Fragment>
            <div className="footer-container">
                <div className="footer-icon">
                    <button className="footer-circle">
                        <FontAwesomeIcon icon={faBehance}/>
                    </button>
                    
                    <button className="footer-circle">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </button>
                </div>
                <p className="copyright">Serial Fabrizio - SpaceTech @2021</p>
            </div>
        </React.Fragment>

    )
}