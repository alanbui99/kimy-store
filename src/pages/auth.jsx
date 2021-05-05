import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import LoginForm from "../components/login-form";
import SignupForm from "../components/signup-form";

const Auth = ({location}) => {
  const {pathname} = location
  const svg = pathname === '/signup' ? 'undraw_authentication_fsn5.svg' : 'undraw_secure_login_pdn4.svg'
  return (
    <Container className="py-5">
      <Card className="border-0 py-5">
        <CardBody className="p-0">
          <Row>
            <Col
              lg="6"
              className="d-none d-lg-flex justify-content-lg-center bg-login-image"
            >
              <img
                src={`icons/${svg}`}
                height={320}
              ></img>
            </Col>
            <Col lg="6">
              {pathname === '/signup' 
                ? <SignupForm/>
                : <LoginForm/>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Auth;
