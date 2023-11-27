import "./Skill.css";
import SkillCard from "./SkillCard";
import { HiDesktopComputer } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Skill() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -400 });
  }, []);
  return (
    <div className="skill">
      <h1 className="title">
        <HiDesktopComputer className="icon" />
        SKILL
      </h1>
      <h4 className="quotes">
        "Embracing the journey from novice to expert, acknowledging that skill
        is the seed and success is its ripest harvest, all while understanding
        that the foundation for exceptional work lies in loving what you do."
      </h4>
      <div className="container" data-aos="zoom-in">
        <SkillCard image="./logo192.png" skillname="React Js" />
        <SkillCard image="./javascript.png" skillname="JavaScript" />
        <SkillCard image="./html.png" skillname="HTML" />
        <SkillCard image="./CSS3.png" skillname="CSS" />
        <SkillCard image="./redux.svg" skillname="Redux" />
        <SkillCard image="./nodejs.svg" skillname="Node Js" />
        <SkillCard image="./Bootstrap.png" skillname="Bootstrap" />
      </div>
    </div>
  );
}
export default Skill;
