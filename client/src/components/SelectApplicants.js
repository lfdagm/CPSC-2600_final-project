import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormCheck } from 'react-bootstrap';
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
// import { FormCheck } from "react-bootstrap";

function SelectApplicants(props) {
  const [show, setShow] = useState(false);
  const [jobId, setJobId] = useState(-1);
  const [selected, setSelect] = useState(-1);

  
  const [updatedJob, setUpdatedJob] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = (async () => {
    setShow(true);
    const currentJobId = props.job._id;
    await axios.get("http://localhost:3500/api/testing/" + currentJobId)
      .then((repos) => {
      const job = repos.data;
      console.log(job);
      setUpdatedJob(job);
      console.log(updatedJob);
    })
  });

  // const handleSubmit = (applicantId) => {
  //   console.log(applicantId);
  // };
  // useEffect(() => {
  //   const activeJobs = async () =>{
  //     const currentJobId = props.job._id;
  //     let result = []
  //   };
  //   activeJobs();
  // }, [])
  const handleSubmit = (async () => {
    // console.log(selected + " " + jobId);
    const request = {
      action: "choosing applicant",
      jobSeekerId: selected,
      jobId: jobId
    };
    console.log("result: " + request.action)
    await axios.put('http://localhost:3500/api/jobs/', request).then((repos) => {
      console.log(repos.data.result);
    })
    window.location.reload();
  });

  return (
    <>
      <MDBBtn
        onClick={handleShow}
        color="link"
        rippleColor="primary"
        className="text-reset m-0"
      >
        Select Applicant
        <MDBIcon fas icon="user-check" />
      </MDBBtn>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Applicant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>Task: {props.job.jobTitle}</p>
        <p>{props.job.jobDescription}</p> */}

          <MDBListGroup style={{ minWidthL: "22rem" }} light>
            <MDBListGroupItem noBorders> {props.job.jobTitle}</MDBListGroupItem>
            <MDBListGroupItem noBorders>
              {" "}
              {props.job.jobDescription}
            </MDBListGroupItem>
          </MDBListGroup>

          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-2 gx-3">
              {show?updatedJob.map((applicant) => (
                <MDBCol className="mb-4" key={applicant.id}>
                  <MDBCard className={(selected == applicant.id? "h-100 danger": "h-100")} >
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1"> {applicant.id}</p>
                            <p className="text-muted mb-0">{applicant.price}</p>
                            <MDBBtn
                            value={applicant.id}
                            color="link"
                            rippleColor="primary"
                            className="text-reset m-0"
                            onClick={()=>{
                              setSelect(applicant.userId);
                              setJobId(applicant.jobId);
                            }}>
                              Select
                            </MDBBtn>
                          </div>
                        </div>
                      </div>
                    </MDBCardBody>
                    <MDBCardFooter
                      background="light"
                      border="0"
                      className="p-2 d-flex justify-content-around"
                    ></MDBCardFooter>
                  </MDBCard>
                </MDBCol>
              )): <></>}
            </MDBRow>
          </MDBContainer>
        </Modal.Body>
        <Modal.Footer>
          <MDBBtn
            color="link"
            rippleColor="primary"
            className="text-reset m-0"
            onClick={handleSubmit}
            >Submit</MDBBtn>
          <MDBBtn variant="secondary" onClick={handleClose}>
            Close
          </MDBBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SelectApplicants;
{/* {props.job.applicants.map((applicant) => (
                <MDBCol className="mb-4" key={applicant.id}>
                  <MDBCard className={(selected == applicant.id? "h-100 danger": "h-100")} >
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1"> {applicant.id}</p>
                            <p className="text-muted mb-0">{applicant.price}</p>
                            <MDBBtn
                            value={applicant.id}
                            color="link"
                            rippleColor="primary"
                            className="text-reset m-0"
                            onClick={()=>{
                              setSelect(applicant.id);
                              setJobId(props.job.jobId)
                            }}
                            >Select</MDBBtn>
                          </div>
                        </div>
                      </div>
                    </MDBCardBody>
                    <MDBCardFooter
                      background="light"
                      border="0"
                      className="p-2 d-flex justify-content-around"
                    ></MDBCardFooter>
                  </MDBCard>
                </MDBCol>
              ))} */}