import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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

function Historic(props) {
  const [jobPosts, setJobPosts] = useState([]);

  const [jobInfo, setJobInfo] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (job) => {
    setJobInfo(job);
    setShow(true);
  };

  // filter the post that is created by user and is completed
  useEffect(() => {
    let jobPostsTemp = JSON.parse(localStorage.getItem("jobPosts")).filter(
      (job) => job.status === "completed"
    );

    setJobPosts(jobPostsTemp);
  }, []);
  console.log(jobPosts);

  function getPrice(job) {
    const matchingApplicant = job.applicants.find(
      (applicant) => applicant.id === job.jobProvider
    );
    return matchingApplicant ? matchingApplicant.price : null;
  }

  return (
    <>
      <MDBCard alignment="center">
        <MDBCardHeader>Completed Tasks</MDBCardHeader>
        <MDBCardBody className="px-4 pt-4">
          <MDBRow className="row-cols-1 row-cols-md-2 gx-3">
            {jobPosts.map((job, index) => (
              <MDBCol className="mb-4" key={index}>
                <MDBCard className="h-100">
                  {" "}
                  <MDBCardBody>
                    {" "}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1"> {job.jobTitle}</p>
                          <p className="text-muted mb-0">
                            {job.jobDescription}
                          </p>
                        </div>
                      </div>
                      {/* <MDBBadge pill color='success' light>
                Active
              </MDBBadge> */}
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    background="light"
                    border="0"
                    className="p-2 d-flex justify-content-around"
                  >
                    <MDBBtn
                      onClick={() => handleShow(job)}
                      color="link"
                      rippleColor="primary"
                      className="text-reset m-0"
                    >
                      Task Details <MDBIcon fas icon="calendar-day" />
                    </MDBBtn>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Task description</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {jobInfo && (
                          <MDBCard className="h-100">
                            <MDBCardBody>
                              <MDBCardTitle>{jobInfo.jobTitle}</MDBCardTitle>
                              <MDBCardSubTitle className="mb-2">
                                Job date: {jobInfo.jobDate}
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
                                  <MDBListGroup
                                    style={{ minWidthL: "22rem" }}
                                    light
                                  >
                                    <MDBListGroupItem noBorders>
                                      Job provider: {jobInfo.jobProvider}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders>
                                      Price: {getPrice(jobInfo)}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders>
                                      Date Posted: {jobInfo.postCreated}
                                    </MDBListGroupItem>
                                  </MDBListGroup>
                                </div>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                        )}
                      </Modal.Body>

                      <Modal.Footer>
                        <MDBBtn variant="secondary" onClick={handleClose}>
                          Close
                        </MDBBtn>
                      </Modal.Footer>
                    </Modal>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
export default Historic;
