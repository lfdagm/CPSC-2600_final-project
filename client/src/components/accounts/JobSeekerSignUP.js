import { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import validator from 'validator';

// For new Jobseeker to sign up for the websites
export default function SignUp (props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const role = "jobSeeker";
  const [housing, setHousing] = useState(false);
  const [transportation, setTransportation] = useState(false);
  const [education, setEducation] = useState(false);
  const [employment, setEmployment] = useState(false);
  const [socializing, setSocializing] = useState(false);
  const [generalTasks, setGeneralTask] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  // password Validation
  const validate = (value) => { 
        if (validator.isStrongPassword(value, { 
            minLength: 10, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setPasswordErrorMessage('Is Strong Password') 
        } else { 
            setPasswordErrorMessage('Is Not Strong Password') 
        } 
    } 
  // handling submit
  const submitHandling = async (e) => {
    e.preventDefault();
    console.log("PW" + password);
    console.log("Cpw" + confirmPassword);
    let areaOfInterest = [];
    if (housing) {
      areaOfInterest.push("housing");
    }
    if (transportation) {
      areaOfInterest.push("transportation");
    }
    if (employment) {
      areaOfInterest.push("employment");
    }
    if (education) {
      areaOfInterest.push("education");
    }
    if (socializing) {
      areaOfInterest.push("socailizing");
    }
    if (generalTasks) {
      areaOfInterest.push("generalTasks");
    }
    if (password === confirmPassword && (areaOfInterest.length > 0 || areaOfInterest.length < 7)) {
      const newUser = {
        action: "signup",
        firstName: firstName,
        lastName: lastName,
        role: role,
        email: email,
        password: password,
        areaOfInterest: areaOfInterest
      }
    await axios.post('https://vancomer.onrender.com/api/user/', newUser).then ((repos) => {
      if (repos.data.result === "success") {
        const user = {
          userId: repos.data.userId,
          firstName: repos.data.firstName,
          lastName: repos.data.lastName,
          role: repos.data.role,
          areaOfInterest: repos.data.areaOfInterest
        };
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        // setError(false);
        props.handleSignUpClose();
        // redirect()
        window.location.replace("https://thriving-kleicha-aff060.netlify.app0/login");
      } else {
        setEmailErrorMessage(true);
      }
    })
  } else {
    setPasswordErrorMessage("Confirm Password does not match with the password you have input");
  };
};

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
                We will never share your email with anyone else.
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter your Password"
                onChange={(e)=>{
                  setPassword(e.target.value);
                  validate(e.target.value);
                }} />
                {passwordErrorMessage === '' ? null : <>
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{passwordErrorMessage}</span><br /></>} 
                <Form.Text className = "text-muted">
                Your passord should have at least 10 character, with at least 1 uppercase letter, 1 lowercase letter, 1 numberic character, and 1 symbolic character.
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter your Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3 checkboxes" controlId="areaOfInterest">
                <Form.Check 
                class="form-check-input" id="housingOption" 
                onClick={() => {
                  setHousing(true);
                }}
                label={'Housing'}/>
                <Form.Check 
                class="form-check-input" 
                id="transportationOption" 
                onClick={() => {
                  setTransportation(true);
                }}
                label={'Transportation'}/>
                <Form.Check 
                class="form-check-input" 
                id="educationOption" 
                onClick={() => {
                  setEducation(true);
                }}
                label={'Education'}/>
                <Form.Check 
                class="form-check-input" 
                id="employmentOption" 
                onClick={() => {
                  setEmployment(true);
                }}
                label={'Employment'}/>
                <Form.Check 
                class="form-check-input" 
                id="socializingOption" 
                onClick={() => {
                  setSocializing(true);
                }}
                label={'Socializing'}/>
                <Form.Check 
                class="form-check-input" 
                id="generalTasksOption" 
                onClick={() => {
                  setGeneralTask(true);
                }}
                label={'General Tasks'}/>
              </Form.Group>
              <Button variant="primary" type="submit"
              onClick={submitHandling}>
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
    
    
  )
}