import React from "react";

function Bio() {
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
    <div  className="bio">
      <h2>Bio</h2>
      <hr className="rounded" />
      <div className="bio-container">
        <section className="bio-sec">
          <h3>Who I Am</h3>
          <p>
            I am a Frontend Developer with a Bachelors Degree from Full Sail
            University. If a day goes by without learning something new, I feel
            that day was a waste.
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

export default Bio;
