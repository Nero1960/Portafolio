import React from "react";
import MarqueeComponent from "./MarqueeComponent";

function Skill({ name, percentage }) {
  return (
    <div className="text-base space-y-3">
      <div className="flex justify-between">
        <p className="uppercase text-grayCustom-500">{name}</p>
        <p className="text-grayCustom-500">{percentage}</p>
      </div>
      <div className="bg-darkCustom-500 w-full h-3">
      <div className={`bg-greenCustom-500 w-${percentage} h-3`}></div>

      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "html5/css3", percentage: "90%" },
    { name: "JavaScript", percentage: "80%" },
    { name: "TypeScript *", percentage: "60%" },
    { name: "React js *", percentage: "50%" },
    { name: "MongoDB / MySql *", percentage: "50%" },
    { name: "Tailwindcss", percentage: "70%" },
    { name: "Node/Express *", percentage: "60%" },
    { name: "Bootstrap", percentage: "80%" },
    { name: "Git", percentage: "60%" },
  ];

  return (
    <section id="habilidades" className="mx-5 md:mx-20 my-10 pb-10">
      <h2 className="-z-10 relative inline-block text-white font-bold text-5xl before:content-[''] before:h-3 before:w-1/2 before:ms-1 before:absolute before:bg-greenCustom-500 before:bottom-1 before:-z-10 before:shadow before:left-0">Mis Habilidades</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-x-6 gap-y-8 md:gap-y-10">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
      <p className="text-grayCustom-500 italic text-sm mt-5">* Aprendiendo</p>
      <MarqueeComponent />
    </section>
  );
}

export default Skills;