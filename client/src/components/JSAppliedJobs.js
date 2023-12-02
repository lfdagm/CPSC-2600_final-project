import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCardTitle,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";

function AppliedTask(props) {
  const [show, setShow] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);

  const [jobInfo, setJobInfo] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (job) => {
    setJobInfo(job);
    setShow(true);
  };

  // Filter the applied jobs that is active
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.userId;
    let jobPostsTemp = JSON.parse(localStorage.getItem("JSRelatedJobs"));
    jobPostsTemp = jobPostsTemp.filter((job) =>
      job.applicants.filter((applicant) => applicant.id === userId)
    );
    jobPostsTemp = jobPostsTemp.filter((job) => job.status !== "completed");
    setJobPosts(jobPostsTemp);
  }, []);

  useEffect(() => {}, [jobInfo]);
  function getPrice() {
    const matchingApplicant = jobInfo.applicants.find(
      (applicant) => applicant.id === jobInfo.jobProvider
    );

    return matchingApplicant ? matchingApplicant.price : null;
  }

  return (
    <>
      <MDBCard alignment="center">
        <MDBCardHeader>Previously Applied Tasks</MDBCardHeader>
        <MDBCardBody className="px-4 pt-4">
          <MDBRow className="row-cols-1 row-cols-md-2 gx-3">
            {jobPosts.map((job, index) => (
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
                      </div>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    background="light"
                    border="0"
                    className="p-2 d-flex justify-content-around"
                  >
                    <Button
                      onClick={() => handleShow(job)}
                      variant="light"
                      className="text-reset m-0"
                    >
                      Task Details <MDBIcon fas icon="calendar-day" />
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Task Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {jobInfo && (
                          <MDBCard className="h-100">
                            <MDBCardBody>
                              <MDBCardTitle>{jobInfo.jobTitle}</MDBCardTitle>
                              <MDBCardSubTitle className="mb-2">
                                Job Date: {jobInfo.jobDate}
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
                                    style={{ lineHeight: "0.7" }}
                                    light
                                  >
                                    <MDBListGroupItem noBorders>
                                      Client ID: {jobInfo.clientId}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders>
                                      Price: ${getPrice(jobInfo)}
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
                        <Button variant="primary" onClick={handleClose}>
                          Close
                        </Button>
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
export default AppliedTask;
