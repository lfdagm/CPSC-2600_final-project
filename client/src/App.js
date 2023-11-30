import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Footer from "../src/components/Footer";
import ClientSignUp from "./components/accounts/SignUp";
import JobSeekerSignUp from "./components/accounts/JobSeekerSignUP";
import Login from "./components/accounts/Login";
import LoggedIn from "./components/pages/LoggedIn"
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import RoleSelectionPop from './components/accounts/RoleSelectionPop';

import { MDBContainer } from 'mdb-react-ui-kit';


function App() {
  // This is the Login, roleSelection, and signUp pops appearing and closing handler. Feel free to optimise it.
  const [role, setRole] = useState();
  const [signUpShow, setSignUpShow] = useState(false);
  const [logInShow, setLogInShow] = useState(false);
  const [roleShow, setRoleShow] = useState(false);

  const handleRoleShow = () => setRoleShow(true);
  const handleRoleShowClose = () => {
    setRoleShow(false)};
  const handleRoleSelection = () => {
    setRole("client");
    handleSignUpShow()
    handleRoleShowClose();
  };
  const handleJobSeekerRoleSelection = () => {
    setRole("JobSeeker");
    handleSignUpShow();/*change to job seeker signup pop later*/ 
    handleRoleShowClose()
  };
  const handleSignUpShow = () => setSignUpShow(true);
  const handleSignUpClose = () => setSignUpShow(false);
  const handleLogInShow = () => setLogInShow(true);
  const handleLogInClose = () => setLogInShow(false);
  // Maybe not useful. Just another way to do the pops appearance logic in my head.
useEffect(() => {
  let appState = {
    roleShow: roleShow,
    signUpShow: signUpShow,
    logInShow: logInShow
  }
  localStorage.setItem('appState', JSON.stringify(appState));
});
  return (
    <div className="App">
      <header className="App-header">
        <NavBar 
        handleRoleShow={handleRoleShow}
        handleLogInShow={handleLogInShow}/>
      </header>
      <RoleSelectionPop 
      roleShow = {roleShow}
      handleRoleShowClose = {handleRoleShowClose}
      handleRoleSelection = {handleRoleSelection}
      handleJobSeekerRoleSelection = {handleJobSeekerRoleSelection}/>
      {(role === "client"? <ClientSignUp 
      signUpShow= {signUpShow}
      setSignUpShow = {setSignUpShow}
      handleSignUpClose={handleSignUpClose}/> : <JobSeekerSignUp 
      signUpShow= {signUpShow}
      setSignUpShow = {setSignUpShow}
      handleSignUpClose={handleSignUpClose}/>)}
      <Login 
      logInShow= {logInShow}
      setLogInShow = {setLogInShow}
      handleLogInClose={handleLogInClose}/>
      {/* Main display routes */}
      {/* Please follow this format because we are using a newer version of react-router-dom */}
      <MDBContainer fluid>
          
          <Routes>
            <Route path='/' element={<Home />} exact />
            {/* <Route path='/aboutus' component={About} /> */}
            <Route path='/login' element={<LoggedIn />} />
            <Route path='*' element={<Error />} />
          </Routes>
          </MDBContainer>
      <Footer/>
    </div>
  );
}

export default App;