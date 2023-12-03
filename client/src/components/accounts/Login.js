import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

export default function SignUp(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const login = "login";
    const userLoginInfo = {
      action: "login",
      email: { email },
      password: { password },
    };
    axios
      .post("https://vancomer.onrender.com/api/user/", userLoginInfo)
      .then((repos) => {
        try {
          if (repos.data[0].role === "null") {
            console.log(repos.data.role);
          } else if (repos.data[0].role === "client") {
            console.log(repos.data[0]);
            const userFound = {
              userId: repos.data[0]._id,
              firstName: repos.data[0].firstName,
              lastName: repos.data[0].lastName,
              role: repos.data[0].role,
            };
            localStorage.setItem("user", JSON.stringify(userFound));

            props.handleLogInClose();
            window.location.replace("https://thriving-kleicha-aff060.netlify.app/login");
          } else {
            console.log(repos.data[0].role);
            const userFound = {
              userId: repos.data[0]._id,
              firstName: repos.data[0].firstName,
              lastName: repos.data[0].lastName,
              role: repos.data[0].role,
              areaOfInterest: repos.data[0].areaOfInterest,
            };
            localStorage.setItem("user", JSON.stringify(userFound));

            props.handleLogInClose();
            window.location.replace("https://thriving-kleicha-aff060.netlify.app/login");
          }
        } catch {
          setError(true);
          setErrorMessage(repos.data.reason);
        }
      });
  };
  return (
    <>
      <Modal show={props.logInShow} onHide={props.handleLogInClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Text className="text-muted">
                {error && <span className='err'>{errorMessage}</span>}
              </Form.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="johnsmith123@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </Form>
          
        </Modal.Body>
      </Modal>
    </>
  );
}
