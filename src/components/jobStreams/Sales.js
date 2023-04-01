import React from "react";

import JobFeed from "../JobFeed.js";
import "../style.css";

const sales = () => {
  return (
    <div>
      <JobFeed find={"sales"} />
    </div>
  );
};

export default sales;
