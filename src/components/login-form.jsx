import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { auth } from "../config/firebase";
import SocialLogin from "./social-login";

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = credentials;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: "", password: "" });  
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div>
      <h4 className="text-center mb-4">Welcome Back!</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={credentials.email}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
            required
          />
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
      <SocialLogin />
      <p class="text-center my-2 small">
        <span className="mr-1">Don't have an account?</span>
        <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
