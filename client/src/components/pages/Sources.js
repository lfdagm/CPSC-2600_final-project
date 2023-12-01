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

function Sources() {
  return (
    <>
   <MDBContainer className="gx-4 my-4">
      <MDBRow className="text-center mb-3">
        <MDBCol>
          <h2>Sources</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol>
        <MDBCard alignment="center">
          <MDBCardHeader>Images</MDBCardHeader>
          <MDBCardBody className="pt-4">
     

            <MDBRow>
              <MDBCol>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Other attribution info</th>
                      <th scope="col">URL</th>
                    </tr>
                  </thead>
                  <tbody className="table-stripped">
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>

               
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

export default Sources;
