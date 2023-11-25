import "./AboutMe.css";
import { HiUser } from "react-icons/hi";

function AboutMe() {
  const openResume = () => {
    window.open("/Ahishree_Rai_P_Resume.pdf", "_blank");
  };

  return (
    <div className="about">
      <h1 className="title">
        <HiUser className="icon" />
        ABOUT ME
      </h1>

      <div className="info">
        <img src="./Ahishree.jpeg" alt="Ahishree" className="image" />

        <div className="details">
          <h3>I am Ahishree Rai P</h3>
          <p style={{ fontStyle: "italic" }}>React Developer</p>
          "I am a proactive individual from Sullia Taluk, Dakshina Kannada,
          holding a BE in Electronics and Communication Engineering from
          Vivekananda College of Engineering and Technology, Puttur. With a
          fervent passion for web development within the MEAN stack, I've
          cultivated skills through various hobby projects and now seek
          opportunities to excel as a React Developer in a professional
          setting."
          <div className="contact">
            <p>
              Email:{" "}
              <a href="mailto:ahishreeraip@gmail.co">ahishreeraip@gamil.com</a>
            </p>
            <p>
              Place:{"  "}
              <span style={{ color: "rgb(195, 30, 210)" }}>
                sulia Taluk, DakshinaKannada, 574212
              </span>
            </p>
          </div>
          <button className="button" onClick={openResume}>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
