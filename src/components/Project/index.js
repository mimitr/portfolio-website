import React from "react";
import "./index.css";

const Project = (props) => {
  return (
    <React.Fragment>
      <div className="project-grid">
        <div className="project-img">
          <img src={props.img} />
        </div>
        <div className="project-name">
          <h2>{props.projName}</h2>
        </div>
        <div className="project-description">
          <p>{props.desc}</p>
        </div>
        <div className="project-tech-stack">
          <p>{props.techStack}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
