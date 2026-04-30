import { RefObject } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { projectStatusColors } from "@/lib/const";
import { ProjectStatus } from "@/lib/enums";
import { cn } from "@/lib/utils";

import { IconType, SiGithub } from "@icons-pack/react-simple-icons";
import {
  CheckCircleIcon,
  ClockIcon,
  ExternalLinkIcon,
  LucideIcon
} from "lucide-react";
import Link from "next/link";

type ProjectLink = {
  label: string;
  url: string;
  icon: LucideIcon | IconType;
};

type Project = {
  title: string;
  description: string;
  year: number;
  status: ProjectStatus;
  tech: string[];
  links: ProjectLink[];
};

type Props = {
  ref: RefObject<HTMLElement | null>;
  inView: boolean;
};

export default function Projects({ ref, inView }: Props) {
  const projects: Project[] = [
    {
      title: "SuperApp Kemenkum PASTI",
      description:
        "A government application to centralize every service offered by the Indonesian Ministry of Law.",
      year: 2025,
      status: ProjectStatus.PROJECT_COMPLETED,
      tech: ["NestJS", "PostgreSQL", "Temporal.io", "Keycloak"],
      links: [
        {
          label: "Live Application",
          url: "https://pasti.kemenkum.go.id/",
          icon: ExternalLinkIcon
        }
      ]
    },
    {
      title: "Valsewa",
      description:
        "A catalog application for renting accounts in Valorant, complete with an admin panel as well as the public facing catalog.",
      year: 2025,
      status: ProjectStatus.PROJECT_COMPLETED,
      tech: ["Next.js", "React", "Express", "PostgreSQL", "AWS"],
      links: [
        {
          label: "Live Application",
          url: "https://valsewa.com",
          icon: ExternalLinkIcon
        }
      ]
    },
    {
      title: "Recruitment Plus",
      description:
        "A website for handling complex recruitment pipeline, part of the Klola HRMS. Includes 8-step pipeline orchestrated using Temporal.io for asynchronous processing and durable state execution.",
      year: 2025,
      status: ProjectStatus.PROJECT_COMPLETED,
      tech: ["Go (Huma)", "PostgreSQL", "Temporal.io", "Zitadel"],
      links: [
        {
          label: "Live Application",
          url: "https://recplus.klola.app/",
          icon: ExternalLinkIcon
        }
      ]
    },
    {
      title: "Otaku Corner",
      description:
        "A web application to track my personal anime, manga, and light novel reviews. A full-stack web application, it uses external API such as Jikan and MangaDex to fetch information, and deployed on Cloud Run for scalability.",
      year: 2025,
      status: ProjectStatus.PROJECT_IN_PROGRESS,
      tech: ["Next.js", "React", "Express", "PostgreSQL", "Vercel", "GCP"],
      links: [
        {
          label: "Live Application",
          url: "https://otaku-corner.site",
          icon: ExternalLinkIcon
        },
        {
          label: "GitHub",
          url: "https://github.com/YakobusIP/otaku-corner",
          icon: SiGithub
        }
      ]
    },
    {
      title: "Personal Chatbot",
      description:
        "A chat interface utilizing server-sent events (SSE) from OpenAI GPT APIs. Uses LangChain as the LLM framework.",
      year: 2024,
      status: ProjectStatus.PROJECT_COMPLETED,
      tech: ["React", "Express", "LangChain"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/YakobusIP/personal-chatbot",
          icon: SiGithub
        }
      ]
    },
    {
      title: "RoadToFit",
      description:
        "An android mobile app check current body state and nutritions. A group project as part of Bangkit 2023 Capstone Project. I created and deployed the consumer backend as well as the ML backend.",
      year: 2024,
      status: ProjectStatus.PROJECT_COMPLETED,
      tech: ["Express", "PostgreSQL", "GCP"],
      links: [
        {
          label: "Backend Repository",
          url: "https://github.com/RoadToFit/roadtofit-be",
          icon: SiGithub
        },
        {
          label: "Machine Learning Repository",
          url: "https://github.com/RoadToFit/RoadtoFit-ML",
          icon: SiGithub
        }
      ]
    },
    {
      title: "OSKM ITB 2023",
      description:
        "A landing page designed to help students during OSKM ITB 2023 event. I led the development of this website which includes a blog page. The blog page uses Ghost CMS to store articles.",
      year: 2023,
      status: ProjectStatus.PROJECT_COMPLETED,
      tech: ["Next.js", "tRPC", "Ghost CMS"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/KATITB2023/oskm-info",
          icon: SiGithub
        }
      ]
    },
    {
      title: "Binotify Web Music Player",
      description:
        "A simple web music player. A group project to complete the Web Based Development class. I helped develop all the components, including the Docker.",
      year: 2022,
      status: ProjectStatus.PROJECT_COMPLETED,
      tech: ["PHP", "React", "Java (SOAP)", "Express", "PostgreSQL"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/YakobusIP/Tubes-2-WBD-Binotify",
          icon: SiGithub
        }
      ]
    }
  ];

  return (
    <section ref={ref} id="projects" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My portfolio showcases a variety of projects I&apos;ve tackled, from
            simple websites to complex applications. Dive in and see how
            I&apos;ve applied my skills to solve real-world challenges.
          </p>
        </div>
        <div
          className={cn(
            "grid md:grid-cols-2 gap-8 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {projects.map((project) => {
            return (
              <Card
                key={project.title}
                className="bg-slate-800/50 p-0 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">
                        {project.year}
                      </span>
                      <Badge className={projectStatusColors[project.status]}>
                        {project.status === ProjectStatus.PROJECT_COMPLETED ? (
                          <CheckCircleIcon className="w-3 h-3" />
                        ) : (
                          <ClockIcon className="w-3 h-3" />
                        )}
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => {
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                        >
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <Button
                          key={`link-${i}`}
                          asChild
                          variant="outline"
                          className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300"
                        >
                          <Link href={link.url}>
                            <Icon className="w-4 h-4" />
                            {link.label}
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
