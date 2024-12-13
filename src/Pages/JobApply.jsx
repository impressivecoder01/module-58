import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const JobApply = () => {
    const {id} = useParams()
    const {user}= useAuth;
    console.log(id,user)
    const submitJobApplication = e => {
        e.preventDefault()
        const from = e.target;
        const linkedIn = from.linked.value;
        const github = from.github.value;
        const resume = from.resume.value;
        console.log(linkedIn, github, resume)
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
    }
    return (
        <div className="card bg-base-100 w-full  shadow-2xl">
      <h1 className="text-5xl font-bold">Apply now!</h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input type="url" placeholder="linkedInURL" name='linked' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input type="url" placeholder="githubURL" name='github' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input type="url" placeholder="resumeURl" name='resume' className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
    );
};

export default JobApply;