import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 py-10 sm:px-20">
      <div className="sm:flex grid sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold">Trippy</h1>
          <p className="font-light sm:mt-2">Choose your favourite destination.</p>
        </div>
        <div className="flex gap-2 mt-2 text-2xl sm:text-4xl">
          <a href='/'>
          <FaFacebookSquare />
          </a>
          <a href='/'>
          <FaInstagramSquare />
          </a>
          <a href='/'>
          <FaGithubSquare />
          </a>
          <a href='/'>
          <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2 mt-8 gap-4 sm:gap-32 sm:text-xl">
        <div>
          <h4 className="mb-2 text-xl sm:text-2xl font-bold">Project</h4>
          <div className="flex-col font-light">
            <div>Changelog</div>
            <div>Status</div>
            <div>License</div>
            <div>All version</div>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-xl sm:text-2xl font-bold">Community</h4>
          <div className="flex-col font-light">
            <div>Github</div>
            <div>Issues</div>
            <div>Projects</div>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-xl sm:text-2xl font-bold">Help</h4>
          <div className="flex-col font-light">
            <div>Support</div>
            <div>Contact us</div>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-xl sm:text-2xl font-bold">Others</h4>
          <div className="flex-col font-light">
            <div>Terms of service</div>
            <div>Privacy & Policy</div>
            <div>About</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;