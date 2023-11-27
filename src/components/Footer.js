import "./Footer.css";
import { HiMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer({
  scrollToRef,
  introRef,
  aboutRef,
  skillRef,
  eduRef,
  workRef,
  expRef,
  footerRef,
}) {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="designerInfo">
          <h1>Ahishree's Portfolio</h1>
          <p>
            Thank you for visisting my personal portfolio ebsite.Connect with me
            over socials.
          </p>
        </div>
        <div className="Quick access">
          <h1>Quick Links</h1>
          <ul className="quicklink">
            <li>
              <div onClick={() => scrollToRef(introRef)}>Intro</div>
            </li>
            <li>
              <div onClick={() => scrollToRef(aboutRef)}>About Me</div>
            </li>
            <li>
              <div onClick={() => scrollToRef(skillRef)}>Skill</div>
            </li>
            <li>
              <div onClick={() => scrollToRef(eduRef)}>Education</div>
            </li>
            <li>
              <div onClick={() => scrollToRef(workRef)}>Work</div>
            </li>
            <li>
              <div onClick={() => scrollToRef(expRef)}>Experience</div>
            </li>
            <li>
              <div onClick={() => scrollToRef(footerRef)}>Footer</div>
            </li>
          </ul>
        </div>
        <div className="contactInfo">
          <h1>Contact Info</h1>
          <p>
            <a
              href="mailto:ahishreeraip@gmail.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span
                style={{ color: "rgb(14, 185, 156)", fontSize: "15px" }}
                className="title"
              >
                <HiMail className="icon" /> ahishreeraip@gamil.com
              </span>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Ahishree29"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span
                style={{ color: "rgb(14, 185, 156)", fontSize: "15px" }}
                className="title"
              >
                <AiFillGithub className="icon" /> github.com/Ahishree29
              </span>
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/ahishree-rai-p-416772212/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span
                style={{ color: "rgb(14, 185, 156)", fontSize: "15px" }}
                className="title"
              >
                <AiFillLinkedin className="icon" />{" "}
                linkedin.com/in/ahishree-rai-p-416772212/
              </span>
            </a>
          </p>
        </div>
      </div>
      <div className="base">
        Designed With <span style={{ color: "red" }}> ❤ </span> By Ahishree Rai
        P
      </div>
    </div>
  );
}
export default Footer;
