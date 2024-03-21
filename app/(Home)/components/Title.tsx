import React from 'react'

function Title({text,className}:{text:string , className?:string}) {
  return (
    <div className={className}>
      <h1 className="contact-me font-bold group-hover:text-green-400 transition-all">
        {text}
      </h1>
      <div className=" contact-me-border bg-green-500 rounded-full"></div>
      <div className="contact-me-border bg-indigo-500 translate-x-2 rounded-full"></div>
    </div>
  );
}

export default Title