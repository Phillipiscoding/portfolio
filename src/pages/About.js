import React from "react";
import Family from "../images/family.jpeg";

function About() {
  const Skills = [
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "React", url: "https://react.dev/" },
    {
      name: "C#",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/",
    },
    { name: "MySQL", url: "https://www.mysql.com/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Node", url: "https://nodejs.org/" },
    { name: "Express", url: "https://expressjs.com/" },
    { name: "SASS", url: "https://sass-lang.com/" },
    { name: "Bootstrap", url: "https://getbootstrap.com/" },
  ];
  return (
    <div className="about container">
      <h2>About Me</h2>
      <hr className="rounded" />
      <div className="about-container">
        <section className="about-sec">
          <input id="check" type="checkbox" />

          <h3>Who I Am</h3>
          <p>
            I am a Frontend Developer with a Bachelors Degree from Full Sail
            University. I aim to learn at least one new thing every day.
          </p>
          <p>
            In terms of frontend development, I possess a solid foundation in
            HTML, CSS, and JavaScript. Furthermore, I have attained proficiency
            in SASS and React, showcasing my excellence in these areas. Although
            I excel in utilizing Bootstrap and Tailwind frameworks, I take
            immense pleasure in crafting my own CSS libraries. While frontend
            development remains my primary focus, I also possess extensive
            experience working with APIs and databases, including MongoDB,
            MySQL, and Postgres. I derive immense satisfaction from constructing
            CRUD applications and developing RESTful APIs.
          </p>

          <div className="more-content">
            <p>
              I have a wide range of hobbies, from powerlifting and health to
              poetry and music. I got into powerlifting a few years ago. I have
              no desire to compete, I just enjoy challenging myself and seeing
              just what I am capable of. Not long ago, I hit a deadlift personal
              record of 500 pounds. That and a 450 pounds squat are my call to
              victory in powerlifting. I am into health and fitness, however I
              am also into pizza and tacos. As you can see from my projects,
              they revolve around one or the other. I have been writing poetry
              since elementary school and had my first poem published in a local
              magazine when I was i the third grade. I later turned the love of
              poetry into a love of song writing. I recorded music as a CHH
              artist in the late 2000s. I no longer pursue music, though I am
              still connected and networking with the local Atlanta CHH scene.
            </p>

            <div className="family-photo-container">
              <img
                className="family-photo"
                src={Family}
                alt="This is my family. Me, my wife Seble, and our daughter Christina."
              />
            </div>

            <p>
              My greatest love is for my family. My wife and my daughter are the
              biggest inspiration in my life. It was the birth of my daughter
              that inspired me to pursue web development. I was first introduced
              to code in the MySpace era and immediately fell in love with it.
              Once MySpace dissolved I stopped experimenting with code. In 2019
              I began watching tutorials and creating small web applications. I
              was eager to learn more. I decided that the self-taught route was
              not for me being that I prefer a more organized and structured
              method of learning. In 2020, I enrolled in Full Sail University in
              their Web Design and Development program. Now that I have
              graduated, I use tools like LinkedIn Learning and Udemy to expand
              my knowledge of web development. I feel like a minimum of one hour
              a day a good investment in myself and use that as a starting goal.
              I often begin having so much fun learning something new that an
              hour turns into two or three.
            </p>
            <label for="check" className="btn btn-primary check">Show less</label>
          </div>
          <label for="check" className="btn btn-primary check">Read more</label>
        </section>
        <section className="skills-sec">
          <h3>My Skills</h3>
          <div className="skills-container">
            <ul className="skills-list">
              {Skills.map((skill, index) => (
                <li className="skill" key={index}>
                  <a href={skill.url}>{skill.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
