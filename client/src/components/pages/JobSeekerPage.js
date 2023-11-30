import axios from 'axios';
import { useState, useEffect} from 'react';
import JSAppliedJobs from "../JSAppliedJobs";
import JSJobCompleted from "../JSJobCompleted";
import FormModal from '../Modal';
import PotentialJobs from '../PotentialJobs';

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ClientPage () {
  const [activeTasks,setActiveTasks] = useState([]);
  const [check, setCheck] = useState(false);
  
// fetch the data from server and store all the jobpost applied by this user id in jobPosts, and localStorage (key: 'JSRelatedJobs')
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const userTemp = JSON.parse(localStorage.getItem('user'));
    const request = {
    action: "Jobseeker jobs",
    userId: userTemp.userId
  }
    axios.post("http://localhost:3500/api/jobs/", request).then((repos) =>{
      const data = repos.data;
      console.log(data);
      localStorage.setItem('JSRelatedJobs', JSON.stringify(data));
      setCheck(true);
    })
  },[]);

  const handleFormSubmit = (formData)=>{
    // Code From Xavier's ActiveJobTasks component. Riley: The selected job to apply goes here please:
    setActiveTasks([...activeTasks,{taskName:formData.taskname}])
    // send put request to server
    const applyingJobs = {
    "action": "applyingJob",
    "clientId": user.userId,
    "jobId": {},// jobId goes here
    "price": {}// requested price goes here
    };
    axios.put("http:localhost:3500/api/jobs/", applyingJobs).then((repos) => {
      if (repos.result === "success") {
        // re-render the page to update the (job applied component)
      } else {
        // Riley: don't know yet. Is it necessary?
      }
    });
  }

  const handleCheckboxChange = (task)=>{
    // Maybe set the job post info here then send in the request above???
  }
  return (
    check?(<MDBContainer className="gx-4 mt-4" >
  
    <MDBRow className="text-center mb-3">
      <MDBCol>
        <h2>Job Seeker Page</h2>
      </MDBCol>
    </MDBRow>
    <MDBRow className="mb-5">
      <MDBCol>
          <PotentialJobs />
          </MDBCol>
      </MDBRow>
      <MDBRow className="mb-4">
        <MDBCol>
       
          <JSAppliedJobs onCheckboxChange={handleCheckboxChange}/>
          </MDBCol>
          </MDBRow>
          <MDBRow>
        <MDBCol>
        
      
          <JSJobCompleted />
          </MDBCol>
          </MDBRow>
        <FormModal onFormSubmit={handleFormSubmit}/> 
        </MDBContainer>
    ):(<></>)
  );
}