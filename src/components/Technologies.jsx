import React from "react";

const Technologies = () => {
  const technologies = [
    "/html.svg",
    "/css.svg",
    "/javascript.svg",
    "/react.svg",
    "/redux.svg",
    "/boot.svg",
    "/tailwind.svg",
    "/sass.svg",
    "/github.svg",
    "/greensock.svg",
    "/vscode.svg",
    "/git2.svg",
  ];
  return (
    <div id="tech" className="md:mt-[330px] mt-10">
      <div className="text-center">
        <h2 className="text-[#42446E] md:text-5xl text-2xl font-bold">
          My Tech Stack
        </h2>
        <p className="md:text-[32px] text-xl  text-[#666666] mt-[49px]">
          {" "}
          Technologies I've been working with recently
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 md:gap-[103px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-10 md:mt-[146px]">
        {technologies.map((t) => (
          <img src={t} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
