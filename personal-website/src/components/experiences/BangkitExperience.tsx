import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function BangkitExperience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cloud Computing Cohort - Google Bangkit</CardTitle>
        <div className="flex flex-col xl:flex-row xl:items-center gap-2">
          <CardDescription>August 2023 - January 2024</CardDescription>
          <Badge className="w-fit">Apprenticeship</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-justify">
        <p>
          A Google-led academy designed to produce high-caliber tech talents for
          Indonesia
        </p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            Engaged in an intensive tech career readiness program designed by
            Google, focusing on developing cloud computing abilities from
            courses platform such as Dicoding, Coursera, and Google Cloud Skills
            Boost (GCSB).
          </li>
          <li>
            Achieved outstanding results, successfully completed the program, as
            well as obtaining the Associate Cloud Engineer (ACE) certification.
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col xl:flex-row gap-2">
        <a
          href="https://drive.google.com/file/d/1YQ_sPCEpSGSAyfUgNTse9pQs_IacgtNa/view?usp=sharing"
          target="_blank"
          className="w-full xl:w-fit"
        >
          <Button className="w-full xl:w-fit">Final Report</Button>
        </a>
        <a
          href="https://google.accredible.com/40740bbb-d892-4677-9bcf-1385b3c067d0"
          target="_blank"
          className="w-full xl:w-fit"
        >
          <Button className="w-full xl:w-fit">
            <div className="flex gap-2 justify-center items-center">
              <img
                src={`${import.meta.env.BASE_URL}logo/gcp.png`}
                className="h-4"
              />
              Google ACE Certificate
            </div>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default BangkitExperience;
