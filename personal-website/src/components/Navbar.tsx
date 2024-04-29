import React, { useState } from "react";
import { useActiveSectionContext } from "@/contexts/ActiveSectionContext";
import { useScrollContext } from "@/contexts/ScrollContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Navbar() {
  const { introRef, aboutRef, experienceRef, skillsRef, projectsRef } =
    useScrollContext();

  const { activeSection, setActiveSection } = useActiveSectionContext();

  const [openSheet, setOpenSheet] = useState(false);

  const scrollToElement = (
    ref: React.RefObject<HTMLDivElement>,
    name: string,
    mobile: boolean
  ) => {
    if (ref.current) {
      const yOffset = mobile ? -75 : -50;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(name);
    }

    if (mobile) {
      setOpenSheet(false);
    }
  };
  return (
    <nav className="flex w-full m-auto py-4 fixed top-0 z-[1] text-white bg-primary">
      <div className="flex w-4/5 justify-between items-center m-auto">
        <div className="flex items-center justify-center gap-4">
          <img src="/main-logo.png" className="w-12" />
          <h3 className="hidden xl:block">Yakobus Iryanto</h3>
        </div>
        <div className="hidden xl:flex w-2/5 justify-between">
          <p
            onClick={() => scrollToElement(introRef, "intro", false)}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "intro" ? "underline" : undefined
            }`}
          >
            Home
          </p>
          <p
            onClick={() => scrollToElement(aboutRef, "about", false)}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "about" ? "underline" : undefined
            }`}
          >
            About
          </p>
          <p
            onClick={() => scrollToElement(experienceRef, "experience", false)}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "experience" ? "underline" : undefined
            }`}
          >
            Experience
          </p>
          <p
            onClick={() => scrollToElement(skillsRef, "skills", false)}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "skills" ? "underline" : undefined
            }`}
          >
            Skills
          </p>
          <p
            onClick={() => scrollToElement(projectsRef, "projects", false)}
            className={`hover:cursor-pointer hover:underline underline-offset-4 ${
              activeSection === "projects" ? "underline" : undefined
            }`}
          >
            Projects
          </p>
        </div>
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger className="block xl:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col ">
                <SheetHeader>
                  <SheetTitle>
                    <img src="/main-logo.png" className="w-12" />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 pt-4">
                  <p onClick={() => scrollToElement(introRef, "intro", true)}>
                    Home
                  </p>
                  <p onClick={() => scrollToElement(aboutRef, "about", true)}>
                    About
                  </p>
                  <p
                    onClick={() =>
                      scrollToElement(experienceRef, "experience", true)
                    }
                  >
                    Experience
                  </p>
                  <p onClick={() => scrollToElement(skillsRef, "skills", true)}>
                    Skills
                  </p>
                  <p
                    onClick={() =>
                      scrollToElement(projectsRef, "projects", true)
                    }
                  >
                    Projects
                  </p>
                </div>
              </div>
              <SheetDescription className="place-content-end">
                &#169; Yakobus Iryanto Prasethio {new Date().getFullYear()}
              </SheetDescription>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
