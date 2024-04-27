import { useEffect, useState } from "react";
import SkillProgress from "./SkillProgress";
import { Separator } from "./ui/separator";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

function Skills() {
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
    <section className="flex w-full bg-primary text-white pt-8">
      <div className="flex flex-col w-4/5 items-center justify-center mx-auto gap-16">
        <div className="flex flex-col items-center">
          <h1>Skills</h1>
          <p className="[&:not(:first-child)]:mt-4">
            Throughout my journey, I've accumulated skills and experience for
            these listed languages, frameworks, and tools.
          </p>
        </div>
        <div className="flex w-full justify-around items-end">
          <img
            className="w-[28rem] 2xl:w-[26rem] 3xl:w-[30rem]"
            src="/secondary-photo.png"
          />
          <div className="flex flex-col w-1/2 h-full gap-4">
            <div className="flex justify-between items-center">
              {skillsHeader.map((header, index) => {
                return (
                  <p
                    className={
                      current === index + 1
                        ? "text-lg font-bold"
                        : "text-base font-normal"
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
              setApi={setApi}
            >
              <CarouselContent>
                {skillsList.map((skillList) => {
                  return (
                    <CarouselItem>
                      <div className="flex flex-col gap-4">
                        {skillList.map((skill) => {
                          return (
                            <SkillProgress
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
