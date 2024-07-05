import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function LabproExperience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Programming Laboratory Assistant</CardTitle>
        <div className="flex flex-col xl:flex-row xl:items-center gap-2">
          <CardDescription>July 2022 - Present</CardDescription>
          <Badge className="w-fit">Lecturer Assistant</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-justify">
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            Collaborate with others on designing final assignments on
            programming specific subjects.
          </li>
          <li>
            Grade students assignment result and give constructive feedbacks.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default LabproExperience;
