import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {GloabalStyles} from './assets/css/basic';
import {BrowserRouter as Router} from 'react-router-dom';
import Preloader from './components/preloader/preloader.jsx';
const App = lazy(() => import('./App'));



ReactDOM.render(
  <React.StrictMode >
      <GloabalStyles />
      <Suspense fallback={<Preloader />}>
        <Router>
            <App />
        </Router>
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

