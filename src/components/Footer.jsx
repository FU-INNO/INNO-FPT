import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b2939] text-white py-10 px-5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4">ECOLOGY</h3>
          <p className="mb-4">
            Our environment is changing quickly and, without a quick
            transformation program, we will witness outrageous climate
            occasions.
          </p>
          <a href="#" className="text-[#d8b952]">
            Read More
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul>
            <li>Recycle Project</li>
            <li>Save Animals</li>
            <li>Charity For Live</li>
            <li>Protecting Nature</li>
            <li>Eco System</li>
            <li>Tree Plantation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul>
            <li className="mb-2">
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              info@example.com
            </li>
            <li className="mb-2">
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              (+44) 123 456 789
            </li>
            <li className="mb-2">
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              66 Guild Street 512B, Great North Town.
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-[#22836c] p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#22836c] p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#22836c] p-2 rounded-full">
              <FaYoutube />
            </a>
            <a href="#" className="bg-[#22836c] p-2 rounded-full">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://ecology.websitelayout.net/img/content/work-04.jpg"
              alt="Gallery item"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://ecology.websitelayout.net/img/content/work-04.jpg"
              alt="Gallery item"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://ecology.websitelayout.net/img/content/work-04.jpg"
              alt="Gallery item"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://ecology.websitelayout.net/img/content/work-04.jpg"
              alt="Gallery item"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://ecology.websitelayout.net/img/content/work-04.jpg"
              alt="Gallery item"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://ecology.websitelayout.net/img/content/work-04.jpg"
              alt="Gallery item"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 mt-10 pt-5">
        <p>
          © 2024 Ecology Powered by{" "}
          <a href="#" className="text-[#d8b952]">
            Chitrakoot Web
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
