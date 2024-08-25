import "./Skill.css";
import SkillCard from "./SkillCard";
import { HiDesktopComputer } from "react-icons/hi";
import "aos/dist/aos.css";

function Skill() {
 
  return (
    <div className="skill">
      <div className="container" >
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
