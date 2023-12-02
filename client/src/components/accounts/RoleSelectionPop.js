import { Image, Modal } from 'react-bootstrap';

export default function SignUp (props) {
  const newComerImg = require('./../../img/newComer320.jpg');
  const communityImg = require('./../../img/community320.jpg');

  return (
    <>
      <Modal show={props.roleShow} onHide={props.handleRoleShowClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>VanComer: Select Your Role:</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className="mb-3 mt-4 .modal-body">
          <Image
          className='img-responsive'
          src = {newComerImg}
          alt='new Comer'
          onClick={props.handleRoleSelection} 
          fluid rounded
          style={{width:'50%'}}
          />
          <Image
          className='img-responsive'
          src={communityImg} alt='new Comer'
          onClick={props.handleJobSeekerRoleSelection} 
          fluid rounded
          style={{width:'50%'}}
          />
        </div>
        </Modal.Body>
      </Modal>
    </>
    
    
  )
}