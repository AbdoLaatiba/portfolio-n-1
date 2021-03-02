import React from "react";

export default function Footer() {
  return (
    <footer
      className=""
      style={{
        backgroundColor: "#D4DADE",
      }}
    >
      <div className="footer container mx-auto md:flex w-full justify-between items-center ">
        <div>
          <ul className="flex justify-between items-center">
            <li>
              <i class="fab fa-facebook"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-github"></i>
            </li>
          </ul>
        </div>
        <div className="sm:m-4 sm:p-4">
          <p className="text-basexl">
            Made with Love by{" "}
            <span className="italic font-bold">Abdelwahd Laatiba</span>
          </p>
        </div>
        <div className="sm:m-4">
          <i className="fas fa-arrow-circle-up p-4"></i>
        </div>
      </div>
    </footer>
  );
}
