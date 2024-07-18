import "./Skill.css";
import SkillCard from "./SkillCard";
import { HiDesktopComputer } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Skill() {
  useEffect(() => {
    Aos.init({ duration: 3000, offset: -10 });
  }, []);
  return (
    <div className="skill">
      <div className="container" data-aos="zoom-in">
        <h1 className="title">
          <HiDesktopComputer className="icon" />
          SKILL
        </h1>
        <div className="skillbox">
          <SkillCard image="./logo192.png" skillname="React Js" />
          <SkillCard image="./javascript.png" skillname="JavaScript" />
          <SkillCard image="./html.png" skillname="HTML" />
          <SkillCard image="./CSS3.png" skillname="CSS" />
          <SkillCard image="./redux.svg" skillname="Redux" />
          <SkillCard image="./nodejs.svg" skillname="Node Js" />
          <SkillCard image="./Bootstrap.png" skillname="Bootstrap" />
        </div>
      </div>
    </div>
  );
}
export default Skill;
