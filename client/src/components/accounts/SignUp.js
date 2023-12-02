import { useState, useEffect } from "react";
import { Col, Button, Row, Form, Modal } from "react-bootstrap";
import axios from "axios";
import validator from "validator";

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBRow,
  MDBContainer
 } from "mdb-react-ui-kit";

// For new Client to sign up for the websites
export default function SignUp(props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const role = "client";
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // password Validation??
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 10,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordErrorMessage("Is Strong Password");
    } else {
      setPasswordErrorMessage("Is Not Strong Password");
    }
  };
  // handling submit
  const submitHandling = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && passwordErrorMessage === "Is Strong Password") {
      const newUser = {
        action: "signup",
        firstName: firstName,
        lastName: lastName,
        role: role,
        email: email,
        password: password,
      };
      await axios
        .post("https://vancomer.onrender.com/api/user/", newUser)
        .then((repos) => {
          if (repos.data.result === "success") {
            const user = {
              userId: repos.data.userId,
              firstName: repos.data.firstName,
              lastName: repos.data.lastName,
              role: repos.data.role,
            };
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            // setError(false);
            props.handleSignUpClose();
            window.location.replace("https://thriving-kleicha-aff060.netlify.app/login");
          } else {
            setEmailErrorMessage(true);
          }
        });
    }
  };
  // causing a re-render in the modal
  useEffect(() => {}, [emailErrorMessage]);

  return (
    <>
      <Modal show={props.signUpShow} onHide={props.handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column p-3">
          <MDBContainer className='d-flex flex-column p-2'>

          <MDBRow>
            <p className=" mb-4">Please enter your details to join us!</p>
          </MDBRow>
          <MDBRow>
          <Form className="p-2">
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formFirstName">
                <Form.Label className="text-center">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="johnsmith123@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                {emailErrorMessage
                  ? "We will never share your email with anyone else."
                  : "This email already exist."}
              </Form.Text>
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  validate(e.target.value);
                }}
              />
              {passwordErrorMessage === "" ? null : (
                <>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {passwordErrorMessage}
                  </span>
                  <br />
                </>
              )}
              <Form.Text className="text-muted">
                Your passord should have at least 10 character, with at least 1
                uppercase letter, 1 lowercase letter, 1 numberic character, and
                1 symbolic character.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter your Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            {/* </Form.Group>
            <Button variant="primary" type="submit" onClick={submitHandling}>
              Submit
            </Button>
          </Form> */}
          </Form.Group>
          </Form>
          </MDBRow>
          </MDBContainer>
        </Modal.Body>
        <Modal.Footer>
        
            
            <Button variant="secondary" onClick={props.handleSignUpClose}>
            Cancel
          </Button>

          <Button variant="primary" type="submit" onClick={submitHandling}>
              Submit
            </Button>
        </Modal.Footer>
          
       
      </Modal>
    </>
  );
}
