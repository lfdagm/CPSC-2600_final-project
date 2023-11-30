import { useState, useEffect } from 'react';
import { Col, Button, Row, Form, Modal } from 'react-bootstrap';
import axios from "axios";

export default function SignUp (props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPw, setConfirmPw] = useState();
  const role = "client";
  const [error, setError] = useState(false);

  var passwordCheckDisplay = "Notice: Password must be at least 10 characters, with at least one of each of capital letter, lowercase letter, number, and sign.";
  // password Validation??

  // handling submit
  const submitHandling = (e) => {
    e.preventDefault();
    if (password === confirmPw) {
      const newUser = {
        action: "signup",
        firstName: firstName,
        lastName: lastName,
        role: role,
        email: email,
        password: password
      }
      axios.post('http://localhost:3500/api/user/', newUser).then ((repos) => {
        if (repos.data.result === "success") {
          const user = {
            action: "signup",
            userId: repos.data.clientId,
            firstName: repos.data.firstName,
            lastName: repos.data.lastName,
            role: repos.data.role
          };
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
          // setError(false);
          props.handleSignUpClose();
          window.location.replace("http://localhost:3000/login");
        } else {
          setError(true);
        }
      })
    }
  };
  // causing a re-render in the modal
  useEffect(() => {
  },[error]);
  return (
    <>
      <Modal show={props.signUpShow} onHide={props.handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>VanComer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-3 mt-4">
            <p className=" mb-5">Please enter your details to join us!</p>
            <Form>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formFirstName"
                >
                  <Form.Label className="text-center">
                    First Name
                  </Form.Label>
                  <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={(e)=>setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formLastName"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Form.Group className = "mb-3" controlId="formBasicEmail">
              <Form.Label> Email address</Form.Label>
              <Form.Control
              type="email"
              placeholder='johnsmith123@example.com' 
              onChange={(e)=>setEmail(e.target.value)}/>
              <Form.Text className = "text-muted">
                {((error)? "We will never share your email with anyone else." : "This email already exist.")}
              </Form.Text>
              <Form.Text className = "text-muted">
                We will never share your email with anyone else.
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter your Password"
                onChange={(e)=>setPassword(e.target.value)} />
                <Form.Text className = "text-muted">
                {passwordCheckDisplay}
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter your Password"
                onChange={(e) => {setConfirmPw(e.target.value)}} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={submitHandling}>
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
    
    
  )
}