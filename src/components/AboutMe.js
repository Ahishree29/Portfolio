import "./AboutMe.css";
import { HiUser } from "react-icons/hi";
import { DefaultPlayer as Video } from "react-html5video";
import resumeVideo from "../videos/Ahishree_Rai_P_Video_Resume.mp4";
import "react-html5video/dist/styles.css";
import thum from "../videos/Tumbnail.png";
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
      <div className="imgboarder">
        <img src="./Ahi.png" alt="Ahishree" className="ahiimg" />
      </div>

      <div className="details">
        <h3>I am Ahishree Rai P</h3>
        <p style={{ fontStyle: "italic" }}>React Developer</p>
        <p1>
          I am a proactive individual from Sullia Taluk, Dakshina Kannada,
          holding a BE in Electronics and Communication Engineering from
          Vivekananda College of Engineering and Technology, Puttur. With a
          fervent passion for web development within the MEAN stack, I've
          cultivated skills through various hobby projects and now seek
          opportunities to excel as a React Developer in a professional setting.
        </p1>
        <p2>
          I have one year of experience working at Singdesk, where I contributed
          to Kotak Mahindra Bank's onboarding site using a low-code platform.
          During my tenure, I developed a report module for easy site access,
          created and maintained configurations, built APIs for sending emails
          and calculating quiz scores, and developed a JSON validator that
          presented files in a tabular format.
        </p2>
        <p4>
          Beyond coding, I have a keen interest in paper crafting and mandala
          arts, which allow me to express my creativity and attention to detail.
        </p4>
        <div className="contactbox">
          <p>
            Email:{" "}
            <a href="mailto:ahishreeraip@gmail.co">ahishreeraip@gamil.com</a>
          </p>
          <p>
            Place:{"  "}
            <span>sulia Taluk, DakshinaKannada, 574212</span>
          </p>
        </div>
        <div className="video">
          <Video poster={thum} style={{ width: "20rem" }}>
            <source src={resumeVideo} type="video/webm" />
          </Video>
          <p>
            This is my video resume. Please check the video by clicking the play
            button so that you can get to know me better.
          </p>
        </div>
        <div>
          <button className="resume" onClick={openResume}>
            Click here for Resume
          </button>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
