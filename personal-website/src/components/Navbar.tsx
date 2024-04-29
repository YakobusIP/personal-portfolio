import React from "react";
import { useActiveSectionContext } from "@/contexts/ActiveSectionContext";
import { useScrollContext } from "@/contexts/ScrollContext";

function Navbar() {
  const { introRef, aboutRef, experienceRef, skillsRef, projectsRef } =
    useScrollContext();

  const { activeSection, setActiveSection } = useActiveSectionContext();

  const scrollToElement = (
    ref: React.RefObject<HTMLDivElement>,
    name: string
  ) => {
    if (ref.current) {
      const yOffset = -50;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(name);
    }
  };
  return (
    <nav className="flex w-full m-auto py-4 fixed top-0 z-[1] text-white bg-primary">
      <div className="flex w-4/5 justify-between items-center m-auto">
        <div className="flex items-center justify-center gap-4">
          <img src="/main-logo.png" className="w-12" />
          <h3>Yakobus Iryanto</h3>
        </div>
        <div className="flex w-2/5 justify-between">
          <p
            onClick={() => scrollToElement(introRef, "intro")}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "intro" ? "underline" : undefined
            }`}
          >
            Home
          </p>
          <p
            onClick={() => scrollToElement(aboutRef, "about")}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "about" ? "underline" : undefined
            }`}
          >
            About
          </p>
          <p
            onClick={() => scrollToElement(experienceRef, "experience")}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "experience" ? "underline" : undefined
            }`}
          >
            Experience
          </p>
          <p
            onClick={() => scrollToElement(skillsRef, "skills")}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "skills" ? "underline" : undefined
            }`}
          >
            Skills
          </p>
          <p
            onClick={() => scrollToElement(projectsRef, "projects")}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "projects" ? "underline" : undefined
            }`}
          >
            Projects
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
