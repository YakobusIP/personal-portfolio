"use client";

import { RefObject, useEffect, useRef, useState } from "react";

import AboutMe from "@/components/landing/about-me";
import Experience from "@/components/landing/experience";
import LandingFooter from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Navigation from "@/components/landing/navigation";
import Projects from "@/components/landing/projects";
import Skills from "@/components/landing/skills";

import { useInView } from "@/hooks/use-in-view";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const homeInView = useInView(homeRef, { threshold: 0.5 });
  const aboutInView = useInView(aboutRef, { threshold: 0.3 });
  const experienceInView = useInView(experienceRef, { threshold: 0.3 });
  const skillsInView = useInView(skillsRef, { threshold: 0.3 });
  const projectsInView = useInView(projectsRef, { threshold: 0.2 });

  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, RefObject<HTMLElement | null>> = {
      home: homeRef,
      about: aboutRef,
      experience: experienceRef,
      skills: skillsRef,
      projects: projectsRef
    };

    const section = sectionMap[sectionId];
    if (section?.current) {
      const navbarHeight = 72;
      const yOffset = -navbarHeight;
      const y =
        section.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (experienceInView) setActiveSection("experience");
    else if (skillsInView) setActiveSection("skills");
    else if (projectsInView) setActiveSection("projects");
  }, [homeInView, aboutInView, experienceInView, skillsInView, projectsInView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero ref={homeRef} />
      <AboutMe ref={aboutRef} inView={aboutInView} />
      <Experience ref={experienceRef} inView={experienceInView} />
      <Skills ref={skillsRef} inView={skillsInView} />
      <Projects ref={projectsRef} inView={projectsInView} />
      <LandingFooter />
    </div>
  );
}
