import React from "react";
import Website from "../../assets/website.jpg";

export default function Projects() {
  return (
    <div className="projects md:flex">
      <div className="rounded-lg bg-white shadow-lg m-4 p-4">
        <img src={Website} alt="" className="rounded-lg mb-4 w-full" />
        <h3 className="text-2xl font-bold">Project Title</h3>
        <button className="p-4 m-4 bg-blue-600 w-11/12 rounded-lg cursor-pointer font-bold text-2xl focus:outline-none">
          View Demo
        </button>
      </div>

      <div className="rounded-lg bg-white shadow-lg m-4 p-4">
        <img src={Website} alt="" className="rounded-lg mb-4 w-full" />
        <h3 className="text-2xl font-bold">Project Title</h3>
        <button className="p-4 m-4 bg-blue-600 w-11/12 rounded-lg cursor-pointer font-bold text-2xl focus:outline-none">
          View Demo
        </button>
      </div>

      <div className="rounded-lg bg-white shadow-lg m-4 p-4">
        <img src={Website} alt="" className="rounded-lg mb-4 w-full" />
        <h3 className="text-2xl font-bold">Project Title</h3>
        <button className="p-4 m-4 bg-blue-600 w-11/12 rounded-lg cursor-pointer font-bold text-2xl focus:outline-none">
          View Demo
        </button>
      </div>

      <div className="rounded-lg bg-white shadow-lg m-4 p-4">
        <img src={Website} alt="" className="rounded-lg mb-4 w-full" />
        <h3 className="text-2xl font-bold">Project Title</h3>
        <button className="p-4 m-4 bg-blue-600 w-11/12 rounded-lg cursor-pointer font-bold text-2xl focus:outline-none">
          View Demo
        </button>
      </div>
    </div>
  );
}
