import React from 'react'
import Hero from "../images/phillip.png"

function Home() {
  return (
    <div className="home container">
      <div>
        <h1 className="brand-font">Hi, I'm Phillip.</h1>
        <p>I am a Web Developer specializing in Frontend development, dedicated to creating engaging and user-friendly Websites and Web Applications. By crafting exceptional Frontend experiences</p>
      </div>
      <div>
        <img src={Hero} />
      </div>
      



    </div>
  )
}

export default Home