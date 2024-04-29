import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useActiveSectionContext } from "@/contexts/ActiveSectionContext";
import { useScrollContext } from "@/contexts/ScrollContext";
import { useEffect } from "react";

function Home() {
  const { introRef, aboutRef, experienceRef, skillsRef, projectsRef } =
    useScrollContext();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50px 0px -50% 0px", threshold: 0.2 }
    );

    const refs = [introRef, aboutRef, experienceRef, skillsRef, projectsRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () =>
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
  }, [
    introRef,
    aboutRef,
    experienceRef,
    skillsRef,
    projectsRef,
    setActiveSection
  ]);

  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
