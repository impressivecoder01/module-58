import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company,_id, company_logo, requirements, description, location, salaryRange,jobType,applicationDeadline} = useLoaderData();
    
    return (
        <div>
            <h1>Job details</h1>
            <p>title:{title}</p>
            <p>company:{company}</p>
            <p >applicationDeadline:{applicationDeadline}</p>
            <Link to={`/jobApply/${_id}`}></Link>
            <button className='btn btn-primary
            '>Apply Now</button>
        </div>
    );
};

export default JobDetails;
