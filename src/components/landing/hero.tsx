"use client";

import { RefObject, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { ExternalLinkIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  ref: RefObject<HTMLElement | null>;
};

export default function Hero({ ref }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={ref} id="home" className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "space-y-6 transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <div className="space-y-2">
              <p className="text-blue-400 font-medium">Hello</p>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                I&apos;m Yakobus Iryanto Prasethio
              </h1>
              <p className="text-xl text-gray-300">Web Developer</p>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Passionate developer creating innovative web solutions with modern
              technologies. Specialized in full-stack development and cloud
              computing.
            </p>
            <div className="flex space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
              >
                <Link href="mailto:yakobusiryantoprasethio.com" target="_blank">
                  <MailIcon className="w-4 h-4" />
                  Contact Me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-gray-300 transition-all duration-300 hover:cursor-pointer"
              >
                <Link
                  href="/docs/CV Yakobus Iryanto Prasethio.pdf"
                  target="_blank"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
          <div
            className={cn(
              "relative transition-all duration-1000 delay-300",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
                <Image
                  src="/my-photo.png"
                  alt="Yakobus Iryanto Prasethio"
                  height={300}
                  width={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
