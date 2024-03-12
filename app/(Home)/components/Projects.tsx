import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      title: "Tic-Tac-Toe Multiplayer Game",
      tech: [SiReact, SiTailwindcss, SiNodedotjs],
      link: "https://github.com/Moh1tsingh/tic-tac-toe-multiplayer",
      cover: "/Tic-tac-toe.png",
      background: "bg-indigo-500",
    },
    {
      title: "Animated Site",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://moh1tsingh.github.io/Animated-site/",
      cover: "/Animated-site.png",
      background: "bg-green-500",
    },
    {
      title: "Neural Network Project",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://moh1tsingh.github.io/NN-CAR/",
      cover: "/NN-Car.png",
      background: "bg-pink-500",
    },
    {
      title: "Portfolio Site",
      tech: [SiNextdotjs, SiTailwindcss, SiNodedotjs],
      link: "",
      cover: "/Portfolio-Img.png",
      background: "bg-cyan-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 📋"
        className="flex flex-col items-center justify-center rotate-[4deg]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 p-20 pt-10 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-3 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className=" w-full space-y-5 cursor-pointer"
                >
                  <div className=" space-y-2">
                    <h1 className=" text-2xl font-bold">{project.title}</h1>
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
