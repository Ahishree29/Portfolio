import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Particleconfig from "./config/Particle-config";
import { useCallback } from "react";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      Loaded={particlesLoaded}
      options={Particleconfig}
    />
  );
}
export default ParticleBackground;
