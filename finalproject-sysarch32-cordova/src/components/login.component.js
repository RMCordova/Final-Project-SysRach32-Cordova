import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post('/sign-in', {
        email: formData.get('email'),
        password: formData.get('password')
      });

      console.log(response.data);
      // Handle success (e.g., redirect to a dashboard page)
      alert('Logged in successfully!');
      
      // Optionally, you can reset the form fields
      form.reset();
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error (e.g., show an error message)
      alert('Error logging in. Please try again.');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
