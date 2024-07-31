import { useScrollContext } from "@/contexts/ScrollContext";
import NoxtExperience from "@/components/experiences/NoxtExperience";
import BangkitExperience from "@/components/experiences/BangkitExperience";
import AndalinExperience from "@/components/experiences/AndalinExperience";
import LabproExperience from "@/components/experiences/LabproExperience";

function Experience() {
  const { experienceRef } = useScrollContext();
  return (
    <section
      id="experience"
      ref={experienceRef}
      className="flex w-full h-fit bg-white text-black items-center py-8 xl:py-16"
    >
      <div className="flex flex-col w-4/5 mx-auto gap-4">
        <div className="flex flex-col">
          <h1>Experience</h1>
          <p className="[&:not(:first-child)]:mt-4 text-muted-foreground text-justify">
            Building experiences since 2022. Here's a glimpse into my
            professional journey.
          </p>
        </div>
        <NoxtExperience />
        <BangkitExperience />
        <AndalinExperience />
        <LabproExperience />
      </div>
    </section>
  );
}

export default Experience;
