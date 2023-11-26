import "./Education.css";
import EducationCard from "./EducationCard";
import { HiAcademicCap } from "react-icons/hi";

function Education() {
  return (
    <div className="education">
      <h1 className="title" style={{ paddingBottom: "6rem" }}>
        <HiAcademicCap className="icon" />
        EDUCATION
      </h1>

      <EducationCard
        image="./VCET_college.png"
        education="Bacholer Of Engineering In Electronics And Communication"
        institute="Vivekananda College Of Engineering And Technology"
        year="2018-2022"
      />
      <EducationCard
        image="./PU-college.png"
        education="Pre-University Course - PCMB"
        institute="Ambika PU College, Nellikatte, Puttur"
        year="2016-2018"
      />
      <EducationCard
        image="./VRV-school.png"
        education="Secondary School Leaving Certificate"
        institute="Vidya Rashmi Vidyalaya"
        year="2016"
      />
    </div>
  );
}
export default Education;
