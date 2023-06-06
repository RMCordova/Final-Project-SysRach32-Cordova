import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/sign-up', formData);

      console.log(response.data);
      // Handle success (e.g., show a success message)
      alert('User registered successfully!');

      // Optionally, you can reset the form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error (e.g., show an error message)
      alert('Error registering user. Please try again.');
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last name"
          value={formData.lastName}
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
};

export default SignUp;
