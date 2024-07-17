import "./Work.css";
function WorkCard({ codeUrl, viewUrl, projectImg, content, projectName }) {
  function handleCode() {
    window.open(codeUrl, "_blank");
  }
  function handleView() {
    window.open(viewUrl, "_blank");
  }
  return (
    <div className="cardcontainer">
      <div className="mycard">
        <div className="cimg">
          <img src={projectImg} alt="project"></img>
          <h2>{projectName}</h2>
        </div>

        <div className="cdetail">
          <p>{content}</p>
          <div className="acc-button">
            <button className="btn" onClick={handleView}>
              View
            </button>
            <button className="btn" onClick={handleCode}>
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkCard;
