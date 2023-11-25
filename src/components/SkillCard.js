import "./SkillCard.css";
function SkillCard({ image, skillname }) {
  return (
    <div className="skillcard">
      <img src={image} alt="skill" className="skillimage" />
      <div>{skillname}</div>
    </div>
  );
}
export default SkillCard;
