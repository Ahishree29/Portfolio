import React from "react";
import "./Home.css";

function Home({ aboutRef, scrollToRef }) {
  return (
    <div className="home">
      <div className="sec">
        <div className="blob-container">
          <div className="blob">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              id="blobSvg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(3, 208, 254)" }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(3, 208, 254)" }}
                  ></stop>
                </linearGradient>
              </defs>
              <path
                id="blob"
                d="M423.5,350.5Q366,451,255,442Q144,433,80.5,341.5Q17,250,88.5,172Q160,94,252,90.5Q344,87,412.5,168.5Q481,250,423.5,350.5Z"
                fill="url(#gradient)  "
              >
              </path>
            </svg>
          </div>
          <div className="blob">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              id="blobSvg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(3, 208, 254)" }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(3, 208, 254)" }}
                  ></stop>
                </linearGradient>
              </defs>
              <path
                id="blob"
                d="M423.5,350.5Q366,451,255,442Q144,433,80.5,341.5Q17,250,88.5,172Q160,94,252,90.5Q344,87,412.5,168.5Q481,250,423.5,350.5Z"
                fill="url(#gradient)  "
              ></path>
            </svg>
          </div>
          <div className="blobimg">
            <img src="Ahi.png" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="intro">
        <h1 className="hello">Hello There ...</h1>
        <h2 className="name">I'm Ahishree Rai P</h2>
        <h3 className="inter">
          I Am into Web Development
        </h3>
        <button className="button" onClick={() => scrollToRef(aboutRef)}>
          About Me
        </button>
      </div>
    </div>
  );
}

export default Home;
