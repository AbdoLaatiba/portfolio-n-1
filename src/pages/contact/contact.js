import React from "react";
import Image from "../../assets/contact.jpg";

export default function Contact() {
  return (
    <div className="contact flex justify-center container mx-auto">
      <div className="flex-1 md:flex items-center hidden ">
        <img
          src={Image}
          alt=""
          className="self-center my-auto block rounded-full"
          style={{
            width: 400,
            height: 400,
            margin: "auto",
          }}
        />
      </div>
      <form
        method="post"
        className="flex flex-col w-full flex-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="text" placeholder="full name ..." />
        <input type="email" placeholder="email ..." />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message ..."
        ></textarea>
        <input type="submit" value="Send" className="bg-indigo-90 font-bold" />
      </form>
    </div>
  );
}
