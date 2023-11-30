// import { useState } from "react";
// import FormModal from "./Modal";
// import ActiveTask from "./ActiveTasks";
// import Historic from "./Historic";
// import NavBar from "./NavBar";
// import Carousel from "./Carousel";


// function ClientPage(props) {
    
//   const [activeTasks,setActiveTasks] = useState([]);
//   const[selectedTasks,setSelectedTasks] = useState([]);
//   const [ historicTasks,setHistoricTasks] = useState([]);

//   const handleFormSubmit = (formData)=>{
//     setActiveTasks([...activeTasks,formData])
//   }

//   const handleCheckboxChange = (task)=>{
//     if(selectedTasks.some((t)=> t.taskName === task.taskName)){
      
//       setSelectedTasks(selectedTasks.filter((t)=> t.taskName !== task.taskName));
//       setSelectedTasks([...selectedTasks,task])
     
//      ;
//     }
//     else{
//       setHistoricTasks([...historicTasks,task])
//     }
//   }
//   return (
//     <div className="card">
//       <h2 className="center">Client Page</h2>
//       <div className="actions">
      
//     <>
//       <NavBar/>
//       <Carousel />
//       <ActiveTask tasks={activeTasks} onCheckboxChange={handleCheckboxChange}/>
//       <Historic selectedTasks={historicTasks}/>
//     </>

//     <>

//     <FormModal onFormSubmit={handleFormSubmit}/>
     
//     </>
//       </div>
//     </div>
 
// )};

// export default ClientPage;
