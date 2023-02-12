import React from "react";
import hireme from '../assets/images/hireMe.png'

const Hireme = () => {
  return (
  <section id="hireme" className="py-10 px-3 text-white">
    <div className="text-center">
      <h3 className="text-4xl font-semibold">
        Contrate <span className="text-cyan-600">me</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">Se interessou ?</p>
    </div>
    <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl 
    mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse 
    items-center">
      <div>
        <h2 className="text-2xl font-semibold">Gostaria de me contatar ?</h2>
        <p className="lg:text-left text-justify text-sm mt-4 text-gray-200 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat minima veritatis sapiente asperiores accusantium. Deserunt, ipsam! Libero ex tempora earum, amet reiciendis repellendus consequatur aliquid tenetur, mollitia cum distinctio totam.
        </p>
        <button className="btn-primary mt-10">Diga olá</button>
      </div>
      <img 
        src={hireme} 
        alt="" 
        className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
      />
    </div>
  </section>
  );
};

export default Hireme;
