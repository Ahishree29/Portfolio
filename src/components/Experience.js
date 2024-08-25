import "./Experience.css";

import "aos/dist/aos.css";
import { HiDesktopComputer } from "react-icons/hi";
function Experience() {
 
  return (
    <div className="experience">
      <h1 className="title">
        <HiDesktopComputer className="icon" />
        EXPERIENCE
      </h1>
      <div className="content">
        <div className="company">
          <h1>SignDesk</h1>
          <img src="./signdesk_logo.png" alt="Signdesk" className="img" />
          <p>Malleshwaram, Bangalore,56003</p>
        </div>
        <div className="workexp">
          <h2>Associate Software Engineer</h2>
          <h4>September 2022 - July 2023</h4>
          <p>
            As a full-stack web developer, I contributed to two key projects,
            demonstrating proficiency in React, JavaScript, Node.js, and Koa.
          </p>
          <ol>
            <li>
              {" "}
              <h3>Kotak Mahindra Bank Onboarding Site:</h3>
              <ul>
                <li>
                  Developed a report module presenting onboarded user details
                  and integrated quiz grading into the UI.
                </li>
                <li>
                  Implemented email notifications to relevant stakeholders for
                  approval processes.
                </li>
                <li>
                  Managed and maintained the entire configuration of detail
                  views on a low-code platform.
                </li>
                <li>
                  Constructed an activity list for the dashboard, enhancing user
                  experience and process visibility.
                </li>
              </ul>
            </li>
            <li>
              <h3>Internal JSON Validator Tool:</h3>
              <ul>
                <li>
                  Engineered an internal tool enabling JSON file validation and
                  conversion into a user-friendly tabular format.
                </li>
                <li>
                  Facilitated easy comprehension of JSON structures, enhancing
                  office efficiency and data interpretation.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Experience;
