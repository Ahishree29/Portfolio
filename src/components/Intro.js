import Home from "./Home";
import ParticleBackground from "./ParticleBackground";

function Intro({ aboutRef, scrollToRef }) {
  return (
    <div>
      <ParticleBackground />

      <Home aboutRef={aboutRef} scrollToRef={scrollToRef} />
    </div>
  );
}
export default Intro;
