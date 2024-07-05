import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function NoxtExperience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fullstack Developer - Noxt</CardTitle>
        <div className="flex flex-col xl:flex-row xl:items-center gap-2">
          <CardDescription>May 2024 - Now</CardDescription>
          <Badge className="w-fit">Full-time</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-justify">
        <p>
          A software house company operating in Indonesia with the main client
          in Germany
        </p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            Took an active role in maintaining and improving the website used by
            Noxt's client in Germany
          </li>
          <li>
            Participated in building new features for the website based on each
            sprint tasks
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <p>
          Key technologies used: ReactJS, REST API, Python Django, PostgreSQL
        </p>
      </CardFooter>
    </Card>
  );
}

export default NoxtExperience;
