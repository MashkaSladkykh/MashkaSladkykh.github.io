import React from "react";
import {Route, Routes} from "react-router-dom";

import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import Error from "../pages/Error";

const JobApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Jobs/>}/>
      <Route path=":jobId" element={<JobDetails/>}/>
      <Route
        path="*"
        element={
          <main style={{padding: "1rem"}}>
            <Error/>
          </main>
        }
      />
    </Routes>
  )
}
  
  export default JobApp;