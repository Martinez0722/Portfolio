import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper"

import "swiper/css";
import "swiper/css/pagination";

import project1 from '../assets/images/project-1.jpg';

const Project = () => {
  const projetos = [
    { },{}]
  return (
  <section id="projects" className="py-10 text-white">
    <div className="text-center">
      <h3 className="text-4xl font-semibold">
       Meus <span className="text-cyan-600">Projetos</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">Meus trabalhos incríveis</p>
    </div>
    <br />
    <div className="flex max-1-6xl px-5 mx-auto items-center relative">
      <div className="lg:w-2/3 w-full justify-center">
        <Swiper 
          slidePerview={1.2} 
          spaceBetween={20} 
          breakpoints={{
            768:{
              slidesPerView:2
            },
          }}
          loop={true} 
          autoplay={{
            delay:3000,
          }}
          pagination={{
            clickable:true,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
              <img src={project1} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">Reactube</h3>
              <div className="flex gap-3">
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Github</a>
                <a href="" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Link</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>);
};

export default Project;
