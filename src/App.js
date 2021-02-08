import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

import 'reset-css';
import './main.scss';

import Preloader from './components/preloader/preloader.jsx';
import Home from './pages/home/home.jsx';
import Products from './pages/products/products';
import Contacts from './pages/contacts/contacts.jsx';
import SingleProduct from './pages/products/single-product';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <React.Fragment>    {
      loading ? (<Preloader />) :
      (
        <React.Fragment>
              <Router>
                <Header />
                <Switch>
                  <Route exact path='/'><Home /></Route>
                  <Route path='/products'><Products /></Route>
                  <Route path='/contacts'><Contacts /></Route>
                  <Route path='/:iid'><SingleProduct /></Route>
                </Switch>
              </Router>
              <Footer />
          </React.Fragment>
      )
    }
    </React.Fragment>
  )
}

export default App;