import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';


function AppliedTask(props){
  const [jobPosts, setJobPosts]= useState([]);

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
        <Card border="primary" style={{ width: '30rem' }}>
          <Card.Header>Applied Tasks</Card.Header>
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
export default AppliedTask;