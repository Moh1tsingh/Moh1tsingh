import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/mohitsingh-thakur-b6794325a",
      Label: "Linked In",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/Moh1tsingh",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://twitter.com/is_mohitsingh",
      Label: "X",
      Icon: SiX,
    },
  ];

  return (
    <nav className={cn("  navbar animate-move-down", className)}>
      <h1 className=" title-name  font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Mohitsingh 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5 ">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className=" w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
