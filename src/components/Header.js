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
  contactRef,
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
      { ref: contactRef, name: "" },
    ],
    [introRef, aboutRef, skillRef, eduRef, workRef, expRef, contactRef]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop - 100;
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
    <div className="menu">
      <h1>
        <img className="ARPlogo" src="./ARPLogo.png" alt="ARP" />
      </h1>
      <nav onClick={Showmenu} className="nav_button">
        <FaBars />
      </nav>
      <nav className="nav" ref={navRef}>
        {sections.map((section) => (
          <div
            key={section.name}
            className="items"
            style={{
              color:
                activeLink === section.name
                  ? "rgb(255,255,255)"
                  : "rgb(3, 208, 254)",
            }}
            onClick={() => handleSetActiveLink(section.ref, section.name)}
          >
            {section.name}
          </div>
        ))}
      </nav>
    </div>
  );
}
export default Header;
