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
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBtn,
  MDBContainer,
  MDBBadge,

} from "mdb-react-ui-kit";


function AppliedTask(props){

  const [show, setShow] = useState(false);
  const [jobPosts, setJobPosts]= useState([]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  // Filter the applied jobs that is active
useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.userId;
  let jobPostsTemp = JSON.parse(localStorage.getItem('JSRelatedJobs'));
  jobPostsTemp = jobPostsTemp.filter((job) => job.applicants.filter((applicant) => applicant.id === userId))
  jobPostsTemp = jobPostsTemp.filter((job) => job.status !== "completed");
  setJobPosts(jobPostsTemp);
},[]);
    return (
      <>
        <MDBCard alignment="center">
        <MDBCardHeader>Previously Applied Tasks</MDBCardHeader>
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
                  ><MDBBtn
                  onClick={() => handleShow(job)}
                  color="link"
                  rippleColor="primary"
                  className="text-reset m-0"
                >
                  Task Description <MDBIcon fas icon="calendar-day" />
                </MDBBtn></MDBCardFooter>
                </MDBCard>
              </MDBCol>
              ))}
                </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
      </>
)}
export default AppliedTask;