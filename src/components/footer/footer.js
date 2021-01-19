import React from 'react';
import Logo from '../../assets/images/Logo--negative.png';
import FooterStyle from '../../assets/styled-components/footerStyle';
import Media from '../media/media.jsx';
import './footer.scss';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__innerWrapper">

                    {/* footer logo block */}

                    <div className="footer__top-area">
                        <div className="footer__logo-container">
                        <img src={Logo} className="footer__logo" alt="Fortuna Blitz"/>
                    </div>

                    <div className="footer__layout">

                        {/* mail primary block */}

                        <div className="footer__layout-item">
                            <h5>Want to work with us?</h5>
                            <p>Use this email</p>
                            <a href="mailto:export@fortunablitz.eu" className="footer-link">export@fortunablitz.eu</a>
                        </div>

                        {/* mail secondary block */}

                        <div className="footer__layout-item">
                            <h5>Want to talk with us?</h5>
                            <p>Use this phone number</p>
                            <a href="tel:+3728 244 85 88" style={{color: "#a8a8a8", textDecoration: "none", marginTop: "9px",
    display: "block"}}>+3728 244 85 88</a>
                        </div>

                        {/* call us block */}

                        <div className="footer__layout-item">
                            <h5>Our products</h5>
                            <ul className="products-list">
                                <li>Heinz</li>
                                <li>Spilva</li>
                                <li>Roleski</li>
                                <li>Novoukrainka</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className="footer__bottom-area">

                    {/* address block */}

                    <div className="footer__layout-item">
                        <h5>Fortuna Blitz location</h5>
                        <p>Tallinn</p>
                        <a href="https://goo.gl/maps/MABCKY24FjNg2y3a8" rel="noreferrer" target="_blank" className="footer-link">Harjumaa, Tallinn linn,<br /> Narva mnt 13a, 10151</a>
                    </div>

                    {/* social media block */}

                    <div className="footer__layout-item">
                        <h5>Find us on social media.</h5>
                        <p>Social media</p>
                        <Media />
                     </div>
                </div>
            </div>
            </div>
        </FooterStyle>
    )
}

export default Footer;