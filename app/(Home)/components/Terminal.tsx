"use client"
import {  useEffect, useRef, useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [historyCount, setHistoryCount] = useState(0);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    if(terminalRef.current){
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  },[output])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setHistoryCount(0);
      switch (input) {
        case "skills":
            let skills =
            "1] Languages :\nHtml\nJavascript\nTypescript\nC++\nPython \n2] Libraries, Frameworks and Tools :\nNextjs\nReact\nNodejs\nTailwind\nPrisma(ORM) - Postgress\nSupabase\nGit-Github";
            setOutput([...output, input + " //your input", ...skills.split("\n")]);
            setInputHistory([...inputHistory, input]);
            setInput("");
            break
        case "":
            setOutput([...output, input]);
            setInput("");
            break
        case "projects":
            let projects =
              "These are some of my best projects that i have built till now :\na.Reddit Clone: A complete clone of reddit where you can create communities and upload posts. Made using Nextjs, Tailwind, Postgress(Supabase), Prisma and Kinde(Auth).\nb.Event Manager: An Event manager app where you can create events, get sharable links for rsvp's that you can share with you audience and see all the enrolled people. Made in Nextjs, Tailwind, Postgress(Supabase), Prisma and Kinde(Auth)\nc.CloneGram: A social media web app where users can sign in and upload photos and create their profiles. Made using Nextjs, Tailwind, Postgres(Supabase), Prisma and Next-Auth\nd.Tic-Tac-Toe-Multiplayer: A multiplayer tic-tac-toe game where users can create/join rooms to play tic-tac-toe. Made using React, Socket.io(websockets)";
            setOutput([
              ...output,
              input + " //your input",
              ...projects.split("\n"),
            ]);
            setInputHistory([...inputHistory, input]);
            setInput("");
            break
        case "about":
          let about = "I am Mohitsingh Thakur, a student currently in the final year of pursuing B.tech in Computer Science and Engineering. A passionate full stack developer who likes to build stuff that people like. :)"
          setOutput([...output, input + " //your input", about]);
          setInputHistory([...inputHistory, input]);
          setInput("");
          break
        case "help":
          let l1 =
            "The following are the available commands:\n1.about - about me \n2.cls - clears the screen\n3.project - projects that i have built\n4.skills - my skills and tech stack\n5.help - that's a secret.";
          setOutput([...output, ...l1.split("\n")]);
          setInputHistory([...inputHistory, input]);
          setInput("");
          break;
        case "cls":
          setOutput([]);
          setInputHistory([...inputHistory, input]);
          setInput("");
          break;
        default:
          setOutput([...output, "'" + input + "'" + " - Unknown command"]);
          setInputHistory([...inputHistory, input]);
          setInput("");
          break;
      }
    } else if (e.key === "ArrowUp") {
      setInput(inputHistory[inputHistory.length - historyCount - 1]);
      setHistoryCount((prev) => (prev + 1) % inputHistory.length);
    } else if (e.key === "ArrowDown") {
      setInput(inputHistory[historyCount]);
      setHistoryCount((prev) => (prev + 1) % inputHistory.length);
    }
  }
  return (
    <div className="  w-[720px] h-[500px] bg-neutral-900 rounded-lg border border-zinc-700 relative font-mono      ">
      <div className=" h-9 bg-neutral-800 w-full rounded-t-lg flex justify-between">
        <div className=" flex gap-2 items-center pl-3">
          <div className=" rounded-full bg-red-600 size-5"></div>
          <div className=" rounded-full bg-yellow-600 size-5"></div>
          <div className=" rounded-full bg-green-600 size-5"></div>
        </div>
        <h1 className=" text-neutral-400 font-mono absolute top-1 left-1/2 translate-x-[-50%]">
          Mohitsingh - terminal~
        </h1>
      </div>
      <div ref={terminalRef} className=" w-full max-h-[460px] overflow-auto">
        {output.map((text, i) => (
          <div
            key={i}
            className="text-white/70 font-semibold pl-2 w-full flex flex-wrap"
          >
            <span className="text-slate-600/70 font-semibold mr-2">
              ~/Portfolio/terminal $
            </span>
            <span className="break-words">{text}</span>
          </div>
        ))}

        <div className=" w-full px-2 font-mono flex">
          <h1 className="text-green-500 font-semibold">
            ~/Portfolio/terminal $
          </h1>
          <input
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            placeholder={output.length === 0 ? "type 'help' to get started":""}
            spellCheck="false"
            className="w-[70%] pl-2 border-none outline-none bg-transparent text-white font-semibold"
          />
        </div>
      </div>
    </div>
  );
}
