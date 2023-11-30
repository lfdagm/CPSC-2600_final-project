import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBContainer,
  MDBCardTitle,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";

function MarkAsCompleted(props) {
  const [show, setShow] = useState(false);
  const [jobId, setJobId] = useState(0);

  //Rerendering is also pending.

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  function markJobAsCompleted() {
    const jobId = props.job._id;
    console.log("Job ID:", props.job._id);
    const request = {
      action: "completeJob",
      jobId: jobId,
    };
    console.log(request);
    axios
      .put('http://localhost:3500/api/jobs', request)
      .then((response) => {
        console.log("Job marked as completed", response.data);
        if (response.data.result === "Success") {
          setShow(false);
          window.location.reload();
          console.log(response.data.temp);
        }
        
      });
  }
  useEffect(() => {},[jobId]);
  function getPrice() {
    const matchingApplicant = props.job.applicants.find(
      (applicant) => applicant.id === props.job.jobProvider
    );
    return matchingApplicant ? matchingApplicant.price : null;
  }

  return (
    <>
      <MDBBtn
        onClick={handleShow}
        color="link"
        rippleColor="primary"
        className="text-reset m-0"
      >
        Mark Task As Completed
        <MDBIcon fas icon="clipboard-list" />
      </MDBBtn>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardTitle>{props.job.jobTitle}</MDBCardTitle>
              <MDBCardSubTitle className="mb-2">
                Job date: {props.job.jobDate}
              </MDBCardSubTitle>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-circle"
                  />
                  {/* <div className="ms-3">
                          <p className="fw-bold mb-1"> {props.job.jobTitle}</p>
                          <p className="fw-normal mb-0">
                            {props.job.jobDescription}
                          </p>
                        </div> */}
                  <MDBListGroup style={{ minWidthL: "22rem" }} light>
                    <MDBListGroupItem noBorders>
                      Job provider: {props.job.jobProvider}
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders>
                      Price: {getPrice()}
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders>
                      Date Posted: {props.job.postCreated}
                    </MDBListGroupItem>
                  </MDBListGroup>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </Modal.Body>

        <Modal.Footer>
          <MDBBtn variant="secondary" onClick={handleClose}>
            Cancel
          </MDBBtn>
          <MDBBtn variant="primary" onClick={markJobAsCompleted}>
            Mark as completed
          </MDBBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MarkAsCompleted;
