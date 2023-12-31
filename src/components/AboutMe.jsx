import React from "react";

export default function AboutMe(props) {
  const { openModal } = props;
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <h1 className="font-bold text-4xl sm:text-6xl">Suraj Moolya</h1>
          <img
            className="mx-auto h-[200px] md:hidden aspect-square rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/D4D03AQF4r8cnEv0GeA/profile-displayphoto-shrink_400_400/0/1703837007458?e=1709164800&v=beta&t=3mN8jpoZHfvJhPZxHFXvUmmkIXMoGNt0A0Ka0zpuWkQ"
          />
        </div>

        <h2 className="font-medium text-slate-800 text-lg sm:text-2xl">
          Software Engineer
        </h2>
        <p className="text-slate-500">
          I Absolutely love to create fun and interesting Sites and Apps using
          Latest and Greatest technology. I am pretty sure my Apps are better
          than yours, No Doubt!
        </p>
        <div className="my-10 flex item-center gap-4 text-sm sm:text-base">
          <button
            onClick={openModal}
            className="rounded-full bg-gradient-to-r from-blue-700 to-violet-700 text-white px-4 py-2 hover:opacity-70"
          >
            projects
          </button>
          <a
            href="mailto:surajmoolya1@gmail.com"
            className="rounded-full text-purple-800 border border-solid border-violet-800 px-4 py-2 hover:opacity-70"
          >
            contact
          </a>
        </div>
      </div>
      <img
        className="mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg"
        src="https://media.licdn.com/dms/image/D4D03AQF4r8cnEv0GeA/profile-displayphoto-shrink_400_400/0/1703837007458?e=1709164800&v=beta&t=3mN8jpoZHfvJhPZxHFXvUmmkIXMoGNt0A0Ka0zpuWkQ"
      />
    </div>
  );
}
