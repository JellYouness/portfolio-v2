"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import SlideUp from "@/utils/SlideUp";

const socials = [
  {
    link: "https://github.com/JellYouness",
    icon: <GitHub className="text-3xl" />,
  },
  {
    link: "https://www.linkedin.com/in/youness-jellouli/",
    icon: <LinkedIn className="text-3xl" />,
  },
  {
    link: "https://www.instagram.com/yns_jell/",
    icon: <Instagram className="text-3xl" />,
  },
];

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    form.current &&
      emailjs
        .sendForm("service_0uvn7ai", "template_e0dowwb", form.current, {
          publicKey: "dKYNURZMld6SibCCd",
        })
        .then(
          () => {
            setIsSent((current) => !current);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    form.current && form.current.reset();
  };
  return (
    <section id="Contact" className="overflow-hidden py-16">
      <SlideUp>
        <div className="text-5xl py-10 font-semibold text-center">
          <span className="border-b-4 border-primary-main">Contact</span>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-y-8 space-y-6 md:space-y-0 md:space-x-6 justify-evenly items-center md:items-start flex-wrap">
          <div className="space-y-2 w-4/5 md:w-1/4 lg:w-1/4">
            <p className="text-3xl font-semibold border-b-4 border-primary-main pb-1">
              Let's Get in Touch
            </p>
            <p className="font-normal text-gray-500">
              I enjoy discussing new projects and design challenges. Please
              share as much info as possible so we can get the most out of our
              first catch-up.
            </p>
            <h4 className="text-xl font-medium">Living In:</h4>
            <p className="text-gray-500">Casablanca, MA.</p>
            <h4 className="text-xl font-medium">Email:</h4>
            <p className="text-gray-500">younessjellouli12@gmail.com</p>
            <h4 className="text-xl font-medium">Call:</h4>
            <p className="text-gray-500">+212 627 594 239</p>
            <div className="flex justify-between items-center gap-1 w-4/12 rounded-full  py-2">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="hover:scale-125 hover:transition delay-100"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-4/5 md:w-1/4 lg:w-1/4 mt-5 lg:mt-0">
            <h3 className="text-3xl font-semibold border-b-4 border-primary-main pb-1">
              Send Me an Email
            </h3>
            <form ref={form} onSubmit={sendEmail} className="mt-4 mb-16">
              <div className="space-y-3">
                <label htmlFor="name" className="text-gray-500">
                  Your Name:
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b-2 border-gray-300 mb-3 focus:outline-0 focus:border-gray-800"
                />
                <label htmlFor="email" className="text-gray-500">
                  Your Email:
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b-2 border-gray-300 mb-3 focus:outline-0 focus:border-gray-800"
                />
                <label htmlFor="message" className="text-gray-500">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-transparent border-b-2 border-gray-300 mb-3 focus:outline-0 focus:border-gray-800"
                  rows={5}
                />
                {isSent && <div>Your Message has been sent.</div>}
                <div className="text-left lg:text-start">
                  <button id="submit-btn" type="submit" className="btn">
                    Send
                  </button>
                </div>
                {
                  // TODO: Add an alert when the mail is sent successfully
                }
              </div>
            </form>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};
export default Contact;
