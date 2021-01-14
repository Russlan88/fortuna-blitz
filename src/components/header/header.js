import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from 'react-router-dom'

import Home from '../../pages/home/home.jsx';
import Products from '../../pages/products/products';
import Contacts from '../../pages/contacts/contacts.jsx';
import SingleProduct from '../../pages/products/single-product';

import {Container} from '../../assets/css/basic';
import LogoStyle from '../../assets/styled-components/logoStyle';
import NavStyle from '../../assets/styled-components/navStyle';


// Header
const Header = () => {
  return (
      <Router>
            <Container className="flex">
              <LogoStyle />
              <NavStyle>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
              </NavStyle>
            </Container>

        <div className="main">
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/products'><Products /></Route>
            <Route path='/contacts'><Contacts /></Route>
            <Route path='/:iid'><SingleProduct /></Route>
          </Switch>
        </div>
      </Router>
  );
}


export default Header;
