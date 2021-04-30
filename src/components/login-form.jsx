import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState(null)

  const handleSubmit = e => {
    e.preventDefault();
    setCredentials(null)
  }

  const handleChange = e => {
    const { value, name } = e.target
    setCredentials({...credentials, [name]: value})
  }

  return (
    <div>
      <h4 className="text-center mb-4">Welcome Back!</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
        </FormGroup>
        <FormGroup check className="mb-2">
          <Input type="checkbox" />
          <Label check>Remember Me</Label>
        </FormGroup>
        <Button type="submit" color="dark" block={true}>
          Login
        </Button>
      </Form>
      <p class="text-center my-2 small">
        <Link to="/">Forgot your password?</Link>
      </p>
      <p className="text-center">OR</p>
      <div className="d-flex justify-content-between">
        <Button color="danger" className="w-100 mr-1">
          <i className="fab fa-google fa-fw"></i> Google
        </Button>
        <Button color="primary" className="w-100 ml-1">
          <i className="fab fa-facebook-f fa-fw"></i> Facebook
        </Button>      
      </div>
      <p class="text-center my-2 small">
        <span className="mr-1">Don't have an account?</span>
        <Link to="/">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
