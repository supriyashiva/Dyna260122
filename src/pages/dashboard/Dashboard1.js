import { Grid, Paper } from "@material-ui/core";

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Dashboard1.css";

import React, { useEffect, useState } from "react";

function Dashboard1() {
  return (
    <div className="home">
      <div>
        <FeaturedInfo />
      </div>
    </div>
  );
}

export default Dashboard1;
