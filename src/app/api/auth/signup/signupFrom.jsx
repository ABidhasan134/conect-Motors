'use Client';
import React from "react";

const SignupFrom = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const newUser = { email, password };
    
    console.log(newUser); // This will now log the new user correctly
    
    try {
      const response = await fetch('http://localhost:3000/api/auth/new-user', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' }
      });
      
      const result = await response.json();
        console.log('User created:', result);
    } catch (error) {
      console.error('Error during user creation:', error);
    }
  };

  return (
    <div>
      <form className="card-body" onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignupFrom;
