import Carousel from "../Carousel";
import Reviews from "../Reviews";
// import LogIn from "../LogIn";
// import PotentialJobs from "./PotentialJobs";

export default function Home () {
  return (
    <>
      <Carousel />
      <h1>For now, switching between home and login by typing in the / or /login in the URL, until we find a way to redirect after logging in.</h1><br /><h1> Message me if you need some explanation on the logic.</h1><br /><h1>I am missing most of the put requests routing from the frontend and possibily need some fixing on the backend.</h1>
      <Reviews/>
      {/* <LogIn /> */}
    </>
  );
}