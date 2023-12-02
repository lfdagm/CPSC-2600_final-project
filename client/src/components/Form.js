import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";

// Clients will use this form to submit the job post they wish to create in the website
// 
function UserForm(){
  const [user, setUser] = useState();
  const [taskName, setTaskName] = useState();
  const [taskDescription, setTaskDescription] = useState();
  const [jobDate, setDate] = useState();
  const [address, setAddress] = useState();
  const [category, setCategory] = useState("housing");
  const [result, setResult] = useState();

  // get the user details for creating job post
  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    setUser(userLocal);
  },[]);

    // create an request object passing in req.body with information needed.
  const submitHandler = (async (event) => {
    event.preventDefault();
    // get today's date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let currentDate = "" + year + "-" + month + "-" + day;
    const request = {
      action: "createJobPost",
      clientId: user.userId,
      category: category,
      jobTitle: taskName,
      jobDescription: taskDescription,
      jobDate: jobDate,
      postCreated: currentDate,
      address: address
    };
    await axios.post('http://localhost:3500/api/jobs/', request).then((repos) => {
      window.location.reload();
    })
  });

    return(
      <form className='form' onSubmit={submitHandler}>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Task Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter task name"
            name= "taskName"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe the task"
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" onChange={(e) => setDate(e.target.value)}/>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" onChange={(e)=>{setAddress(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCategories" className='mb-4'>
            <Form.Label>Categories</Form.Label>
            <Form.Select defaultValue="housing" onChange={(e) => {
              setCategory(e.target.value);
              console.log(e.target.value);
              }}>
              <option value={"housing"}>Housing</option>
              <option value={"transportation"}>Transportation</option>
              <option value={"education"}>Education</option>
              <option value={"employment"}>Employment</option>
              <option value={"socializing"}>Socializing</option>
              <option value={"generalTasks"}>General Task</option>
            </Form.Select>
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    );
}


export default UserForm;