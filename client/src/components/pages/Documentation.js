import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBContainer,
    MDBCardTitle,
    MDBCardSubTitle,
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
                <p>Write here</p>
  
                 
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
  