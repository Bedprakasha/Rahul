import React from "react";
import { education } from "../../constant";


const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-800 border-4 border-purple-500 w-14 h-14 rounded-full flex items-center justify-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } ml-8 transform transition duration-300 hover:scale-105`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-300">{edu.school}</p>
                  {/* <p className="text-xs text-gray-500 mt-1">{edu.date}</p> */}
                </div>
              </div>

              {/* Details */}
              <p className="mt-4 text-gray-400 font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
