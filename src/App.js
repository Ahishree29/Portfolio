import "./App.css";

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import Skill from "./components/Skill";
import Work from "./components/Work";
import Intro from "./components/Intro";

import Header from "./components/Header";
import { useRef } from "react";

function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const eduRef = useRef(null);
  const workRef = useRef(null);
  const expRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <header>
        <Header
          scrollToRef={scrollToRef}
          introRef={introRef}
          aboutRef={aboutRef}
          skillRef={skillRef}
          eduRef={eduRef}
          workRef={workRef}
          expRef={expRef}
          footerRef={footerRef}
        />
      </header>{" "}
      <main>
        <section ref={introRef}>
          {" "}
          <Intro aboutRef={aboutRef} scrollToRef={scrollToRef} />
        </section>
        <section ref={aboutRef}>
          {" "}
          <AboutMe />
        </section>
        <section ref={skillRef}>
          {" "}
          <Skill />
        </section>
        <section ref={eduRef}>
          {" "}
          <Education />
        </section>
        <section ref={workRef}>
          {" "}
          <Work />
        </section>
        <section ref={expRef}>
          {" "}
          <Experience />
        </section>
      </main>{" "}
      <footer>
        <Footer
          scrollToRef={scrollToRef}
          introRef={introRef}
          aboutRef={aboutRef}
          skillRef={skillRef}
          eduRef={eduRef}
          workRef={workRef}
          expRef={expRef}
          footerRef={footerRef}
        />
      </footer>
    </>
  );
}

export default App;
