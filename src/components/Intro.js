import "./Intro.css";
import Home from "./Home";
import ParticleBackground from "./ParticleBackground";

function Intro({ aboutRef, scrollToRef }) {
  return (
    <div className="intro">
      <ParticleBackground />

      <Home aboutRef={aboutRef} scrollToRef={scrollToRef} />
    </div>
  );
}
export default Intro;
