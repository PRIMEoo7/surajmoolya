import React from "react";

export default function Skills() {
  const ski = {
    CSharp: ["ASP.NET", ".NET Core", "Web-forms", "MVC"],
    JavaScript: ["React", "Node.js"],
    Web: [
      "Saas",
      "TailwindCSS",
      "SQL",
      "GIT",
      "Azure DevOps",
      "Azure Cloud",
      "GCP",
    ],
    LowCode: ["Workato", "Yellow.ai"],
  };
  return (
    <div className="shadow-xl p-3 bg-white rounded flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Info</h1>
        <div
          className="flex items-center gap-1 text-base relative after:absolute after:bottom-0
        after:w-full after:h-[2px] after:right-full after:bg-purple-700
        hover:after:translate-x-full after:duration-300 overflow-hidden"
        >
          <h3 className="font-semibold">Email</h3>
          <a href="mailto:surajmoolya1@gmail.com" className="text-cyan-500">
            surajmoolya1@gmail.com
          </a>
        </div>
        <div
          className="flex items-center gap-1 text-base relative after:absolute after:bottom-0
        after:w-full after:h-[2px] after:right-full after:bg-purple-700
        hover:after:translate-x-full after:duration-300 overflow-hidden"
        >
          <h3 className="font-semibold">GitHub</h3>
          <a href="mailto:surajmoolya1@gmail.com" className="text-cyan-500">
            surajmoolya1@gmail.com
          </a>
        </div>
        <div
          className="flex items-center gap-1 text-base relative after:absolute after:bottom-0
        after:w-full after:h-[2px] after:right-full after:bg-purple-700
        hover:after:translate-x-full after:duration-300 overflow-hidden"
        >
          <h3 className="font-semibold">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/suraj-moolya-9727291b6"
            className="text-cyan-500"
          >
            surajmoolya
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-4xl">Skills</h1>
        <div className="flex flex-col gap-1">
          {Object.keys(ski).map((keyName, index) => {
            return (
              <div className="text-lg" key={index}>
                <h3>{keyName}</h3>
                <div className="flex items-stretch gap-2 overflow-scroll">
                  {ski[keyName].map((skill, i) => {
                    return (
                      <div
                        key={i}
                        className="rounded bg-gradient-to-r from-blue-700 to-violet-700 text-white px-2 py-1 text-xs whitespace-nowrap"
                      >
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl">Just for fun</h1>
        <div className="flex item-center flex-wrap text-lg p-4 gap-3">
          <i className="fa-solid fa-code"></i>
          <i className="fa-solid fa-music"></i>
          <i className="fa-solid fa-mug-hot"></i>
          <i className="fa-solid fa-gamepad"></i>
        </div>
      </div>
    </div>
  );
}
