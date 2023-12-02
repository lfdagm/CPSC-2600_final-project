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
import { Link } from 'react-router-dom';


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
                        <td>Bird's Eye View Photography of High-rise Buildings</td>
                        <td>Adi K</td>
                        <td><Link to={"https://www.pexels.com/photo/bird-s-eye-view-photography-of-high-rise-buildings-2382868/"}>Pexels</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>A man driving a car with his hands on the steering wheel</td>
                        <td>Airam Dato-on</td>
                        <td><Link to={"https://www.pexels.com/photo/a-man-driving-a-car-with-his-hands-on-the-steering-wheel-15487492/"}>Pexels</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Photography of People Connecting Their Fingers</td>
                        <td>Darrel Und</td>
                        <td><Link to={"https://www.pexels.com/photo/photography-of-people-connecting-their-fingers-1023828/"}>Pexels</Link>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>person's holding leaves during daytime</td>
                        <td>Providence Doucet</td>
                        <td><Link to={"https://unsplash.com/photos/persons-holding-leaves-during-daytime-mE5MBZX5sko"}>Unsplash</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Young ethnic man in earbuds listening to music while waiting for transport at contemporary subway station</td>
                        <td>Andrea Piacquadio</td>
                        <td><Link to={"https://www.pexels.com/photo/young-ethnic-man-in-earbuds-listening-to-music-while-waiting-for-transport-at-contemporary-subway-station-3799205/"}>Pexels</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>A Woman Tutoring a Young Student</td>
                        <td>MART PRODUCTION</td>
                        <td><Link to={"https://www.pexels.com/photo/a-woman-tutoring-a-young-student-8472987/"}>Pexels</Link>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>man holding luggage photo</td>
                        <td>Mantas Hesthaven</td>
                        <td><Link to={"https://unsplash.com/photos/man-holding-luggage-photo-_g1WdcKcV3w"}>Unsplash</Link></td>
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
