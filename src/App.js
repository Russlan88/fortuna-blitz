import React from 'react';
// import './App.scss';
import { Route } from 'react-router-dom';

import { GloabalStyles } from './assets/css/basic';
import Header from './components/header/header';
import Home from './pages/home/home.jsx';
import Products from './pages/products/products.js';
import Contacts from './pages/contacts/contacts.jsx';
import Main from './components/Main';

const routes = [
  {path: '/', name: 'Home', Component: Home, id: 1},
  {path: '/products', name: 'Products', Component: Products, id: 2},
  {path: '/contacts', name: 'Contacts', Component: Contacts, id: 3}
]


function App() {
  return (
    <>
      <Header/>
      <Main /> 
        <GloabalStyles />
         {routes.map(({path, Component, id}) => (
          <Route key={id} path={path} exact>
            <div className="page">
              <Component />
              </div>
          </Route>
        ))} 
    </>
  );
}

export default App;
