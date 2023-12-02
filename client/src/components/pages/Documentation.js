import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBContainer,
  } from "mdb-react-ui-kit";
  
  function Documentation() {
    return (
      <>
      <MDBContainer className="gx-4 my-4">
        <MDBRow className="text-center mb-3">
          <MDBCol>
            <h2>Documentation</h2>
          </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol className="mb-4">
          <MDBCard alignment="center">
            <MDBCardHeader>Instructions to use the site</MDBCardHeader>
            <MDBCardBody className="pt-4">
              <MDBRow>
                <MDBCol>
                <p>The website can have two kind of user: client that will post jobs and the jobSeeker that will accept the job posted.</p>
                <p>They both will sign up first to access to the website, when they are in our database, they then will be able to log-in. </p>
                <p>When the client log-in: </p>
                <p>
                  The client will have to enter his userName and password when both are correct the client will access to his page. 
                  The client will then be able to add a task using the from the modal. 
                  When the task is created AND if there is a match in category between the client task category and the jobSeeker interest. 
                  The task will be then post on the jobSeeker page. 
                </p>
                <p> When then jobSeeker log-in: </p>
                <p> 
                  The jobSeeker will have to enter his userName and password when both are correct the jobSeeker will access to his page.
                  She will then see the potential jobs that were posted by the client that have similar category of interest. 
                  The jobSeeker will be able to apply and set a price, this price will indicate that she is willing to do this task for the amount. 
                  After the job seeker Apply it will be send back the client. 
                </p>
                <p> Task selection: </p>
                <p>
                  The client will see on his active task selection the task when the task appear in the active task at first in mean that a job seeker apply for the task. 
                  The client will be able the click on select a user and a modal will appear with all the potential job seeker and the price they propose. 
                  The client will pick the jobSeeker that will be the fit to fulfill the task. 
                  It will close the modal and change the link to mark task as completed. 
                  When the task is done the client will click on it and the task will move to the completed task.
                </p>
                <p> Then the jobSeeker, the task after been completed will appear in the previously applied task. </p>
                <p>From the NavBar:</p>
                <p> documentation,source,sign-up and log-in will be available.</p>
                <p>For the caroussel</p>
                <p>the picture will change automatically every 5 seconds but also can be change manually on the side</p>
                </MDBCol>
              </MDBRow>
              
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          </MDBRow>
          <MDBRow>
        <MDBCol className="my-4">
          <MDBCard alignment="center">
            <MDBCardHeader>List of features</MDBCardHeader>
            <MDBCardBody className="pt-4">
            
              <MDBRow>
                <MDBCol>
                <p>Write here</p>
                </MDBCol>
              </MDBRow>
              
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          </MDBRow>
        
      
      </MDBContainer>
      </>
    );
  }
  
  export default Documentation;
  