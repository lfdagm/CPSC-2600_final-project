import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function CompletedTask(props){
  const [jobPosts, setJobPosts]= useState([]);
  
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
    <Card border="danger" style={{ width: '30rem' }}>
      <Card.Header>Completed Tasks</Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush">
            {jobPosts.map((job,index)=>(
              <ListGroup.Item key={index}>
                  {job.jobTitle}
                  <Form.Check aria-label="notActive" onChange={()=> props.onCheckboxChange(job)}/>
              </ListGroup.Item>
              
            ))}
            </ListGroup>
      </Card.Body>
    </Card>
    <br />
  </>
)}
export default CompletedTask;