import axios from "axios";
import { useState, useEffect } from "react";
import ActiveTask from "../ActiveTasks";
import Historic from "../Historic";
import FormModal from "../Modal";
import { div } from "prelude-ls";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ClientPage() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [historicTasks, setHistoricTasks] = useState([]);
  const [check, setCheck] = useState(false);
  // fetch the data from server and store all the jobpost related to this user id in jobPosts, and localStorage (key: 'jobPosts')
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.userId;
    axios.get("http://localhost:3500/api/jobs/" + userId).then((repos) => {
      let jobPosts = repos.data;
      localStorage.setItem("jobPosts", JSON.stringify(jobPosts));
      setCheck(true);
    });
  }, []);

  const handleFormSubmit = (formData) => {
    // setActiveTasks([...activeTasks,formData])
    setActiveTasks([...activeTasks, { taskName: formData.taskname }]);
  };

  const handleCheckboxChange = (task) => {
    if (selectedTasks.some((t) => t.taskName === task.taskName)) {
      setSelectedTasks(
        selectedTasks.filter((t) => t.taskName !== task.taskName)
      );
      setSelectedTasks([...selectedTasks, task]);
    } else {
      setHistoricTasks([...historicTasks, task]);
    }
  };
  return check ? (
    <MDBContainer className="gx-4 mt-4" >
  
      <MDBRow className="text-center mb-3">
        <MDBCol>
          <h2>Client Page</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-5">
        <MDBCol>
          <ActiveTask onCheckboxChange={handleCheckboxChange} />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-4">
        <MDBCol>
          <Historic  />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <FormModal onFormSubmit={handleFormSubmit} />
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  ) : (
    <></>
  );
}
