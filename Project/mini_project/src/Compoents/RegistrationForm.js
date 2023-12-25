// *********************************************************************************************main

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/login_page_css.css"
localStorage.setItem("page", "register_page");
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Mobile_Number: '',
    Email: '',
    Password: '',
  });

  const [errors, setErrors] = useState({
    Name: '',
    Mobile_Number: '',
    Email: '',
    Password: '',
  });

  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset errors when the user types in a field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name, mobile number, email, and password...
    const nameError = !formData.Name.trim() ? 'Name is required' : '';
    const mobileError = !/^\d{10}$/.test(formData.Mobile_Number) ? 'Invalid mobile number' : '';
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email) ? 'Invalid email address' : '';
    const passwordError = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.Password) ?
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' : '';

    // Set errors
    setErrors({
      Name: nameError,
      Mobile_Number: mobileError,
      Email: emailError,
      Password: passwordError,
    });

    // Check if there are validation errors
    if (nameError || mobileError || emailError || passwordError) {
      // If there are errors, do not proceed with the submission
      return;
    }

    // If validation is successful, proceed with the fetch request
    const reqData = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.Name,
        mobile: formData.Mobile_Number,
        email: formData.Email,
        password: formData.Password,
      }),
    };

    fetch('http://localhost:9000/tenant', reqData)
      .then((res) => {
        alert("Registered SuccessFully...!")
        { navigate('/LandingPage') }
        res.text()
      })
      .then((str) => setMsg(str));
  };

  return (
    <div id='login_main_div'>
      <div id='login_sub_div'>
        <form onSubmit={handleSubmit}>
          <div style={{paddingBottom:'15px'}}>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder='Name'
              class="input_feilds"
              
            />
            <span style={{ color: 'red' }}>{errors.Name}</span>
          </div>

          <div  style={{paddingBottom:'15px'}}>
            {/* <label htmlFor="mobile">Mobile Number:</label> */}
            <input
              type="text"
              id="mobile"
              name="Mobile_Number"
              value={formData.Mobile_Number}
              onChange={handleChange}
              placeholder='Mobile Number'
              class="input_feilds"
            />
            <span style={{ color: 'red' }}>{errors.Mobile_Number}</span>
          </div>

          <div  style={{paddingBottom:'15px'}}>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="text"
              id="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder='Email'
              class="input_feilds"
            />
            <span style={{ color: 'red' }}>{errors.Email}</span>
          </div>

          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="password"
              id="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder='Password'
              class="input_feilds"
            />
            <span style={{ color: 'red' }}>{errors.Password}</span>
          </div>

          <div id='btndiv'>
            <button type="submit" class='btnbtn'>Register</button>

            {/* Display success or error message */}
            {msg && <div>{msg}</div>}

            <button id="btn" class='btnbtn' onClick={() => {
              navigate('/login_page');
            }}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
