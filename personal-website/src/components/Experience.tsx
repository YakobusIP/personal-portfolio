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
import { useScrollContext } from "@/contexts/ScrollContext";

function Experience() {
  const { experienceRef } = useScrollContext();
  return (
    <section
      id="experience"
      ref={experienceRef}
      className="flex w-full h-fit bg-white text-black items-center py-8 xl:py-16"
    >
      <div className="flex flex-col w-4/5 mx-auto gap-4">
        <div className="flex flex-col">
          <h1>Experience</h1>
          <p className="[&:not(:first-child)]:mt-4 text-muted-foreground">
            Building experiences since 2022. Here's a glimpse into my
            professional journey.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Cloud Computing Cohort - Google Bangkit</CardTitle>
            <div className="flex flex-col xl:flex-row xl:items-center gap-2">
              <CardDescription>August 2023 - January 2024</CardDescription>
              <Badge className="w-fit">Apprenticeship</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              A Google-led academy designed to produce high-caliber tech talents
              for Indonesia
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>
                Engaged in an intensive tech career readiness program designed
                by Google, focusing on developing cloud computing abilities from
                courses platform such as Dicoding, Coursera, and Google Cloud
                Skills Boost (GCSB).
              </li>
              <li>
                Achieved outstanding results, successfully completed the
                program, as well as obtaining the Associate Cloud Engineer (ACE)
                certification.
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
                  <img src="/logo/gcp.png" className="h-4" />
                  Google ACE Certificate
                </div>
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frontend Developer - Andalin</CardTitle>
            <div className="flex flex-col xl:flex-row xl:items-center gap-2">
              <CardDescription>May 2023 - August 2023</CardDescription>
              <Badge className="w-fit">Internship</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p>A digital freight forwarder company operating in Indonesia</p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>
                Took an active role in the addition of front-end features and
                maintenance on Andalin's three primary websites (customer,
                internal, and company profile website) using VueJS.
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

        <Card>
          <CardHeader>
            <CardTitle>Programming Laboratory Assistant</CardTitle>
            <div className="flex flex-col xl:flex-row xl:items-center gap-2">
              <CardDescription>July 2022 - Present</CardDescription>
              <Badge className="w-fit">Lecturer Assistant</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>
                Collaborate with others on designing final assignments on
                programming specific subjects.
              </li>
              <li>
                Grade students assignment result and give constructive
                feedbacks.
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <p>Key technologies used: VueJS, JavaScript, REST API</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default Experience;
