import React from "react";
import Web from "../../assets/browser.png";
import Mobile from "../../assets/smartphone.png";
import Customize from "../../assets/browser.png";
import Landing from "../../assets/web-design.png";

export default function Services() {
  return (
    <div className="services md:flex">
      <div className="rounded-lg bg-white shadow-lg m-4 p-4 hover:bg-green-600 cursor-pointer transition duration-700 hover:scale-105 ease-in-out transform">
        <img src={Web} alt="" className="rounded-lg mx-auto m-4 w-8/12" />
        <p>
          <h3>Resonsive modern websites</h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          molestiae vel sunt dolor sed quasi facilis, odio molestias vitae sint.
        </p>
      </div>

      <div className="rounded-lg bg-white shadow-lg m-4 p-4 hover:bg-green-600 cursor-pointer transition duration-700 hover:scale-105 ease-in-out transform">
        <img src={Mobile} alt="" className="rounded-lg mx-auto m-4 w-8/12" />
        <h3>Mobile Application</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          molestiae vel sunt dolor sed quasi facilis, odio molestias vitae sint.
        </p>
      </div>

      <div className="rounded-lg bg-white shadow-lg m-4 p-4 hover:bg-green-600 cursor-pointer transition duration-700 hover:scale-105 ease-in-out transform">
        <img src={Customize} alt="" className="rounded-lg mx-auto m-4 w-8/12" />
        <h3>Customization of existing Websites</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          molestiae vel sunt dolor sed quasi facilis, odio molestias vitae sint.
        </p>
      </div>

      <div className="rounded-lg bg-white shadow-lg m-4 p-4 hover:bg-green-600 cursor-pointer transition duration-700 hover:scale-105 ease-in-out transform">
        <img src={Landing} alt="" className="rounded-lg mx-auto m-4 w-8/12" />
        <h3>Resonsive modern Landing pages</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          molestiae vel sunt dolor sed quasi facilis, odio molestias vitae sint.
        </p>
      </div>
    </div>
  );
}
