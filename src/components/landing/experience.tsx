import { Fragment, ReactNode, RefObject } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { experienceTypeColors } from "@/lib/const";
import { ExperienceType } from "@/lib/enums";
import { cn } from "@/lib/utils";

import { SiGooglecloud } from "@icons-pack/react-simple-icons";
import {
  BuildingIcon,
  CalendarIcon,
  FileTextIcon,
  StarIcon
} from "lucide-react";
import Link from "next/link";

type Experience = {
  title: string;
  description?: string;
  company: string;
  period: string;
  type: ExperienceType;
  achievements: string[];
  footer?: ReactNode;
};

type Props = {
  ref: RefObject<HTMLElement | null>;
  inView: boolean;
};

export default function Experience({ ref, inView }: Props) {
  const experiences: Experience[] = [
    {
      title: "Fullstack Developer",
      description:
        "A software house company operating in Indonesia with the main client in Germany",
      company: "PT Noxt Teknologi Indonesia",
      period: "May 2024 - Now",
      type: ExperienceType.FULL_TIME,
      achievements: [
        "Increased statistics page performance by 50% from eliminating N+1 queries and prefetching related data.",
        "Updated the mobile view of every single page within the website to be responsive.",
        "Improved lead appointments scheduling by implementing a map for all available leads.",
        "Resolved 50+ issues within 6 months."
      ]
    },
    {
      title: "Cloud Computing Cohort",
      description:
        "A Google-led academy designed to produce high-caliber tech talents for Indonesia",
      company: "Google Bangkit",
      period: "August 2023 - January 2024",
      type: ExperienceType.APPRENTICESHIP,
      achievements: [
        "Engaged in an intensive tech career readiness program designed by Google, focusing on developing cloud computing abilities from courses platform such as Dicoding, Coursera, and Google Cloud Skills Boost (GCSB).",
        "Achieved outstanding results, successfully completed the program, as well as obtaining the Associate Cloud Engineer (ACE) certification."
      ],
      footer: (
        <div className="pt-4 border-t border-slate-700/50 space-x-2 space-y-2">
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300 hover:cursor-pointer"
          >
            <Link
              href="https://drive.google.com/file/d/1YQ_sPCEpSGSAyfUgNTse9pQs_IacgtNa/view?usp=sharing"
              target="_blank"
            >
              <FileTextIcon className="w-4 h-4" />
              View Final Report
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300 hover:cursor-pointer"
          >
            <Link
              href="https://google.accredible.com/40740bbb-d892-4677-9bcf-1385b3c067d0"
              target="_blank"
            >
              <SiGooglecloud className="w-4 h-4" />
              View Google ACE Certificate
            </Link>
          </Button>
        </div>
      )
    },
    {
      title: "Frontend Developer",
      description: "A digital freight forwarder company operating in Indonesia",
      company: "PT Eximku Logistik Indonesia (Andalin)",
      period: "May 2023 - August 2023",
      type: ExperienceType.INTERNSHIP,
      achievements: [
        "Contribute to the addition of features and maintenance on Andalin's 3 website.",
        "Updated payment request system, adding duplicate RFQ and Instant Quote feature."
      ]
    },
    {
      title: "Programming Laboratory Assistant",
      company: "Programming Laboratory - Institut Teknologi Bandung",
      period: "July 2022 - July 2024",
      type: ExperienceType.PART_TIME,
      achievements: [
        "Collaborate with other assistants on designing final assignments on programming specific subjects.",
        "Grade students assignment result and give constructive feedbacks."
      ]
    }
  ];

  return (
    <section ref={ref} id="experience" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Experience
        </h2>
        <div
          className={cn(
            "space-y-8 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {experiences.map((exp, index) => {
            return (
              <Card
                key={`${exp.title}-${index}`}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <CardContent className="px-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h3>
                        <Badge
                          className={cn("ml-2", experienceTypeColors[exp.type])}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-400">
                        <BuildingIcon className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300 mt-2 md:mt-0">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  {exp.description ? (
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                  ) : null}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement) => {
                      return (
                        <li
                          key={achievement}
                          className="flex items-center space-x-2 text-gray-300"
                        >
                          <StarIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {exp.footer ? <Fragment>{exp.footer}</Fragment> : null}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
