import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import JobInfoTable from "./JobInfoTable";
import axios from "axios";

const MyApplication = () => {
  const { user } = useAuth();
  console.log(user);
  // const navigate = useNavigate()
  const [jobs, setJobs] = useState([]);
  useEffect(() => {

    // fetch(`http://localhost:3000/job_application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));

    axios.get(`http://localhost:3000/job_application?email=${user.email}`,{withCredentials: true})
    .then(res => setJobs(res.data))

  }, [user.email]);
  return (
    <div>
      <h1> My Application:{jobs.length}</h1>
      <div>
        {
            jobs.map(job=> <JobInfoTable key={job._id} job={job}></JobInfoTable>)
        }
      </div>
    </div>
  );
};

export default MyApplication;
