// src/components/Skills/Skills.jsx
import Tilt from "react-parallax-tilt";
import { skillsInfo } from "../../constant";


const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-300/80 mt-5 text-base sm:text-lg font-medium max-w-3xl mx-auto">
          A collection of my technical skills and expertise honed through various
          projects and experiences
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 flex flex-wrap justify-between gap-6">
        {skillsInfo.map((category) => (
          <div
            key={category.title}
            className="w-full lg:w-[48%] rounded-2xl p[1px] bg-gradient-to-r from-[#8245ec] via-white/30 to-[#8245ec]"
          >
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1200}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="rounded-2xl bg-[#0d1224]/90 backdrop-blur-xl px-6 sm:px-10 py-10 border border-white/10 shadow-[0_0_30px_rgba(130,69,236,0.18)]">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-300 text-center">
                  {category.title}
                </h3>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center gap-3 px-4 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        loading="lazy"
                      />
                      <span className="text-sm sm:text-base text-gray-200/90 font-medium whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
