import axios from "axios";
import { useState, useEffect } from "react";
import JSAppliedJobs from "../JSAppliedJobs";
import JSJobCompleted from "../JSJobCompleted";
// import FormModal from '../Modal';
import PotentialJobs from "../PotentialJobs";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

// get the user from localStorage
// fetch the jobs that the job seeker had applied
// storing the data into localStorage
export default function JobSeekerPage() {
  // const [activeTasks,setActiveTasks] = useState([]);
  const [check, setCheck] = useState(false);

  // fetch the data from server and store all the jobpost applied by this user id in jobPosts, and localStorage (key: 'JSRelatedJobs')
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const userTemp = JSON.parse(localStorage.getItem("user"));
    const request = {
      action: "Jobseeker jobs",
      userId: userTemp.userId,
    };
    axios.post("http://localhost:3500/api/jobs/", request).then((repos) => {
      const data = repos.data;
      localStorage.setItem("JSRelatedJobs", JSON.stringify(data));
      setCheck(true);
    });
  }, []);

  // const handleFormSubmit = (formData)=>{
  //   setActiveTasks([...activeTasks,{taskName:formData.taskname}])
  //   // send put request to server
  //   const applyingJobs = {
  //   "action": "applyingJob",
  //   "clientId": user.userId,
  //   "jobId": {},// jobId goes here
  //   "price": {}// requested price goes here
  //   };
  //   axios.put("http:localhost:3500/api/jobs/", applyingJobs).then((repos) => {
  //     if (repos.result === "success") {
  //       // re-render the page to update the (job applied component)
  //     } else {
  //       // Riley: don't know yet. Is it necessary?
  //     }
  //   });
  // }

  const handleCheckboxChange = (task) => {
    // Maybe set the job post info here then send in the request above???
  };
  return check ? (
    <MDBContainer className="gx-4 my-4 w-75">
      <MDBRow>
        <MDBCol className="mb-4">
          <PotentialJobs />
        </MDBCol>
      </MDBRow>
      <MDBRow >
        <MDBCol className="mb-4">
          <JSAppliedJobs onCheckboxChange={handleCheckboxChange} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="mb-4">
          <JSJobCompleted />
        </MDBCol>
      </MDBRow>
  
    </MDBContainer>
  ) : (
    <></>
  );
}
