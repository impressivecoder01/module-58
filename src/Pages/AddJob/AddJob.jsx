import React, { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData)
        const {min, max, currency, ... newJob} = initialData;
        console.log(newJob)
        newJob.salaryRange ={min, max, currency}
        // console.log(newJob)
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log('new form data', newJob)
        fetch('http://localhost:3000/jobs',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(newJob)

        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your information has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/myApplications')
          }
        }) 
    }
  return (
    <div>
      <h1>post a new job.</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body">
          {/* job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          {/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              placeholder="Job Location"
              name="location"
              className="input input-bordered"
              required
            />
          </div>
          {/* job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select className="select select-ghost w-full max-w-xs">
              <option disabled selected>
                Pick the best Job type
              </option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* job category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select className="select select-ghost w-full max-w-xs">
              <option disabled selected>
                Pick the best Job Field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Teaching</option>
            </select>
          </div>
          {/* salary range */}
          <p className="mt-4">Salary Range</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-end">
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text">Min</span>
              </label> */}
              <input
                type="number"
                placeholder="Min"
                name="min"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              {/* <label className="label">
                <span className="label-text">Max</span>
              </label> */}
              <input
                type="number"
                placeholder="Max"
                name="max"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Currency</span>
              </label>
              <select name="currency" className="select select-ghost w-full max-w-xs">
                {/* <option disabled selected>
                Pick the best Job Field
              </option> */}
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* job description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              name="description"
              placeholder="Job Description"
              required
            ></textarea>
          </div>

          {/* company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              name="companyName"
              className="input input-bordered"
              required
            />
          </div>

          {/* requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="requirements"
              placeholder="Put each requirements in a new Line "
              required
            ></textarea>
          </div>

          {/* responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="responsibilities"
              placeholder="Put each responsibilities in a new Line"
              required
            ></textarea>
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              placeholder="HR Name"
              name="hrName"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              placeholder="HR Email"
              defaultValue={user?.email}
              name="hrEmail"
              className="input input-bordered"
              required
            />
          </div>

          {/* applicationDeadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              placeholder="applicationDeadline"
              
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* Company Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="URL"
              placeholder="Company Logo URL"
              name="companyLogo"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit btn */}
          <div className="form-control mt-6">
            {/* <button >Submit</button> */}
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
