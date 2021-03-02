import React from "react";
import Profile from "../../assets/profile.png";

export default function About() {
  return (
    <div className="about md:flex">
      <div className="bio">
        <div>
          <img
            src={Profile}
            alt=""
            className="rounded-full w-8/12 mx-auto mb-4"
          />
        </div>
        <div>
          <h3 className="text-3xl italic font-bold">Abdelwahd Laatiba</h3>
          <h4 className="text-2xl italic underline">Web Developper</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus repudiandae illum itaque expedita quam architecto perspiciatis
            voluptatem blanditiis, soluta facilis, a in molestias! Asperiores
            dolores reiciendis voluptatem. Doloremque, vel!
          </p>
        </div>
      </div>
      <div className="front-end">
        <h3 className="text-2xl italic">Front End Skills</h3>
        <ul>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>HTML5</h1>
              <Progress size={90} />
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>CSS3</h1>
              <Progress size={80} />
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>Javascript</h1>
              <Progress size={80} />
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>ReactJS</h1>
              <Progress size={70} />
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>TailwindCSS</h1>
              <Progress size={60} />
            </div>
          </li>
        </ul>
      </div>

      <div className="back-end">
        <h3 className="text-2xl italic">Back End Skills</h3>
        <ul>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>NodeJS</h1>
              <Progress size={50} />
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>ExpressJS</h1>
              <Progress size={60} />
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: 20 }}>Mongodb</h1>
              <Progress size={40} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

const Progress = ({ size }) => (
  <div
    style={{
      width: "100%",
      hidden: 20,
      display: "inline-block",
      backgroundColor: "teal",
      borderRadius: 20,
      height: 10,
    }}
  >
    <div
      style={{
        width: `${size}%`,
        backgroundColor: "tomato",
        borderRadius: 20,
        height: "100%",
      }}
    ></div>
  </div>
);
