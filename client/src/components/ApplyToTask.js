import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Button from "react-bootstrap/Button";
import React from "react";
import {
  MDBCard,
   MDBCardBody,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
  MDBCardTitle,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";

function ApplyToTask(props) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();
  const [price, setPrice] = useState();
  const [priceCheck, setPriceCheck] = useState(false);
  // const [jobId, setJobId] = useState(0);

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    console.log("hi" + userLocal.userId);
    setUser(userLocal.userId);
    console.log("state" + user);
  }, []);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  // const handlePriceChange = () => setPrice()

  const handleSubmit = () => {
    if (priceCheck) {
      const request = {
        action: "applyingJob",
        clientId: user,
        jobId: props.job._id,
        price: price,
      };
      axios.put("http://localhost:3500/api/jobs/", request).then((repos) => {
        console.log(repos);
        if (repos.data.result === "Success") {
          handleClose();
          window.location.reload();
        }
      });
    } else {
      console.log("please enter the price");
    }
  };

  return (
    <>
      <Button onClick={handleShow} variant="light" className="text-reset m-0">
        Apply To Task
        <MDBIcon fas icon="clipboard-list" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardTitle>{props.job.jobTitle}</MDBCardTitle>
              <MDBCardSubTitle className="mb-2">
                Job Date: {props.job.jobDate}
              </MDBCardSubTitle>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-circle"
                  />
                  <MDBListGroup style={{ minWidthL: "22rem" }} light>
                    <MDBListGroupItem noBorders>
                    <p className="text-muted mb-0">
                      {props.job.jobDescription}</p>
                    </MDBListGroupItem>

                    <MDBListGroupItem noBorders>
                    <p className="text-muted mb-0">
                      Date Posted: {props.job.postCreated}
                      </p>
                    </MDBListGroupItem>
                  

                  <MDBListGroupItem noBorders>
                    <MDBInput
                      label="Enter your rate"
                      id="form1"
                      type="number"
                      onChange={(e) => {
                        setPrice(e.target.value);
                        setPriceCheck(true);
                      }}
                    />
                  </MDBListGroupItem>
                  </MDBListGroup>

                 
                </div>
                
              </div>
              
            </MDBCardBody>
          </MDBCard>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ApplyToTask;
