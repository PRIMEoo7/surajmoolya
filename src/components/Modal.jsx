import React from "react";
import ReactDom from "react-dom";
export default function Modal(props) {
  const { onClose } = props;
  const projects = [
    {
      name: "skjdf",
      link: "ksdjf",
      desc: "ksazjdfskdjfhskfdhslk sdchsjldbc sdfhsdf jdf",
      github: "skdjf",
    },
    {
      name: "skjdf",
      link: "ksdjf",
      desc: "kakjdhfkjsdhf sd;fhsdjkfh sajdf",
      github: "skdjf",
    },
    {
      name: "skjdf",
      link: "ksdjf",
      desc: "kslkajf;akdhfuadyf8abksdgadifuhaksduoas daodh akjdhau;shd adakj ajdf",
      github: "skdjf",
    },
  ];

  return ReactDom.createPortal(
    <div className="absolute top-0 left-0 w-screen h-screen text-white md:h-[80%] bg-slate-900 overflow-scroll z-50 flex flex-col gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] h-[90vh]">
      <div className="flex text-xl justify-between items-center p-4 ">
        <h2>projects</h2>
        <i
          onClick={onClose}
          className="fa-solid fa-xmark cursor-pointer text-white hover:rotate-[30deg]"
        ></i>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white md:p-1">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full aspect-video h-[200px] bg-slate-900 text-white flex flex-col gap-2 p-2"
            >
              <h1>{project.name}</h1>
              <p className="text-xs flex-1">{project.desc}</p>
              <div className="grid grid-cols-2 text-center">
                <a>Live</a>
                <a>Github</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
