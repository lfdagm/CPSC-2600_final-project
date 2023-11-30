import ClientPage from "./ClientPage";
import JobSeekerPage from "./JobSeekerPage";

// Conditionally render the page based on role
// Cannot use the method Xavier did before because the useEffect cannot be conditionally render
function LoggedInPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  return(
    <>
      {user.role === "client"? <ClientPage /> : <JobSeekerPage />};
    </>

)
}

export default LoggedInPage;