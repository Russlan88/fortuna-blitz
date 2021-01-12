import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from 'react-router-dom'

import Home from './pages/home/home.jsx';
import Products from './pages/products/products';
import Contacts from './pages/contacts/contacts.jsx';
import SingleProduct from './pages/products/single-product';


export default function App () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/products'><Products /></Route>
          <Route path='/contacts'><Contacts /></Route>
          <Route path='/:iid'><SingleProduct /></Route>
        </Switch>
      </div>
    </Router>
  )
}
