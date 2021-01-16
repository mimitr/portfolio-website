import React from "react";
import "./index.css";
import Project from "../../components/Project";
import photoProImg from "../../images/photoPro.png";

const Work = () => {
  return (
    <React.Fragment>
      <div className="work-page-container" id="work">
        <div className="work-page-wrapper">
          <div className="heading-wrapper">
            <h1>Some Things I've Created</h1>
          </div>
          <div className="projects-wrapper">
            <Project
              projName={"PhotoPro"}
              img={photoProImg}
              desc={"this is the description"}
              techStack={"React, HTML, CSS"}
            />
            <Project
              projName={"PhotoPro"}
              img={photoProImg}
              desc={"this is the description"}
              techStack={"React, HTML, CSS"}
            />
            <Project
              projName={"PhotoPro"}
              img={photoProImg}
              desc={"this is the description"}
              techStack={"React, HTML, CSS"}
            />
            <Project
              projName={"PhotoPro"}
              img={photoProImg}
              desc={"this is the description"}
              techStack={"React, HTML, CSS"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
