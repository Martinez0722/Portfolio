import React from "react";
import { DiDjango } from "react-icons/di" 

const Skills = () => {
  const skills = [ 
    {
      logo: 'logo-html5', level:'Advanced', count: 86
    },
    {
      logo: 'logo-css3', level:'Advanced', count: 86
    },
    {
      logo: 'logo-javascript', level:'Advanced', count: 86
    },
    {
      logo: 'logo-react', level:'Advanced', count: 86
    },
    {
      logo: 'logo-nodejs', level:'intermediate', count: 80
    },
    {
      logo: 'logo-python', level:'Advanced', count: 80
    },
    {
      logo: 'logo-docker', level:'Advanced', count: 80
    },
    {
      logo: 'git-branch', level:'Advanced', count: 80
    },
    {
      logo: 'logo-github', level:'Advanced', count: 80
    },
  ]
  return (
  <section id="skills" className="py-10 bg-gray-800 relative">
    <div className="mt-8 text-gray-100 text-center">
      <h3 className="text-4xl font-semibold">
        Minhas <span className="text-cyan-600">Habilidades</span></h3>
      <p className="text-gray-400 mt-3 text-lg">Meus conhecimentos</p>
      <div className="flex items-center justify-center mt-12 gap-2 flex-wrap">
        {
          skills?.map((skill, i)=>(
              <div key={i} className="border-2 group border-cyan-600 relative min-w-[10rem]
                max-w[16rem] bg-gray-900 p-10 rounded-xl">
                  <div 
                    style={{
                    background:`conic-gradient(rgb(8,146,170) ${skill.count}%, #ddd ${skill.count}%)`,
                    }} 
                      className="w-32 h-32 flex items-center justify-center 
                      rounded-full">
                      <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex
                        items-center justify-center group-hover:text-cyan-600">
                        <ion-icon name={skill.logo}></ion-icon>
                      </div>
                  </div>
                <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))
        }
      </div>
    </div>
  </section>
  )
};

export default Skills;
