import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink

} from 'react-router-dom'

import 'reset-css';
import './main.scss';
import {GloabalStyles} from './assets/css/basic';

import Home from './pages/home/home.jsx';
import Products from './pages/products/products';
import Contacts from './pages/contacts/contacts.jsx';
import SingleProduct from './pages/products/single-product';
import Footer from './components/footer/footer';

import {Container} from './assets/css/basic';
import LogoStyle from './assets/styled-components/logoStyle';
import NavStyle from './assets/styled-components/navStyle';

export default function App () {
  return (
    <React.Fragment>
      <Router>
            <GloabalStyles />
            <Container>
              <div className="menu-wrapper">
                <LogoStyle />
                <NavStyle>
                  <li><NavLink to="/" exact activeClassName="active"><span className="item-text">Home</span></NavLink></li>
                  <li><NavLink to="/products"><span className="item-text">Products</span></NavLink></li>
                  <li><NavLink to="/contacts"><span className="item-text">Contacts</span></NavLink></li>
                </NavStyle>
              </div>
            </Container>

      {/* <Header /> */}
      <div className="main" style={{paddingTop: "25px"}}>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/products'><Products /></Route>
            <Route path='/contacts'><Contacts /></Route>
            <Route path='/:iid'><SingleProduct /></Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </React.Fragment>
  )
}
