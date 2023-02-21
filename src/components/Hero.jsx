import React from "react";
import hero from "../assets/images/hero.png";
import { Link } from "react-router-dom"

const Hero = () => {
  const social_media = [
    {
      name: "logo-github", 
      live_link:"https://github.com/Martinez0722" ,
    },
    {
      name:"logo-linkedin",
      live_link:"https://www.linkedin.com/in/rafaelfelipetech/"
    }
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Olá!
              <br />
            </span>
            Eu sou <span>Rafael</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Dev Fullstack
          </h4>
          <button className="btn-primary mt-8">Entre em contato</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.live_link} target="_blank">
                  <ion-icon name={icon.name}>
                  </ion-icon>
                </a> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;