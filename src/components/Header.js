import { useEffect, useMemo, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";
function Header({
  scrollToRef,
  introRef,
  aboutRef,
  skillRef,
  eduRef,
  workRef,
  expRef,
}) {
  const [activeLink, setActiveLink] = useState("");
  const navRef = useRef();
  const sections = useMemo(
    () => [
      { ref: introRef, name: "Intro" },
      { ref: aboutRef, name: "About Me" },
      { ref: skillRef, name: "Skill" },
      { ref: eduRef, name: "Education" },
      { ref: workRef, name: "Work" },
      { ref: expRef, name: "Experience" },
    ],
    [introRef, aboutRef, skillRef, eduRef, workRef, expRef]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          const offsetBottom = offsetTop + section.ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          const offsetBottom = offsetTop + section.ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleSetActiveLink = (ref, linkName) => {
    if (activeLink === linkName) {
      setActiveLink("");
    } else {
      scrollToRef(ref);
      setActiveLink(linkName);
    }
  };
  const Showmenu = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="menu">
        <h1>
          {" "}
          <img className="ARPlogo" src="./ARPLogo.png" alt="ARP" />
        </h1>
        <nav className="nav" ref={navRef}>
          <div
            style={{
              color:
                activeLink === "Intro"
                  ? "rgb(203, 13, 139)"
                  : "rgb(163, 22, 195)",
            }}
            onClick={() => handleSetActiveLink(introRef, "Intro")}
          >
            Home
          </div>

          <div
            style={{
              color:
                activeLink === "About Me"
                  ? "rgb(203, 13, 139)"
                  : "rgb(163, 22, 195)",
            }}
            onClick={() => handleSetActiveLink(aboutRef, "About Me")}
          >
            About Me
          </div>

          <div
            style={{
              color:
                activeLink === "Skill"
                  ? "rgb(203, 13, 139)"
                  : "rgb(163, 22, 195)",
            }}
            onClick={() => handleSetActiveLink(skillRef, "Skill")}
          >
            Skill
          </div>

          <div
            style={{
              color:
                activeLink === "Education"
                  ? "rgb(203, 13, 139)"
                  : "rgb(163, 22, 195)",
            }}
            onClick={() => handleSetActiveLink(eduRef, "Education")}
          >
            Education
          </div>

          <div
            style={{
              color:
                activeLink === "Work"
                  ? "rgb(203, 13, 139)"
                  : "rgb(163, 22, 195)",
            }}
            onClick={() => handleSetActiveLink(workRef, "Work")}
          >
            Work
          </div>

          <div
            style={{
              color:
                activeLink === " Experience"
                  ? "rgb(203, 13, 139)"
                  : "rgb(163, 22, 195)",
            }}
            onClick={() => handleSetActiveLink(expRef, " Experience")}
          >
            Experience
          </div>
        </nav>
        <button onClick={Showmenu} className="nav_button">
          <FaBars />
        </button>
      </div>
    </>
  );
}
export default Header;
