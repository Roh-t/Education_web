// src/components/About.jsx
import React from "react";
import { Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import chatgpt from "../images/chatgpt.jpeg";

const About = () => {
  return (
    <section
      className="w-full bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-12 shadow-[0_0_80px_rgba(255,255,255,0.1)]"
      aria-labelledby="about-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <figure className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-xl">
          <img
            src={chatgpt}
            alt="Portrait of Dhruv Rathee - YouTube Educator"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <figcaption className="sr-only">Dhruv Rathee Profile</figcaption>
        </figure>

        {/* Right Side - Text Content */}
        <article className="md:w-1/2 w-full">
          <header>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2">
              About
            </p>
            <h1
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold mb-2 leading-tight"
            >
              Dhruv Rathee
            </h1>
            <p className="bg-gray-700 text-xs sm:text-sm inline-block px-4 py-1 rounded-full mb-4">
              YouTube Educator, Activist & Travel Vlogger
            </p>
          </header>

          <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 mb-6">
            <p>
              I create informative, educational videos with clear, objective
              explanations of complex topics.
            </p>
            <p>
              I’m passionate about promoting truth, democracy, rationalism, and
              critical thinking through engaging content.
            </p>
          </div>

          {/* Social Links */}
          <nav
            className="flex items-center gap-3"
            aria-label="Social media links"
          >
            <span className="text-gray-400 text-sm">Follow me:</span>
            <a
              href="https://www.youtube.com/@DhruvRathee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/dhruvrathee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/dhruv_rathee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/DhruvRatheePage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </nav>
        </article>
      </div>
    </section>
  );
};

export default About;
