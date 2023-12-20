import logo from './logo.svg';
import './App.css';
import LandingPage from './Compoents/LandingPage';
import Login from './Compoents/Login';
import Register from './Compoents/Register';
import { Link, Routes, Route, Form } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App" >
      <div className="navbar navbar-default">
        <Link to="/login_page">Login</Link>
        <Link to="/register_page">Register</Link>
      </div>
      <Routes>
        <Route path="/login_page" element={<Login />} />
        <Route path="/register_page" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
