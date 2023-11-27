import { useEffect } from "react";
import "./EducationCard.css";
import Aos from "aos";
import "aos/dist/aos.css";
function EducationCard({ image, education, institute, year }) {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -500 });
  }, []);
  return (
    <div className="card" data-aos="flip-left">
      <img src={image} alt="education" className="Eduimage" />
      <div className="Details">
        <h1>{education}</h1>
        <h3>{institute}</h3>
        <h2>{year}</h2>
      </div>
    </div>
  );
}
export default EducationCard;
