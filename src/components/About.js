import React from "react";
import Links from "./Links"

function About({user}) {
  const {bio, links} = user
  console.log(links)
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links name="Github" link={links.github}/>
      <Links name ="LinkedIn" link={links.linkedin}/>
    </div>
  );
}

export default About;
