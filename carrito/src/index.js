import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home.js'
import Carrito from './pages/Carrito.js'
import Details from './pages/Details.js'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
        <App/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/details/:name' element={<Details/>}/>
            <Route exact path='/carrito' element={<Carrito/>}/>
         </Routes>
    </Router>

  </React.StrictMode>
);


