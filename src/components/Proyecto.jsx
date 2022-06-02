/* eslint-disable react/forbid-prop-types */
import React from "react";
import "./Proyecto.css";
import PropTypes from "prop-types";

export default function Proyecto({
  img, titulo, description, tecnologia, repo,
}) {
  return (
    <div className="ProjectContainer">
      <div className="imgContainer">
        <img src={img} className="projectImg" alt="projectImage" />
      </div>
      <div className="projectTextArea">
        <div className="projectTitle">
          <h1 className="projectTitleTag">{titulo}</h1>
        </div>
        <div className="projectTechC">
          <h2 className="projectTech">{tecnologia}</h2>
        </div>
        <div className="projectDescriptionC">
          <span className="projectDescription">{description}</span>
        </div>
        <a className="social-iconP" href={repo}>
          <i className="fa-brands fa-github iconoP" />
        </a>
      </div>
    </div>
  );
}

Proyecto.propTypes = {
  titulo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tecnologia: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
};
