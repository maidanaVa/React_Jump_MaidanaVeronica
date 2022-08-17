import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import DetalleUser from './componentes/DetalleUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
         
          <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/detalles/:id' element={<DetalleUser/>}/>
            <Route exact path='/detalles/4' element={<Navigate to="/" />}/>
          </Routes>
    </Router>
  </React.StrictMode>
);
