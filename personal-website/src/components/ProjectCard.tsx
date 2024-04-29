import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type TechStackItem = {
  name: string;
  tech: string;
};

type RepositoryLinkItem = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  description: string;
  badges: Array<string>;
  details: string;
  techStack: Array<TechStackItem>;
  repositoryLinks: Array<RepositoryLinkItem>;
  tooltip: boolean;
  tooltipContent?: string;
};

function ProjectCard({
  title,
  description,
  badges,
  details,
  techStack,
  repositoryLinks,
  tooltip,
  tooltipContent
}: Props) {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => {
              return (
                <Badge key={`badge-${index}`} className="w-fit">
                  {badge}
                </Badge>
              );
            })}
          </div>
          <p>{details}</p>
          <Separator />
          <div className="flex flex-col">
            <h4>Tech Stack:</h4>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              {techStack.map((stack, index) => {
                return (
                  <li key={`${title}-stack-${index}`}>
                    {stack.name}: {stack.tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col xl:flex-row gap-4">
        {repositoryLinks.map((link, index) => {
          return tooltip ? (
            <a
              key={`${title}-repo-link-${index}`}
              href={link.href}
              target="_blank"
              className="w-full"
            >
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger className="w-full" asChild>
                    <Button className="w-full gap-2">
                      <img src="/icons/github.webp" className="w-4" />
                      {link.label}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipContent}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </a>
          ) : (
            <a
              key={`${title}-repo-link-${index}`}
              href={link.href}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full gap-2">
                <img src="/icons/github.webp" className="w-4" />
                {link.label}
              </Button>
            </a>
          );
        })}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
