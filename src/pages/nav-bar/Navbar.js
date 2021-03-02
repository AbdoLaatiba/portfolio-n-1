import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="container mx-auto flex justify-between p-4">
      <div className="md:p-4">
        <span
          onClick={() => (window.location.href = "/")}
          className="text-3xl cursor-pointer"
        >
          Abdo Laatiba
        </span>
      </div>
      <div className={active ? "visible md:visible" : "hidden md:block"}>
        <ul className="md:flex">
          <a href="#">
            <li className="p-4 cursor-pointer text-2xl md:text-2xl">
              Services
            </li>
          </a>
          <a href="#about">
            <li className="p-4 cursor-pointer text-2xl md:text-2xl">About</li>
          </a>
          <a href="#">
            <li className="p-4 cursor-pointer text-2xl md:text-2xl">
              Projects
            </li>
          </a>
          <a href="#">
            <li className="p-4 cursor-pointer text-2xl md:text-2xl">Contact</li>
          </a>
        </ul>
      </div>
      <div className="visible md:hidden">
        <i
          onClick={() => setActive(!active)}
          className={active ? "fas fa-times text-3xl" : "fas fa-bars text-3xl"}
        ></i>
      </div>
    </nav>
  );
}
