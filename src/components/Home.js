import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

function Home({ aboutRef, scrollToRef }) {
  return (
    <div className="home">
      <h1 className="hello">Hello There</h1>
      <h2 className="name">I'm Ahishree Rai P</h2>
      <h3 className="inter">
        I Am into{" "}
        <span>
          {" "}
          <Typewriter
            words={[
              "Web Development",
              "Mern Stack Development",
              "FrontEnd Development",
            ]}
            loop="true"
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h3>
      <button className="button" onClick={() => scrollToRef(aboutRef)}>
        About Me
      </button>
    </div>
  );
}

export default Home;
