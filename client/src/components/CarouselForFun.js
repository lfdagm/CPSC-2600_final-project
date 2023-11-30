import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../App.css";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  
  const handleNext = () => {
    setIndex((index) => (index+1 === images.length? 0: index+1));
  }
  const handlePrevious = () => {
    setIndex((index) => (index-1 < 0? images.length-1:index-1));
  }
  const hadnleDotClick = (index) => {
    setIndex(index);
  }
  return (
    //fetch from server?
    <div className = "carousel" style={{ display: 'block', width: 900, padding: 30 }}> 
      <img
        key={index}
        src={images[index]}
        alt="tester"
      />
      <div className = "left" onClick={handlePrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>
      <div className="right" onClick={handleNext}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
      <div className="indeicator">
        {images.map((_,indexCheck) => (
          <div
          key={index}
          className={`dot ${index === indexCheck? "active" : ""}`}
          onClick={() => hadnleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
};
// var DemoCarousel = React.createClass({
//   render() {
//     return (
//       <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//         <div>
//           <img src="" />
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img src="" />
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img src="assets/3.jpeg" />
//           <p className="legend">Legend 3</p>
//         </div>
//         <div>
//           <img src="assets/4.jpeg" />
//           <p className="legend">Legend 4</p>
//         </div>
//         <div>
//           <img src="assets/5.jpeg" />
//           <p className="legend">Legend 5</p>
//         </div>
//         <div>
//           <img src="assets/6.jpeg" />
//           <p className="legend">Legend 6</p>
//         </div>
//       </Carousel>
//     );
//   }
// });

export default Carousel;
  
