import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {_id, title, company, company_logo, requirements, description, location, salaryRange } =
    job;
    
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <div className="flex gap-2 m-2">
          <figure>
            <img className="w-16" src={company_logo} alt="Shoes" />
          </figure>
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl">{company}</h4>
            <p>
              <CiLocationOn /> {location}
            </p>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill) => (
              <p className="border rounded-md text-center hover:text-blue-400 hover:cursor-pointer">{skill}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <p>Salary: {salaryRange.min} - {salaryRange.max}</p>
            <div>
            <Link to={`/jobs/${_id}`} className="btn btn-primary" >
            Apply Now
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
