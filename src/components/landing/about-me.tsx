import { RefObject } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon, MailIcon, MapPin, PhoneIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  ref: RefObject<HTMLElement | null>;
  inView: boolean;
};

export default function AboutMe({ ref, inView }: Props) {
  return (
    <section ref={ref} id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "grid lg:grid-cols-3 gap-12 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
            <CardContent>
              <h2 className="text-xl font-semibold mb-6 text-white">
                Personal Data
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-semibold text-sm">
                      YI
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Full name</p>
                    <p>Yakobus Iryanto Prasethio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>+62 898-7481-816</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MailIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-sm">yakobusiryantoprasethio@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p>Bandung, Indonesia</p>
                  </div>
                </div>
                <div className="flex space-x-3 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300"
                    aria-label="Link to GitHub profile"
                  >
                    <Link href="https://github.com/YakobusIP" target="_blank">
                      <SiGithub className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300"
                    aria-label="Link to LinkedIn profile"
                  >
                    <Link
                      href="https://www.linkedin.com/in/yakobus-iryanto-prasethio/"
                      target="_blank"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-gray-400">
                A final year student studying Information Technology at Institut
                Teknologi Bandung with a keen interest in the world of web
                programming.
              </p>
              <p>
                Hello! I&apos;m Yakobus Iryanto Prasethio, an aspiring web
                developer based in Indonesia. Currently studying Information
                Technology in Institut Teknologi Bandung, I have a passion for
                web development and cloud computing.
              </p>
              <p>
                Professionally, I am currently working as a full-stack developer
                at PT Noxt Teknologi Indonesia, where I&apos;m instrumental in
                adding and maintaining the company&apos;s website using React
                and Django, including improving performance for critical
                sections of the app.
              </p>
              <p>
                In my free time, I love to contribute to various projects, such
                as this personal portfolio website. My technical stack includes
                proficient use of Typescript, Python, Ruby, and Go, alongside
                frameworks such as React, Vue, and ShadCN.
              </p>
              <p>
                Driven by a blend of creativity and analytical skills, I aim to
                leverage my abilities to solve real-world problems. Nice to meet
                you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
