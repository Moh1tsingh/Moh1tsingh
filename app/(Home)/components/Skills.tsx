"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiPython,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiPrisma
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "Next js",
      icon: SiNextdotjs,
    },
    {
      title: "React js",
      icon: SiReact,
    },
    {
      title: "Typescript",
      icon: SiTypescript,
    },
    {
      title: "Javascript",
      icon: SiJavascript,
    },
    {
      title: "Node js",
      icon: SiNodedotjs,
    },

    {
      title: "Tailwind",
      icon: SiTailwindcss,
    },

    {
      title: "Github",
      icon: SiGit,
    },
    {
      title: "C++",
      icon: SiCplusplus,
    },
    {
      title: "Prisma",
      icon: SiPrisma,
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto skills-container">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-[6deg]"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
