import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithubSquare,
  FaMedium,
  FaPython,
  FaJs,
  FaLinkedin,
  FaMediumM,
} from "react-icons/fa";
import logo from "./mark-logo.png";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    // flex justify-right items-center p-4 bg-[#05081e]
    <div className="text-right text-4xl sticky p-3 top-0 z-50 bg-gray-900 justify-between font-titleFont border-b-[1px] border-b-white">
      <div className="flex justify-between text-4xl p-3">
        {/* <img src={logo} className="w-20 h-20 object-cover rounded-full" /> */}
        <div className="text-2xl font-bold text-white pl-1 z-50 top-0">mw</div>

        <ul className="text-right hidden mdl:inline-flex items-center gap-6 lg:gap-10 hover:text-cyan-400 duration-300">
          <a
            href="https://drive.google.com/file/d/1HDRz2_NLd5C575ikcS1bwtcj6DisEC2J/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xl text-white tracking-wide cursor-pointer hover:text-cyan-400 duration-300">
              resumé
            </div>
          </a>
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-xl text-white tracking-wide cursor-pointer hover:text-cyan-400 duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-cyan-400 cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[20%] fixed h-screen overflow-scroll absolute left-0 bg-gray-900 p-4 scrollbar-hide">
            <ul className="flex flex-col gap-6 mt-20 mr-1 items-center mb-20">
              <a
                href="https://drive.google.com/file/d/1HDRz2_NLd5C575ikcS1bwtcj6DisEC2J/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-base mt-5 font-normal text-gray-400 tracking-wide cursor-pointer hover:text-cyan-400 duration-300">
                  resumé
                </div>
              </a>
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-cyan-400 duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 items-center justify-center mt-auto">
              <h2 className="text-base font-titleFont mb-12 absolute bottom-12">
                find me on
              </h2>
              <div className="flex gap-4 items-center justify-center w-[100%] absolute bottom-3 mt-5 mb-4">
                <span className="bannerIcon">
                  <FaLinkedin />
                </span>
                <span className="bannerIcon">
                  <FaGithubSquare />
                </span>
                <span className="bannerIcon">
                  <FaMediumM />
                </span>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
