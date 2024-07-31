import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function AndalinExperience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frontend Developer - Andalin</CardTitle>
        <div className="flex flex-col xl:flex-row xl:items-center gap-2">
          <CardDescription>May 2023 - August 2023</CardDescription>
          <Badge className="w-fit">Internship</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-justify">
        <p>A digital freight forwarder company operating in Indonesia</p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            Took an active role in the addition of front-end features and
            maintenance on Andalin's three primary websites (customer, internal,
            and company profile website) using VueJS.
          </li>
          <li>
            Updated Andalin's internal payment request system, as well as
            building duplicate RFQ and Instant Quote features from scratch.
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <p>Key technologies used: VueJS, JavaScript, REST API</p>
      </CardFooter>
    </Card>
  );
}

export default AndalinExperience;
