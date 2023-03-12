import React from "react";

export const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projectsTitle">Projects I have worked on</h1>
      <div className="projectShows">
        <div className="project">
          <h3>Sales Landing Page</h3>
        </div>
        <div className="project">
          <h3>CRUD App</h3>
        </div>
        <div className="project">
          <h3>DashBoard</h3>
        </div>
        <div className="project">
          <h3>Restaurant App</h3>
          <a href="https://ricardoortega667.github.io/restaurant/?classId=01075f81-bc12-4078-aa40-82de8e4081f9&assignmentId=0d660993-6e21-4cdf-9d4e-48cfd9abd4e2&submissionId=153b0156-8412-4ad4-8b1f-cb47fed9ab04">
            See Demo
          </a>
          <p>
            Development of a simple page for a restaurant, taking information
            from its menu from a database (firebase)
          </p>
        </div>
        <div className="project">
          <h3>Ecommerce App</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
