import { useEffect, useState } from "react";
import SkillProgress from "@/components/SkillProgress";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useScrollContext } from "@/contexts/ScrollContext";
import AutoPlay from "embla-carousel-autoplay";

function Skills() {
  const { skillsRef } = useScrollContext();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const languageSkills = [
    {
      name: "JavaScript/TypeScript",
      image_path: "/logo/javascript.png",
      ability: 80,
      experience: "2 Years"
    },
    {
      name: "Python",
      image_path: "/logo/python.png",
      ability: 70,
      experience: "1 Year"
    },
    {
      name: "Go",
      image_path: "/logo/go.png",
      ability: 70,
      experience: "6 Months"
    },
    {
      name: "Ruby",
      image_path: "/logo/ruby.png",
      ability: 60,
      experience: "3 Months"
    }
  ];

  const frameworkSkills = [
    {
      name: "React",
      image_path: "/logo/react.png",
      ability: 80,
      experience: "2 Years"
    },
    {
      name: "Vue",
      image_path: "/logo/vue.png",
      ability: 80,
      experience: "1 Year"
    },
    {
      name: "Express",
      image_path: "/logo/express.png",
      ability: 80,
      experience: "2 Years"
    },
    {
      name: "Ruby on Rails",
      image_path: "/logo/rails.png",
      ability: 60,
      experience: "3 Months"
    },
    {
      name: "Python Django",
      image_path: "/logo/django.png",
      ability: 60,
      experience: "1 Month"
    }
  ];

  const databaseSkills = [
    {
      name: "PostgreSQL",
      image_path: "/logo/postgres.png",
      ability: 80,
      experience: "2 Years"
    },
    {
      name: "MySQL",
      image_path: "/logo/mysql.png",
      ability: 70,
      experience: "1 Year"
    },
    {
      name: "MongoDB",
      image_path: "/logo/mongodb.png",
      ability: 70,
      experience: "6 Months"
    },
    {
      name: "Redis",
      image_path: "/logo/redis.png",
      ability: 60,
      experience: "3 Months"
    }
  ];

  const cloudServiceSkills = [
    {
      name: "Google Cloud Platform",
      image_path: "/logo/gcp.png",
      ability: 70,
      experience: "6 Months"
    },
    {
      name: "Netlify",
      image_path: "/logo/netlify.png",
      ability: 70,
      experience: "6 Months"
    },
    {
      name: "Vercel",
      image_path: "/logo/vercel.png",
      ability: 60,
      experience: "1 Month"
    }
  ];

  const toolSkills = [
    {
      name: "Git",
      image_path: "/logo/git.png",
      ability: 90,
      experience: "3 Years"
    },
    {
      name: "Docker",
      image_path: "/logo/docker.webp",
      ability: 70,
      experience: "1 Year"
    }
  ];

  const skillsList = [
    languageSkills,
    frameworkSkills,
    databaseSkills,
    cloudServiceSkills,
    toolSkills
  ];

  const skillsHeader = [
    "Languages",
    "Frameworks",
    "Databases",
    "Cloud Services",
    "Tools"
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section
      id="skills"
      ref={skillsRef}
      className="flex w-full bg-primary text-white pt-8 xl:pt-16"
    >
      <div className="flex flex-col w-4/5 items-center justify-center mx-auto gap-16">
        <div className="flex flex-col">
          <h1 className="text-left xl:text-center">Skills</h1>
          <p className="[&:not(:first-child)]:mt-4 text-left xl:text-center">
            I leverage a diverse toolkit of modern technologies to bring your
            web development vision to life. Explore my skillset to see how I can
            contribute to your project.
          </p>
        </div>
        <div className="flex w-full justify-around items-end">
          <img
            className="hidden xl:block w-[28rem] 2xl:w-[28rem] 3xl:w-[32rem]"
            src="/secondary-photo.png"
          />
          <div className="flex flex-col w-full xl:w-1/2 pb-8 xl:pb-16 gap-4">
            <div className="flex justify-between items-center">
              {skillsHeader.map((header, index) => {
                return (
                  <p
                    key={`skill-header-${index}`}
                    className={
                      current === index + 1
                        ? "text-lg font-bold w-full xl:w-fit text-center"
                        : "hidden xl:block text-base font-normal"
                    }
                  >
                    {header}
                  </p>
                );
              })}
            </div>
            <Separator />

            <Carousel
              className="w-full h-fit"
              opts={{ align: "start", loop: true }}
              plugins={[AutoPlay({ delay: 8000, stopOnInteraction: false })]}
              setApi={setApi}
            >
              <CarouselContent>
                {skillsList.map((skillList, index) => {
                  return (
                    <CarouselItem key={`carousel-${index}`}>
                      <div className="flex flex-col gap-4">
                        {skillList.map((skill, index) => {
                          return (
                            <SkillProgress
                              key={`skill-progress-${index}`}
                              name={skill.name}
                              image_path={skill.image_path}
                              ability={skill.ability}
                              experience={skill.experience}
                            />
                          );
                        })}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden xl:inline-flex" />
              <CarouselNext className="hidden xl:inline-flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
