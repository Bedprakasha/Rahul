import React from "react";
import { experiences } from "../../constant";
import profileImage from "../../assets/profile.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg">
          A collection of my work experience and roles.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-20">
        {(experiences || []).map((experience, index) => (
          <div
            key={experience.id ?? index}
            className="relative w-full max-w-lg"
          >
            {/* 🔥 Floating Image (CENTER UNIQUE DESIGN) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p[3px]">
                <div className="w-full h-full bg-white rounded-full overflow-hidden">
                  <img
                    src={profileImage}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="pt-16 p-6 sm:p-8 rounded-2xl bg-gray-900 border border-white
              shadow-[0_0_30px_rgba(130,69,236,0.35)]
              hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
                {experience.role}
              </h3>
              <p className="text-sm text-gray-400 text-center mt-1">
                {experience.company}
              </p>
              {/* <p className="text-xs text-gray-500 text-center mt-1">
                {experience.date}
              </p> */}

              <p className="mt-4 text-gray-400 text-center">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-6">
                <h5 className="text-white font-medium text-center">Skills</h5>
                <ul className="flex flex-wrap justify-center mt-3">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-200 px-4 py-1 text-xs rounded-full m-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
