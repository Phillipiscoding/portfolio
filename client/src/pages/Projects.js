import React from "react";
import ProjectImage from "../images/project-image.png";

function Projects() {
  return (
    <div className="projects container">
      <h2>My Projects</h2>
      <hr className="rounded" />

      <article className="project-article">
        <h3>Lift Phit</h3>
        <img
          src={ProjectImage}
          alt="This is a screenshot of an application I built called Lift Phit"
        />
        <p>
          Lift Phit is an app dedicated to workout tracking. With Lift Phit,
          users have the ability to create an account, log in, and seamlessly
          track their gym workouts.
        </p>
        <a href="#" >Code</a>
        <a href="#" >Live App</a>
      </article>

      <article className="project-article">
        <h3>Play Fit</h3>
        <img
          src={ProjectImage}
          alt="This is a screenshot of an application that I developed called Play Fit."
        />
        <p>
          I developed this app to demonstrate my API integration abilities. With
          Play Fit, users can easily search for artists, albums, and songs by
          connecting to the Spotify API. Additionally, the app connects to an
          exercise API, enabling users to search for exercises and view detailed
          descriptions and demos on how to perform them.
        </p>
        <a href="#" >Code</a>
        <a href="#" >Live App</a>
      </article>

      <article className="project-article">
        <h3>Pizzys Pizza</h3>
        <img
          src={ProjectImage}
          alt="This is a screenshot of a fictional pizzera's website called Pizzys Pizza"
        />
        <p>
          I designed this website for a fictional pizzeria, drawing inspiration
          from the underwhelming online presence of local small business
          restaurants. My goal is to inspire them to consider allowing me to
          enhance their websites, providing a much-needed boost to their online
          marketing efforts.
        </p>
        <a href="#" >Code</a>
        <a href="#" >Live App</a>
      </article>
    </div>
  );
}

export default Projects;
