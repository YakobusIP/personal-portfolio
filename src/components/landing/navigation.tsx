import { cn } from "@/lib/utils";

import Image from "next/image";

type Navigation = {
  id: string;
  label: string;
};

type Props = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

export default function Navigation({ activeSection, scrollToSection }: Props) {
  const navigation: Navigation[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/main-logo.png"
              alt="Main logo"
              width={50}
              height={50}
            />
            <span className="font-semibold">Yakobus Iryanto Prasethio</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "transition-colors hover:text-blue-400 hover:cursor-pointer",
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
