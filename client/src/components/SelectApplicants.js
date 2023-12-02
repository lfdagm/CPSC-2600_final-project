import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Button from "react-bootstrap/Button";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBContainer,
} from "mdb-react-ui-kit";

function SelectApplicants(props) {
  const [show, setShow] = useState(false);
  const [jobId, setJobId] = useState(-1);
  const [selected, setSelect] = useState(-1);

  const [updatedJob, setUpdatedJob] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    const currentJobId = props.job._id;
    await axios
      .get("http://localhost:3500/api/testing/" + currentJobId)
      .then((repos) => {
        const job = repos.data;
        console.log(job);
        setUpdatedJob(job);
        console.log(updatedJob);
      });
  };

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
  // const handleSubmit = async () => {
  //   console.log(selected + " " + jobId);
    // const request = {
    //   action: "choosing applicant",
    //   jobSeekerId: selected,
    //   jobId: jobId,
    // };
    // console.log("result: " + request.action);
    // await axios
    //   .put("http://localhost:3500/api/jobs/", request)
    //   .then((repos) => {
    //     console.log(repos.data.result);
    //   });
    // window.location.reload();
  // };

  const handleSubmit = async (selected, jobId) => {
    // console.log(selected + " " + jobId);
    const request = {
      action: "choosing applicant",
      jobSeekerId: selected,
      jobId: jobId,
    };
    console.log("result: " + request.action);
    await axios
      .put("http://localhost:3500/api/jobs/", request)
      .then((repos) => {
        console.log(repos.data.result);
      });
    window.location.reload();
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant="light"
        className="text-reset m-0"
      >
        Select Applicant 
        <MDBIcon fas icon="user-check" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Applicant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ms-3 mb-4">
            <p className="fw-bold mb-1"> {props.job.jobTitle}</p>
            <p className="text-muted mb-0">{props.job.jobDescription}</p>
          </div>

          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-2 gx-3">
              {show ? (
                updatedJob.map((applicant) => (
                  <MDBCol className="mb-4" key={applicant.userId}>
                    {/* <MDBCard
                      className={
                        selected == applicant.id ? "h-100 danger" : "h-100"
                      } */}

                    
                      <MDBCard>
                      <Button variant="light"
                      onClick={() => {
                        setSelect(applicant.userId);
                        setJobId(applicant.jobId);
                        handleSubmit(applicant.userId,applicant.jobId);
                      }}
                    >
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
                                <p className="fw-bold mb-1">
                                  {" "}
                                  Applicant ID: {applicant.userId}
                                </p>
                                <p className="text-muted mb-0">
                                  Price: $ {applicant.price}
                                </p>

                                {/* <Button
                                
                                variant="primary"
                                
                                // onClick={() => {
                                //   setSelect(applicant.userId);
                                //   setJobId(applicant.jobId);
                                // }}
                              >
                                Select
                              </Button> */}
                              </div>
                            </div>
                          </div>
                        </MDBCardBody>
                        </Button>
                      </MDBCard>
                   
                  </MDBCol>
                ))
              ) : (
                <></>
              )}
            </MDBRow>
          </MDBContainer>
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SelectApplicants;
// {
  /* {props.job.applicants.map((applicant) => (
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
              ))} */
// }
