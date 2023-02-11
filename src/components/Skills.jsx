import React from "react";

const Skills = () => {
  const skills = [
    {
      logo:'logo-html5', level:'Advance', count:86
    }, 
    {
      logo:'logo-html5', level:'Advance', count:86
    }, 
    {
      logo:'logo-html5', level:'Advance', count:86
    }, 
    {
      logo:'logo-html5', level:'Advance', count:86
    }, 
    {
      logo:'logo-html5', level:'Advance', count:86
    } 
  ]
  return (
  <section id="skills" className="py-10 bg-gray-800 relative">
    <div className="mt-8 text-gray-100 text-center">
      <h3 className="text-4xl font-semibold"> 
        Minhas <span className="text-cyan-600">Habilidades</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">Meus conhecimentos</p>
      <div className="flex item-center justify-center mt-12 gap-10 flex-wrap">
        <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
          <div style={{
            background:`conic-gradient(rgb(8,145,170) 86%, #ddd 86%)`
          }} className="w-32 h-32 flex items-center justify-center rounded-full">
            <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center">
              <ion-icon name="logo-html5"></ion-icon>
            </div>
          </div>
          <p className="text-xl mt-3">HTML5</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Skills;
