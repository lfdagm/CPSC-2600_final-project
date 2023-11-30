// import { useState, useEffect } from "react";
// import FormModal from "./Modal";
// import ActiveTask from "./ActiveTasks";
// import Historic from "./Historic";
// import PotentialJobs from "./pages/PotentialJobs";
// import axios from 'axios';


// function ClientPage(props) {
//   const [activeTasks,setActiveTasks] = useState([]);
//   const[selectedTasks,setSelectedTasks] = useState([]);
//   const [ historicTasks,setHistoricTasks] = useState([]);
//   const [jobPosts, setJobPosts] = useState();
//   const user = JSON.parse(localStorage.getItem('user'));

//   return(
//     <>
//       {user.role === "client"? <ClientPage />:<PotentialJobs/>};
//     </>

// )
// }

// export default ClientPage;