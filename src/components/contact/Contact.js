import React, { useRef } from "react";
import "./Contact.css";
import linkedinLogo from "./linkedinlogo.png";
import github from "./github.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithubSquare,
  FaMedium,
  FaPython,
  FaJs,
} from "react-icons/fa";
import { SiC } from "react-icons/si";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fh7x2cl",
        "template_ivamkkz",
        form.current,
        "bDkVxeoYUSrAX4V8H"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact" className="p-5">
        <div className="flex justify-center items-center text-center text-white">
          <Title des="connect!"></Title>
        </div>
        <span className="contactDesc text-white">
          i'd love the opportunity to connect more so feel free to reach out to
          my email wangmark24@gmail.com or you can fill out the email form below
          to connect!
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="onSubmit" value="Send" className="submitBtn text-black">
            Submit
          </button>
          {/* <div className="links">
            <img src={linkedinLogo} alt="1" className="link" />
            <img src={github} alt="2" className="" />
            <img src={linkedinLogo} alt="3" className="link" />
            <img src={linkedinLogo} alt="4" className="link" />
          </div> */}
        </form>
        <div className="flex gap-4 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/markwang0/"
            target="_blank"
            rel="noopener noreferrer"
            className="banner2Icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/markw24"
            target="_blank"
            rel="noopener noreferrer"
            className="banner2Icon"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://medium.com/@wangmark24"
            target="_blank"
            rel="noopener noreferrer"
            className="banner2Icon"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
