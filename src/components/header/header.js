import * as React from 'react'
import {
  Link,
  NavLink
} from 'react-router-dom'

// import Home from '../../pages/home/home.jsx';
// import Products from '../../pages/products/products';
// import Contacts from '../../pages/contacts/contacts.jsx';
// import SingleProduct from '../../pages/products/single-product';

import {Container} from '../../assets/css/basic';
import LogoStyle from '../../assets/styled-components/logoStyle';
import NavStyle from '../../assets/styled-components/navStyle';


// Header
const Header = () => {
  return(
    <Container>
              <div className="menu-wrapper">
               <Link to="/"> <LogoStyle /></Link>
                <NavStyle>
                  <li><NavLink to="/" exact activeClassName="active"><span className="item-text">Home</span></NavLink></li>
                  <li><NavLink to="/products"><span className="item-text">Products</span></NavLink></li>
                  <li><NavLink to="/contacts"><span className="item-text">Contacts</span></NavLink></li>
                </NavStyle>
              </div>
            </Container>
  )
}


export default Header;
