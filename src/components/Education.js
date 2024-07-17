import { useEffect, useRef } from "react";
import "./Education.css";
import { HiAcademicCap } from "react-icons/hi";

function Education() {
  const timelineRef = useRef();
  useEffect(() => {
    const observe = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-line");
          const boxes = entry.target.querySelectorAll(".text-box");
          boxes.forEach((box, index) => {
            box.style.animationDelay = `${index * 1}s`;
            box.classList.add("animate-box");
          });
        } else {
          entry.target.classList.remove("animate-line");
          const boxes = entry.target.querySelectorAll(".text-box");
          boxes.forEach((box) => {
            box.classList.remove("animate-box");
          });
        }
      },
      { threshold: 0.1 }
    );
    if (timelineRef.current) {
      observe.observe(timelineRef.current);
    }
    return () => {
      if (timelineRef.current) {
        observe.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div className="education">
      <h1 className="title">
        <HiAcademicCap className="icon" /> EDUCATION
      </h1>

      <div className="timeline" ref={timelineRef}>
        <div className="box left-box">
          <img src="./VCET_college.png" alt="vcet" />

          <div className="text-box">
            <h1>Bachelor Of Engineering</h1>
            <small>2018-2022</small>
            <p>Electronics And Communication</p>
            <p>Vivekananda College Of Engineering And Technology</p>
            <span className="arrow left-arrow"></span>
          </div>
        </div>
        <div className="box right-box">
          <img src="./PU-college.png" alt="pu-college" />
          <div className="text-box">
            <h1>Pre-University Course - PCMB</h1>
            <small>2016-2018</small>
            <p>Ambika PU College, Nellikatte, Puttur</p>
            <span className="right-arrow"></span>
          </div>
        </div>
        <div className="box left-box">
          <img src="./VRV-school.png" alt="vrv-school" />
          <div className="text-box">
            <h1>Secondary School Leaving Certificate</h1>
            <small>2016</small>
            <p>Vidya Rashmi Vidyalaya</p>
            <span className="arrow left-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
