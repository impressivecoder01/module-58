import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    },[])
    return (
        <div>
            <h1>total jobs: {jobs.length}</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;