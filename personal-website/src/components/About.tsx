import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function About() {
  return (
    <section className="flex w-full h-fit bg-white text-black items-center py-16">
      <div className="flex w-4/5 items-center justify-around mx-auto">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Personal Data</CardTitle>
            <CardDescription>
              Feel free to connect using the information below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="font-bold">Full name</p>
                <p>Yakobus Iryanto Prasethio</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Phone number</p>
                <p>+62 898-748-1816</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Email</p>
                <p>yakobusiryantoprasethio@gmail.com</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Nationality</p>
                <p>Indonesian</p>
              </div>
              <Separator />
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download my CV
            </Button>
          </CardFooter>
        </Card>
        <div className="w-3/5">
          <h1>About Me</h1>
          <p className="[&:not(:first-child)]:mt-4 text-muted-foreground">
            A final year student studying Information Technology at Institut
            Teknologi Bandung with a keen interest in the world of web
            programming.
          </p>
          <p className="[&:not(:first-child)]:mt-6">
            Hello! I'm Yakobus Iryanto Prasethio, an aspiring web developer
            based in Indonesia. Currently studying Information Technology in
            Institut Teknologi Bandung, I have a passion for web development and
            cloud computing.
          </p>
          <p className="[&:not(:first-child)]:mt-6">
            Professionally, I interned as a Frontend Developer at Andalin, where
            I was instrumental in enhancing the user interface of the company's
            websites using VueJS, and innovating payment and quote request
            features.
          </p>
          <p className="[&:not(:first-child)]:mt-6">
            In my free time, I love to contribute to various projects, such as
            this personal portfolio website. My technical stack includes
            proficient use of Typescript, Python, Ruby, and Go, alongside
            frameworks such as React, Vue, and ChakraUI.
          </p>
          <p className="[&:not(:first-child)]:mt-6">
            Driven by a blend of creativity and analytical skills, I aim to
            leverage my abilities to solve real-world problems. Nice to meet
            you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
