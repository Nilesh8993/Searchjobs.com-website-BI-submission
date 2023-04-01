import React, { useState } from "react";
import JobCard from "./JobCard";
import "./style.css";
import { data } from "../data.js";

const JobFeed = ({ find }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="">
        <form className="d-flex m-auto p-3" role="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="form-control me-2"
            type="search"
            placeholder="Enter keyword/ designation/ companies"
            aria-label="Search"
          />
        </form>
        <div className="jobfeed">
          {data
            .filter((item) => {
              return (
                item.title.toLowerCase().includes(find) ||
                item.company.toLowerCase().includes(find) ||
                item.location.toLowerCase().includes(find)
              );
            })
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search) ||
                    item.company.toLowerCase().includes(search) ||
                    item.location.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <>
                  <JobCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    salary={item.salary}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default JobFeed;
