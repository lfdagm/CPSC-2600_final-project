import { Image, Modal } from 'react-bootstrap';
// import '../../App.css';

export default function SignUp (props) {
  const newComerImg = require('./../../img/newComer320.jpg');
  const communityImg = require('./../../img/community320.jpg');

  return (
    <>
      <Modal show={props.roleShow} onHide={props.handleRoleShowClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>VanComer: Select Your Role:</Modal.Title>
        </Modal.Header>
        <Modal.Body centered>
        <div className="mb-3 mt-4 .modal-body">
          <Image
          className='img-responsive'
          src = {newComerImg}
          alt='new Comer'
          onClick={props.handleRoleSelection} 
          fluid rounded
          style={{width:'50%'}}
          />
          {/* <a href='https://pngtree.com/freepng/cartoon-suitcase-free-material_5463784.html'>png image from pngtree.com/</a> */}
          <Image
          className='img-responsive'
          src={communityImg} alt='new Comer'
          onClick={props.handleJobSeekerRoleSelection} 
          fluid rounded
          style={{width:'50%'}}
          />
          {/* Free to use under the Unsplash License */}
        </div>
        </Modal.Body>
      </Modal>
    </>
    
    
  )
}