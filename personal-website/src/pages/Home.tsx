import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Separator } from "@/components/ui/separator";

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Separator className="w-4/5" />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
