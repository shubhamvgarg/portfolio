import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/shubhamvgarg" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/garg07shubh" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_shubh.garg/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
