import React from 'react';
import Logo from '../../assets/images/Logo--negative.png';
import FooterStyle from '../../assets/styled-components/footerStyle';
import './footer.scss';

const Footer = () => {
    return (
        <FooterStyle>
        <div className="container">
        <div className="footer__innerWrapper">
        <div className="footer__top-area">
            <div className="footer__logo-container">
               <img src={Logo} className="footer__logo" alt="Fortuna Blitz"/>
            </div>  
            <div className="footer__layout">
                    <div className="footer__layout-item">
                        <h5>Want to work with us?</h5>
                        <p>Use this email</p>
                        <a href="mailto:export@fortunablitz.eu">export@fortunablitz.eu</a>
                    </div>
                    <div className="footer__layout-item">
                        <h5>Want to talk with us?</h5>
                        <p>General inquiries</p>
                        <a href="mailto:export@fortunablitz.eu">export@fortunablitz.eu</a>
                    </div>
                    <div className="footer__layout-item">
                        <h5>Find us on social media.</h5>
                        <p>Social media</p>
                    </div>
            </div>
        </div>
        <div className="footer__bottom-area">
            <div className="footer__layout-item">
                        <h5>Fortuna Blitz location</h5>
                        <p>Tallinn</p>
                        <a href="https://goo.gl/maps/MABCKY24FjNg2y3a8" rel="noreferrer" target="_blank">Harjumaa, Tallinn linn, Narva mnt 13a, 10151</a>
                    </div>
        </div>
        </div>
        </div>
        </FooterStyle>
    )
}

export default Footer;