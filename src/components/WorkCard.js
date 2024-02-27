import { useEffect, useState } from "react";
import "./Work.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
function WorkCard({ codeUrl, viewUrl, projectImg, content, projectName }) {
  const [isExtend, setIsExtend] = useState(false);

  function handleCode() {
    window.open(codeUrl, "_blank");
  }
  function handleView() {
    window.open(viewUrl, "_blank");
  }
  return (
    <div className="workcard">
      <img src={projectImg} alt="Project" className="workImage" />
      <button onClick={() => setIsExtend(!isExtend)} className="header">
        <h3>{projectName}</h3>
        <h3 style={{ fontSize: "30px" }}>
          {!isExtend ? <HiChevronDown /> : <HiChevronUp />}
        </h3>
      </button>
      {isExtend && (
        <div className="accordian" data-aos="fade-down">
          {content}
          <div className="acc-button">
            <button className="btn" onClick={handleView}>
              View
            </button>
            <button className="btn" onClick={handleCode}>
              Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default WorkCard;
