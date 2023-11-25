import { useEffect } from "react";
import "./Work.css";
import { useState } from "react";
import { HiChevronDown, HiChevronUp, HiDesktopComputer } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
function Work() {
  const [isExtend, setIsExtend] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  function handleCode() {
    window.open("https://github.com/Ahishree29/Treandytreasure", "_blank");
  }
  function handleView() {
    window.open("https://trendytresure.netlify.app", "_blank");
  }
  return (
    <div className="work">
      <h1 className="title">
        <HiDesktopComputer className="icon" />
        WORK
      </h1>

      <div className="workcard">
        <img src="Project.png" alt="Project" className="workImage" />
        <button onClick={() => setIsExtend(!isExtend)} className="header">
          <h3>Trendy Treasure </h3>
          <h3 style={{ fontSize: "30px" }}>
            {!isExtend ? <HiChevronDown /> : <HiChevronUp />}
          </h3>
        </button>
        {isExtend && (
          <div className="accordian" data-aos="fade-down">
            Trendy Treasure is an inclusive e-commerce platform offering a
            diverse range of clothing for men, women, boys, and girls. Users can
            explore products and sign in to access the shopping cart feature,
            receiving a welcome email upon registration. The platform enables
            seamless shopping experiences, allowing users to add items to their
            cart and proceed to order, followed by prompt order confirmation
            emails, ensuring a smooth purchasing journey.
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
    </div>
  );
}
export default Work;
