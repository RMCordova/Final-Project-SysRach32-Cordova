import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/sign-up', formData);
      console.log(response.data);

      if (response.status === 200) {
        alert('Data saved successfully');
        setFormData({
          fName: '',
          lName: '',
          email: '',
          password: ''
        });
      } else {
        alert('Error saving data. Please try again.');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          name="fName"
          className="form-control"
          placeholder="First name"
          value={formData.fName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          name="lName"
          className="form-control"
          placeholder="Last name"
          value={formData.lName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}

export default SignUp;
