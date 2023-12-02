import { Image, Modal } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdb-react-ui-kit";

import{useState} from "react";

import Button from "react-bootstrap/Button";

export default function SignUp(props) {
  const newComerImg = require("./../../img/newComer320.jpg");
  const communityImg = require("./../../img/community320.jpg");




  return (
    <>
      <Modal show={props.roleShow} onHide={props.handleRoleShowClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select Your Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBRow>
            <MDBCol>
              <MDBCard alignment="center">
                <Button variant="light" onClick={props.handleJobSeekerRoleSelection}>
                  <MDBCardImage
                    src={communityImg}
                    position="top"
                    alt="community"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Job Seeker</MDBCardTitle>
                  </MDBCardBody>
                </Button>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard alignment="center">
                <Button variant="light" onClick={props.handleRoleSelection}>
                  <MDBCardImage
                    src={newComerImg}
                    position="top"
                    alt="Newcomer"
                  />

                  <MDBCardBody>
                    <MDBCardTitle>Newcomer</MDBCardTitle>
                  </MDBCardBody>
                </Button>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          {/* <div className="mb-3 mt-4 .modal-body">
          <Image
          className='img-responsive'
          src = {newComerImg}
          alt='newComer'
          onClick={props.handleRoleSelection} 
          fluid rounded
          style={{width:'50%'}}
          />
          <Image
          className='img-responsive'
          src={communityImg} alt='new Comer'
          onClick={props.handleJobSeekerRoleSelection} 
          fluid rounded
          style={{width:'50%'}}
          />
        </div> */}
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="primary" onClick={props.handleRoleShowClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
