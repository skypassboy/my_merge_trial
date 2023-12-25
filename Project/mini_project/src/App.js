// import logo from './logo.svg';
// import './App.css';
// import LandingPage from './Compoents/LandingPage';
// import Login from './Compoents/Login';
// import Register from './Compoents/RegistrationForm';
// import { Link, Routes, Route, Form } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// function App() {
//   return (
//     <div className="App" >
//       {/* <div className="navbar navbar-default">
//         <Link to="/login_page">Login</Link>
//         <Link to="/register_page">Register</Link>
//       </div>
//       <Routes>
//         <Route path="/login_page" element={<Login />} />
//         <Route path="/register_page" element={<Register />} />
//       </Routes> */}

//       <div id="main">TTTTTTTTTTTTTTTTTT</div>
//       <button onClick={() => {
//         console.log(1);
//         return <Register/>
//       }}>Register</button>
//     </div>
//   );
// }

// export default App;
// **************************************************************************************************
// import React, { useState } from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import LandingPage from './Compoents/LandingPage';
// import Login from './Compoents/Login';
// import Register from './Compoents/RegistrationForm';

// function App() {
//   // State to track login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div className="App">
//       <div className="navbar navbar-default">
//         {/* Show login link only if the user is not logged in */}
//         {!isLoggedIn && <Link to="/login_page">Login</Link>}
//         <Link to="/register_page">Register</Link>
//       </div>

//       <Routes>
//         <Route path="/login_page" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/register_page" element={<Register />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// ********************************************************************************main
import React, { useState, useEffect } from 'react';
import LandingPage from './Compoents/LandingPage';
// import Login from './Compoents/Login';
import RegistrationForm from './Compoents/RegistrationForm';
import ShowProperty from './Compoents/ShowProperty';
import { Login } from './Compoents/Login'
import { Link, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useNavigate, useLocation } from 'react-router-dom';


function App() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const rl = localStorage.getItem("rlogin");
  console.log(location.pathname + "")

  if (location.pathname == "/") {
    location.pathname = "/LandingPage"
  }

  localStorage.setItem("page", location.pathname);


  const getpage = localStorage.getItem("page");


  useEffect(() => {
    // Update the document title using the browser API

    navigate(getpage);
  }, []);
  return (
    <div className="App">



      <Routes>
        <Route path='/ShowProperty' element={<ShowProperty />} />
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path="/login_page" element={<Login />} />
        <Route path="/register_page" element={<RegistrationForm />} />
      </Routes>


    </div>
  );
}

export default App;
// ******************************************************************************
