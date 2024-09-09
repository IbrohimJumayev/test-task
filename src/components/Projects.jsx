import React from "react";

const Projects = () => {
  const projectsImages = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
  ];
  return (
    <div id="projects">
      <div className="text-center mt-16 md:mt-[214px]">
        <h3 className="text-[#42446E] text-3xl md:text-5xl font-bold">
          Projects
        </h3>
        <p className="text-[#666666] text-2xl md:text-[32px] mt-3 md:mt-[49px]">
          Things I've built so far
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[45px] mt-10 md:mt-24">
        {projectsImages.map((p) => (
          <li className="flex-col items-center list-none w-full shadow-xl rounded-2xl bg-white">
            <img className="w-full" src={p} alt="" />
            <div className="px-6">
              <h3 className="font-medium text-xl sm:text-[28px] mt-[27px]">
                Project Tile goes here
              </h3>
              <p className="mt-[17px] text-[#666666] font-light text-base sm:text-lg">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <p className="mt-3 font-light text-sm">
                Tech stack : HTML , JavaScript, SASS, React
              </p>
              <div className="flex justify-between mt-5 mb-6">
                <div className="flex gap-[10px]">
                  <img src="/link.svg" alt="" />
                  <p className="underline font-light text-sm">Live Preview</p>
                </div>
                <div className="flex gap-[10px]">
                  <img className="w-5" src="/git2.svg" alt="" />
                  <p className="underline font-light text-sm">View Code</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Projects;
