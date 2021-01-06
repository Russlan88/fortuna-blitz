import React from 'react';

import { GloabalStyles } from './assets/css/basic';


import Home from './pages/home/home.jsx';
// import Contacts from './components/contact-us/contact-us.jsx';

function App() {
  return (
    <div className="App">
      <GloabalStyles />
      <Home />
      {/* <Contacts /> */}
    </div>
  );
}

export default App;
