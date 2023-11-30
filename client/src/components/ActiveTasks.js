import { useEffect, useState } from "react";
import MarkAsCompleted from "./MarkAsCompleted";

import React from "react";
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
import SelectApplicants from "./SelectApplicants";



// JSON.parse(localStorage.getItem('userData'));

function ActiveTask(props) {
  const [jobPosts, setJobPosts] = useState([]);



  // const [applicants, setApplicants]=useState([]);

  // filter the job posts that is created by the user and is not completed
  // async and await???
  useEffect(() => {
    let jobPostsTemp = JSON.parse(localStorage.getItem("jobPosts"));
    setJobPosts(jobPostsTemp.filter((job) => 
    job.status !== "completed"));
  }, []);
  // //Filter the jobs that do not have applicants
  // useEffect(() => {
  //   let jobPostsTemp = JSON.parse(localStorage.getItem('jobPosts'));
  //  setApplicants(jobPostsTemp.filter((job) => job.status !== "completed" && job.applicants.length===0));
  // },[]);

  return (
    <>
      <MDBCard alignment="center">
        <MDBCardHeader>Active Tasks</MDBCardHeader>
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
                        {console.log(job)}
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
                    {/* Conditionally render the buttons according to unassigned applicants (to select applicant) or in progress status (to mark a task as completed) */}
                    {job.status === "searching" ? <SelectApplicants  job={job}/>
                    :<MarkAsCompleted  job={job}/>     
            }
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
export default ActiveTask;
