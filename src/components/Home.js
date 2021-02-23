import React from "react";

function Home({user}) {

// console.log(user)
const {name, city, color} = user
  return (
    <div id="home">
      <h1 style={{color: color}}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
