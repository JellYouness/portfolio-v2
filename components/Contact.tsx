"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircleOutline,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
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

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  const emailSent = () => {
    setIsSent((current) => !current);
    setTimeout(() => {
      setIsSent((current) => !current);
    }, 3000);
  };

  const sendEmail = () => {
    form.current &&
      emailjs
        .sendForm("service_0uvn7ai", "template_e0dowwb", form.current, {
          publicKey: "dKYNURZMld6SibCCd",
        })
        .then(
          () => {
            emailSent();
            reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  };
  return (
    <section id="Contact" className="overflow-hidden py-16">
      <SlideUp>
        <div className="text-5xl py-10 font-semibold text-center">
          <span className="border-b-4 border-primary-main">Start a Project</span>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-y-8 space-y-6 md:space-y-0 md:space-x-6 justify-evenly items-center md:items-start flex-wrap">
          <div className="space-y-2 w-4/5 md:w-1/4 lg:w-1/4">
            <p className="text-3xl font-semibold border-b-4 border-primary-main pb-1">
              Let&apos;s Build Something Together
            </p>
            <p className="font-normal text-gray-500">
              Have a project in mind? Tell me about your business, what you need built, and your timeline.
              I&apos;ll get back to you within 24–48 hours.
            </p>
            <h4 className="text-xl font-medium border-b-2 border-primary-main w-20">
              Based in:
            </h4>
            <p>Casablanca, MA — working with clients worldwide.</p>
            <h4 className="text-xl font-medium border-b-2 border-primary-main w-14">
              Email:
            </h4>
            <p>younessjellouli12@gmail.com</p>
            <h4 className="text-xl font-medium border-b-2 border-primary-main w-10">
              Call:
            </h4>
            <p>+212 627 594 239</p>
            <div className="flex justify-between items-center gap-1 w-4/12 rounded-full py-2">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-4/5 md:w-2/5 lg:w-2/5 mt-5 lg:mt-0">
            <h3 className="text-3xl font-semibold border-b-4 border-primary-main pb-1">
              Project Inquiry
            </h3>
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="mt-4 mb-16"
            >
              <div>
                <label htmlFor="name">Your Name:</label>
                <input {...register("name")} name="name" className="input" />
                {errors.name && (
                  <p className="text-red-500">{`${errors.name.message}`}</p>
                )}
                <label htmlFor="email">Your Email:</label>
                <input {...register("email")} name="email" className="input" />
                {errors.email && (
                  <p className="text-red-500">{`${errors.email.message}`}</p>
                )}
                <label htmlFor="company">Company / Project Name:</label>
                <input {...register("company")} name="company" className="input" />
                <label htmlFor="budget">Budget Range:</label>
                <select {...register("budget")} name="budget" className="input">
                  <option value="">Select a range</option>
                  <option value="Under $2k">Under $2k</option>
                  <option value="$2k–$5k">$2k–$5k</option>
                  <option value="$5k–$10k">$5k–$10k</option>
                  <option value="$10k+">$10k+</option>
                  <option value="Not sure">Not sure</option>
                </select>
                <label htmlFor="timeline">Timeline:</label>
                <select {...register("timeline")} name="timeline" className="input">
                  <option value="">Select a timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1–2 months">1–2 months</option>
                  <option value="3+ months">3+ months</option>
                  <option value="Flexible">Flexible</option>
                </select>
                <label htmlFor="message">Project Details:</label>
                <textarea
                  {...register("message")}
                  name="message"
                  className="input"
                  rows={5}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
                {errors.message && (
                  <p className="text-red-500">{`${errors.message.message}`}</p>
                )}
                {isSent && (
                  <div className="bg-[#D4EDDA] text-[#558B7A] rounded-lg py-3 px-3">
                    <CheckCircleOutline /> Thanks! I&apos;ll review your project and get back to you soon.
                  </div>
                )}
                <div className="text-left lg:text-start">
                  <button
                    id="submit-btn"
                    disabled={isSubmitting}
                    type="submit"
                    className="btn"
                  >
                    Send Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};
export default Contact;
