import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connect with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               VanComer
              </h6>
              <p>
              VanComer, connecting Vancouver's newcomers with local experts. Our platform simplifies settling in, offering personalized assistance in various aspects of city life. Experience seamless integration into your new community with VanComer's dedicated support.
              </p>
            </MDBCol>


            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <MDBIcon fas icon="city" className="me-2" />
              100 West 49th Avenue, Vancouver, BC Canada V5Y 2Z6
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@vancomer.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: VanComer
      </div>
    </MDBFooter>
  );
}