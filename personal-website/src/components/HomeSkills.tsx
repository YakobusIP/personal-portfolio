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

function HomeSkills() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="flex w-full bg-primary text-white pt-8">
      <div className="flex flex-col w-4/5 items-center justify-center mx-auto gap-8">
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
          <div className="flex flex-col w-1/2 h-full gap-4 justify-center">
            <div className="flex justify-between items-center">
              <p
                className={
                  current === 1 ? "text-lg font-bold" : "text-base font-normal"
                }
              >
                Languages
              </p>
              <p
                className={
                  current === 2 ? "text-lg font-bold" : "text-base font-normal"
                }
              >
                Frameworks
              </p>
              <p
                className={
                  current === 3 ? "text-lg font-bold" : "text-base font-normal"
                }
              >
                Databases
              </p>
              <p
                className={
                  current === 4 ? "text-lg font-bold" : "text-base font-normal"
                }
              >
                Cloud Services
              </p>
              <p
                className={
                  current === 5 ? "text-lg font-bold" : "text-base font-normal"
                }
              >
                Tools
              </p>
            </div>
            <Separator />
            <Carousel
              className="w-full h-fit"
              opts={{ align: "start", loop: true }}
              setApi={setApi}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="flex flex-col gap-6">
                    <SkillProgress
                      name="JavaScript/TypeScript"
                      image_path="/logo/javascript.png"
                      ability={80}
                    />
                    <SkillProgress
                      name="Python"
                      image_path="/logo/python.png"
                      ability={70}
                    />
                    <SkillProgress
                      name="Go"
                      image_path="/logo/go.png"
                      ability={70}
                    />
                    <SkillProgress
                      name="Ruby"
                      image_path="/logo/ruby.png"
                      ability={60}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex flex-col gap-6">
                    <SkillProgress
                      name="React"
                      image_path="/logo/react.png"
                      ability={80}
                    />
                    <SkillProgress
                      name="Vue"
                      image_path="/logo/vue.png"
                      ability={80}
                    />
                    <SkillProgress
                      name="Express"
                      image_path="/logo/express.png"
                      ability={80}
                    />
                    <SkillProgress
                      name="Ruby on Rails"
                      image_path="/logo/rails.png"
                      ability={60}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex flex-col gap-6">
                    <SkillProgress
                      name="PostgreSQL"
                      image_path="/logo/postgres.png"
                      ability={80}
                    />
                    <SkillProgress
                      name="MySQL"
                      image_path="/logo/mysql.png"
                      ability={70}
                    />
                    <SkillProgress
                      name="MongoDB"
                      image_path="/logo/mongodb.png"
                      ability={70}
                    />
                    <SkillProgress
                      name="Redis"
                      image_path="/logo/redis.png"
                      ability={60}
                    />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex flex-col gap-6">
                    <SkillProgress
                      name="Google Cloud Platform"
                      image_path="/logo/gcp.png"
                      ability={70}
                    />
                    <SkillProgress
                      name="Netlify"
                      image_path="/logo/netlify.png"
                      ability={70}
                    />
                    <SkillProgress
                      name="Vercel"
                      image_path="/logo/vercel.png"
                      ability={60}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex flex-col gap-6">
                    <SkillProgress
                      name="Git"
                      image_path="/logo/git.png"
                      ability={80}
                    />
                    <SkillProgress
                      name="Docker"
                      image_path="/logo/docker.webp"
                      ability={70}
                    />
                  </div>
                </CarouselItem>
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

export default HomeSkills;
