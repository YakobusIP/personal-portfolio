"use client";

import { RefObject, useState } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

type Skill = {
  name: string;
  level: number;
  proficiency: string;
  color: string;
};

type SkillCategories = {
  name: string;
  skills: Skill[];
};

type Props = {
  ref: RefObject<HTMLElement | null>;
  inView: boolean;
};

export default function Skills({ ref, inView }: Props) {
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0);

  const skillCategories: SkillCategories[] = [
    {
      name: "Languages",
      skills: [
        {
          name: "JavaScript",
          level: 90,
          proficiency: "Expert",
          color: "bg-yellow-500"
        },
        {
          name: "TypeScript",
          level: 85,
          proficiency: "Proficient",
          color: "bg-blue-700"
        },
        {
          name: "Python",
          level: 80,
          proficiency: "Proficient",
          color: "bg-blue-500"
        },
        {
          name: "Go",
          level: 75,
          proficiency: "Comfortable",
          color: "bg-cyan-500"
        },
        { name: "Ruby", level: 60, proficiency: "Basic", color: "bg-red-500" }
      ]
    },
    {
      name: "Frameworks",
      skills: [
        {
          name: "React",
          level: 90,
          proficiency: "Expert",
          color: "bg-blue-500"
        },
        {
          name: "Express",
          level: 80,
          proficiency: "Proficient",
          color: "bg-gray-600"
        },
        {
          name: "Python Django",
          level: 80,
          proficiency: "Proficient",
          color: "bg-green-800"
        },
        {
          name: "Vue",
          level: 70,
          proficiency: "Comfortable",
          color: "bg-green-600"
        },
        {
          name: "Ruby on Rails",
          level: 65,
          proficiency: "Basic",
          color: "bg-red-500"
        }
      ]
    },
    {
      name: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          level: 85,
          proficiency: "Proficient",
          color: "bg-blue-800"
        },
        {
          name: "MongoDB",
          level: 70,
          proficiency: "Comfortable",
          color: "bg-green-700"
        },
        { name: "Redis", level: 65, proficiency: "Basic", color: "bg-red-600" }
      ]
    },
    {
      name: "Cloud Services",
      skills: [
        {
          name: "Google Cloud",
          level: 85,
          proficiency: "Proficient",
          color: "bg-blue-500"
        },
        {
          name: "Vercel",
          level: 75,
          proficiency: "Comfortable",
          color: "bg-gray-900"
        },
        {
          name: "Netlify",
          level: 70,
          proficiency: "Comfortable",
          color: "bg-teal-600"
        },
        {
          name: "AWS",
          level: 65,
          proficiency: "Basic",
          color: "bg-orange-500"
        }
      ]
    },
    {
      name: "Tools",
      skills: [
        {
          name: "Git",
          level: 90,
          proficiency: "Expert",
          color: "bg-orange-600"
        },
        {
          name: "Docker",
          level: 75,
          proficiency: "Comfortable",
          color: "bg-blue-600"
        },
        {
          name: "Temporal",
          level: 70,
          proficiency: "Comfortable",
          color: "bg-purple-500"
        },
        {
          name: "Postman",
          level: 65,
          proficiency: "Basic",
          color: "bg-orange-500"
        }
      ]
    }
  ];

  const nextSkillCategory = () => {
    setCurrentSkillCategory((prev) =>
      prev === skillCategories.length - 1 ? 0 : prev + 1
    );
  };

  const prevSkillCategory = () => {
    setCurrentSkillCategory((prev) =>
      prev === 0 ? skillCategories.length - 1 : prev - 1
    );
  };

  return (
    <section ref={ref} id="skills" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I leverage a diverse toolkit of modern technologies to bring your
              web development vision to life. Explore my technical skills and
              see how I can contribute to your project.
            </p>

            <div className="relative">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">
                  {skillCategories[currentSkillCategory].name}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300 hover:cursor-pointer"
                    onClick={prevSkillCategory}
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300 hover:cursor-pointer"
                    onClick={nextSkillCategory}
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="h-[300px] overflow-hidden">
                <div className="space-y-6">
                  {skillCategories[currentSkillCategory].skills.map(
                    (skill, index) => {
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">
                              {skill.name}
                            </span>
                            <span className="text-gray-400">
                              {skill.proficiency}
                            </span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className={cn(
                                "h-2 rounded-full transition-all duration-1000 ease-out",
                                skill.color
                              )}
                              style={{
                                width: inView ? `${skill.level}%` : "0%"
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-8">
                {skillCategories.map((category, index) => {
                  return (
                    <button
                      key={category.name}
                      onClick={() => setCurrentSkillCategory(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentSkillCategory === index
                          ? "bg-blue-400 w-4"
                          : "bg-gray-500"
                      )}
                      aria-label={`Go to ${category.name} skills`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
              <Image
                src="/secondary-photo.png"
                alt="Yakobus Iryanto Prasethio"
                height={300}
                width={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
