import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

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

import Modal from "react-bootstrap/Modal";

function CompletedTask(props){
  const [show, setShow] = useState(false);

  const [jobPosts, setJobPosts]= useState([]);
  

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  // Filter the job tasks that is applied and completed
useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.userId;
  let jobPostsTemp = JSON.parse(localStorage.getItem('JSRelatedJobs'));
  jobPostsTemp = jobPostsTemp.filter((job) => job.applicants.filter((applicant) => applicant.id === userId))
  jobPostsTemp = jobPostsTemp.filter((job) => (job.status === "completed" && job.jobProvider === userId));
  setJobPosts(jobPostsTemp);
},[]);
  return (
<>
<MDBCard alignment="center">
        <MDBCardHeader>Completed Tasks</MDBCardHeader>
        <MDBCardBody className="px-4 pt-4">
          <MDBRow className="row-cols-1 row-cols-md-2 gx-3">
            {jobPosts.map((job,index)=>(
              <MDBCol className="mb-4" key={index}>
              <MDBCard className="h-100">
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
                        <p className="fw-bold mb-1"> {job.jobTitle}</p>
                        <p className="text-muted mb-0">
                          {job.jobDescription}
                        </p>
                      </div>
                      {console.log(job)}
                    </div>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    background="light"
                    border="0"
                    className="p-2 d-flex justify-content-around"
                  ></MDBCardFooter>
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
                        {job&& (
                          <MDBCard className="h-100">
                            <MDBCardBody>
                              <MDBCardTitle>{job.jobTitle}</MDBCardTitle>
                              <MDBCardSubTitle className="mb-2">
                                Job date: {job.jobDate}
                              </MDBCardSubTitle>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: "50px", height: "50px" }}
                                    className="rounded-circle"
                                  />
                                  <MDBListGroup
                                    style={{ minWidthL: "22rem" }}
                                    light
                                  >
                                    <MDBListGroupItem noBorders>
                                      Job provider: {jobPosts.jobProvider}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders>
                                      Price: {}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders>
                                      Date Posted: {jobPosts.postCreated}
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
                    {/* </MDBCardFooter> */}
                </MDBCard>
              </MDBCol>
              
            ))}
            </MDBRow>
        </MDBCardBody>
      </MDBCard>
  </>
)}
export default CompletedTask;