import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { auth, createUserProfileDoc } from "../config/firebase";
import SocialLogin from "./social-login";

const SignupForm = (props) => {
  const [credentials, setCredentials] = useState({displayName: '', email: '', password: ''});

  const handleSubmit = async e => {
    e.preventDefault();
    const {displayName, email, password} = credentials;
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, {displayName});
      setCredentials({displayName: '', email: '', password: ''});
      await auth.signInWithEmailAndPassword(email, password);
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
      <h4 className="text-center mb-4">Welcome to Kimystore!</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="displayName"
            placeholder="Name"
            onChange={handleChange}
            value={credentials.displayName}
            required
          />
        </FormGroup>
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
          Sign up
        </Button>
      </Form>
      <p className="text-center my-2">OR</p>
      <SocialLogin />
      <p class="text-center my-2 small">
        <span className="mr-1">Already have an account?</span>
        <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignupForm;
