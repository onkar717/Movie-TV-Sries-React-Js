import React from "react";
import { img_300 } from "../utils/config";
import "../App.css";
import { Badge } from "@mui/material";

const Singlecontent = ({ om }) => {
  return (
    <div className="media">
      <Badge
        badgeContent={Math.floor(om.vote_average)}
        color={om.vote_average > 6 ? "primary" : "secondary"}
      />
      <img src={img_300 + om.poster_path}  alt='img' />
      <div className="subtitle">
        <span className="">{om.title}</span>
        <span className="">{om.release_date}</span>
      </div>
    </div>
  );
};

export default Singlecontent;
