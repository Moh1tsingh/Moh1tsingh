import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      title: "Reddit Clone",
      tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql],
      link: "https://github.com/Moh1tsingh/reddit-clone",
      cover: "/Reddit-clone.png",
      background: "bg-red-500",
    },
    {
      title: "Sentilizer",
      tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql],
      link: "https://github.com/Moh1tsingh/sentilizer",
      cover: "/Sentilizer.png",
      background: "bg-indigo-500",
    },

    {
      title: "Event Manager",
      tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql],
      link: "https://github.com/Moh1tsingh/event-manager",
      cover: "/Evemg.png",
      background: "bg-pink-500",
    },
    {
      title: "DSA-With-JavaScript (NPM Library)",
      tech: [SiJavascript, SiNpm],
      link: "https://github.com/Moh1tsingh/dsa-npm-lib",
      cover: "/NPM-DSA.png",
      background: "bg-cyan-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 📋"
        className="flex flex-col items-center justify-center rotate-[4deg]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 project-container gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div
                className={cn(" project-border rounded-md", project.background)}
              >
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className=" w-full space-y-5 cursor-pointer"
                >
                  <div className=" space-y-2">
                    <h1 className=" text-2xl font-bold max-sm:text-lg">{project.title}</h1>
                    <div className="flex items-center  gap-3">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
