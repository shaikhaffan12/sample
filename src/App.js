import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';


// components imports

import Header from './components/header/Header';
import Card from './containers/card list/Card';
import User from './containers/user form/User';
import College from './containers/college list/College';

function App() {
  return (
   <>
   <div>
      <BrowserRouter>
      <div>
        <Header />
      </div>

        <Routes>
            <Route path="/userlist" element={<Card />} />
            <Route path="/userform" element={<User />} />
            <Route path="/colleges" element={<College />} />

            <Route path={"*"} element={<Navigate replace to="/userlist" />} />
        </Routes>
      </BrowserRouter>
    </div>
   
   </>
  );
}

export default App;
